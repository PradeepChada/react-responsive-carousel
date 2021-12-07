import React, { useState } from 'react';
import { Tabs, Tab, Button, Grid, Typography, Alert } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import stateList from './../../constants/states.json';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ContentWrapper, PageContainer, StoreList } from './StoreSearch.styles';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStores, actions as storeActions } from '../../slices/store.slice';

const validationSchema = {
  byState: Yup.object({
    city: Yup.string().required('City required'),
    state: Yup.string().required('State required'),
  }),
  byZip: Yup.object({
    zipCode: Yup.number('Zip Code must be a number').required(
      'Zip code required'
    ),
  }),
};

const Panel = (props) => (
  <Grid
    hidden={props.value !== props.index}
    sx={{ marginTop: '1rem', height: '100%' }}
  >
    {props.children}
  </Grid>
);

const SearchByCity = ({ history, setPickStore, storeLoading }) => {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const { values, errors, touched, handleSubmit, handleBlur, handleChange } =
    useFormik({
      initialValues: {
        city: '',
        state: '',
      },
      validationSchema: validationSchema.byState,
      onSubmit: (obj) => handleSearch(obj),
    });

  const handleSearch = (formValues) => {
    setError(false);
    dispatch(fetchStores(formValues))
      .then((data) => {
        if (data.length > 0) {
          setPickStore(true);
        } else {
          throw new Error();
        }
      })
      .catch(() => {
        setError(true);
      });
  };

  return (
    <form style={{ height: '100%' }} onSubmit={handleSubmit}>
      <Grid className='tab-content' container justifyContent='space-between'>
        <Grid item xs={12}>
          <Grid container rowSpacing={3}>
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
              <FormControl fullWidth error={!!errors.state && touched.state}>
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
                <FormHelperText>{touched.state && errors.state}</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
          {error && (
            <Alert icon={false} severity='error'>
              This is an error alert — check it out!
            </Alert>
          )}
        </Grid>
        <Grid item xs={12} alignItems='flex-end'>
          <Grid container rowSpacing={2}>
            <Grid item xs={12}>
              <Button size='large' fullWidth variant='contained' type='submit'>
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

const SearchByZip = ({ history, setPickStore, storeLoading }) => {
  const dispatch = useDispatch();
  const {
    values,
    errors,
    handleSubmit,
    handleBlur,
    handleChange,
    setFieldError,
  } = useFormik({
    initialValues: {
      zipCode: '',
    },
    validationSchema: validationSchema.byZip,
    onSubmit: (obj) => handleSearch(obj),
  });

  const handleSearch = (formValues) => {
    dispatch(fetchStores(formValues))
      .then((data) => {
        if (data.length > 0) {
          setPickStore(true);
        } else {
          throw new Error();
        }
      })
      .catch(() => {
        setFieldError('zipCode', 'There are no stores near entered zip code.');
      });
  };
  return (
    <form style={{ height: '100%' }} onSubmit={handleSubmit}>
      <Grid className='tab-content' container justifyContent='space-between'>
        <Grid item xs={12}>
          <Grid container rowSpacing={3}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                name='zipCode'
                label='Zip Code'
                value={values.zipCode}
                onChange={handleChange}
                onBlur={handleBlur}
                error={!!errors.zipCode}
                helperText={errors.zipCode}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} alignItems='flex-end'>
          <Grid container rowSpacing={2}>
            <Grid item xs={12}>
              <Button size='large' fullWidth variant='contained' type='submit'>
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
  const [index, setIndex] = useState(0);
  const [pickStore, setPickStore] = useState(false);

  const { stores, storeLoading, formValues } = useSelector(
    (state) => state.store
  );

  const onTabClicked = (_, i) => {
    setIndex(i);
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
          {/* <AppBar position='static' color='default'> */}
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
          {/* </AppBar> */}
          <Panel value={index} index={0}>
            <SearchByCity
              history={history}
              setPickStore={setPickStore}
              storeLoading={storeLoading}
            />
          </Panel>
          <Panel value={index} index={1}>
            <SearchByZip
              setPickStore={setPickStore}
              storeLoading={storeLoading}
            />
          </Panel>
        </ContentWrapper>
      )}
    </PageContainer>
  );
};

export default StoreSearch;
