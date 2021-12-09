import React, { useState } from 'react';
import {
  Tabs,
  Tab,
  Button,
  Grid,
  Typography,
  TextField,
  FormControl,
  FormHelperText,
  MenuItem,
  InputLabel,
  Select,
  Alert,
} from '@mui/material';
import { ContentWrapper, PageContainer, StoreList } from './StoreSearch.styles';
import { useDispatch, useSelector } from 'react-redux';
import { actions as storeActions } from '../../slices/store.slice';
import { useFormik } from 'formik';
import stateList from './../../constants/states.json';
import * as Yup from 'yup';
import { fetchStores } from './../../slices/store.slice';

const validationSchemaZip = Yup.object({
  city: Yup.string().required('City required'),
  state: Yup.string().required('State required'),
  zipCode: Yup.number('Zip Code must be a number').required(
    'Zip code required'
  ),
});

const Panel = (props) => (
  <Grid sx={{ marginTop: '1rem', height: '100%' }}>{props.children}</Grid>
);

const PickStore = ({ stores, formValues, history }) => {
  const dispatch = useDispatch();
  const formInputStr = Object.values(formValues).join(', ');
  const handleSelectStore = (storeInfo) => {
    localStorage.setItem('storeInfo', JSON.stringify(storeInfo));
    dispatch(storeActions.setStoreInfo(storeInfo));
    history.goBack();
  };
  return (
    <StoreList container>
      <Grid item className='selected-store'>
        <Typography variant='h5'> Stores Near: {formInputStr}</Typography>
        <Typography variant='subtitle2'>within 100mi</Typography>
      </Grid>
      {stores.map((item) => {
        return (
          <Grid
            className='store-tile'
            item
            justifyContent='space-between'
            display='flex'
            xs={12}
          >
            <Typography variant='body1'>{item.name}</Typography>
            <Button variant='text' onClick={() => handleSelectStore(item)}>
              Select Store
            </Button>
          </Grid>
        );
      })}
    </StoreList>
  );
};

const StoreSearch = ({ history }) => {
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const [pickStore, setPickStore] = useState(false);
  const [error, setError] = useState(false);
  const { stores, storeLoading, formValues } = useSelector(
    (state) => state.store
  );

  const {
    values,
    errors,
    touched,
    handleSubmit,
    handleBlur,
    handleChange,
    setFieldError,
    setFieldValue,
  } = useFormik({
    initialValues: {
      city: '',
      state: '',
    },
    validationSchema: validationSchemaZip,
    onSubmit: (obj) => handleSearch(obj),
  });

  const handleSearch = (formData) => {
    debugger;
    setError(false);
    const body = {
      ...(index === 0
        ? {
            state: formData?.state,
            city: formData?.city,
          }
        : {
            zipCode: formData?.zipCode,
          }),
    };
    dispatch(fetchStores(body))
      .then((data) => {
        if (data.length > 0) {
          setPickStore(true);
        } else {
          throw new Error();
        }
      })
      .catch(() => {
        index === 0
          ? setError(true)
          : setFieldError(
              'zipCode',
              'There are no stores near entered zip code.'
            );
      });
  };

  const onTabClicked = (_, i) => {
    setIndex(i);
  };

  const renderForm = () => {
    return (
      <form style={{ height: '100%' }} onSubmit={handleSubmit}>
        <Grid className='tab-content' container justifyContent='space-between'>
          <Grid item xs={12}>
            <Grid container rowSpacing={3}>
              {index === 0 ? (
                <>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      name='city'
                      label='City'
                      value={values.city}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={!!errors.city && touched.city}
                      helperText={touched.city && errors.city}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <FormControl
                      fullWidth
                      error={!!errors.state && touched.state}
                    >
                      <InputLabel id='state'>State</InputLabel>
                      <Select
                        labelId='state'
                        name='state'
                        value={values.state}
                        label='State'
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <MenuItem value=''>Select State</MenuItem>
                        {stateList.map((item) => (
                          <MenuItem value={item.value}>{item.name}</MenuItem>
                        ))}
                      </Select>
                      <FormHelperText>
                        {touched.state && errors.state}
                      </FormHelperText>
                    </FormControl>
                  </Grid>
                </>
              ) : (
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name='zipCode'
                    label='zipCode'
                    value={values.zipCode}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={!!errors.zipCode && touched.zipCode}
                    helperText={touched.zipCode && errors.zipCode}
                  />
                </Grid>
              )}
            </Grid>
            {error && index === 0 && (
              <Alert icon={false} severity='error'>
                There are no stores in the selected City and State.
              </Alert>
            )}
          </Grid>
          <Grid item xs={12} alignItems='flex-end'>
            <Grid container rowSpacing={2}>
              <Grid item xs={12}>
                <Button
                  size='large'
                  fullWidth
                  variant='contained'
                  type='submit'
                >
                  {storeLoading ? 'SEARCHING' : 'SEARCH'}
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Button
                  size='large'
                  fullWidth
                  variant='outlined'
                  onClick={() => history.goBack()}
                  className='no-border'
                >
                  CANCEL
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    );
  };

  return (
    <PageContainer>
      {pickStore ? (
        <PickStore
          stores={stores}
          setPickStore={setPickStore}
          formValues={formValues}
          history={history}
        />
      ) : (
        <ContentWrapper>
          <Tabs value={index} variant='fullWidth' onChange={onTabClicked}>
            <Tab
              label='CITY & STATE'
              sx={{
                backgroundColor: 'white',
                fontWeight: '700',
                color: '#000000',
                letterSpacing: 2,
                border: '2px solid',
                borderColor: '#F6F6FA',
              }}
            />
            <Tab
              label='ZIP CODE'
              sx={{
                backgroundColor: 'white',
                fontWeight: '700',
                color: '#000000',
                letterSpacing: 2,
                border: '2px solid',
                borderColor: '#F6F6FA',
              }}
            />
          </Tabs>
          <Panel value={index}>{renderForm()}</Panel>
        </ContentWrapper>
      )}
    </PageContainer>
  );
};

export default StoreSearch;
