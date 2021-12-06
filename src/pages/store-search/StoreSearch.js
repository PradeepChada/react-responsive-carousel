import React, { useState } from 'react';
import { Tabs, Tab, Button, Grid, Typography } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import stateList from './../../constants/states.json';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ContentWrapper, PageContainer, StoreList } from './StoreSearch.styles';
import { useDispatch } from 'react-redux';
import { fetchStores } from '../../slices/store.slice';

const validationSchema = {
  byState: Yup.object({
    city: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
  }),
  byZip: Yup.object({
    zipCode: Yup.number('Zip Code must be a number').required('Required'),
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

const SearchByCity = ({ history }) => {
  const dispatch = useDispatch();
  const { values, errors, handleSubmit, handleBlur, handleChange } = useFormik({
    initialValues: {
      city: '',
      state: '',
    },
    validationSchema: validationSchema.byState,
    onSubmit: (obj) => handleSearch(obj),
  });

  const handleSearch = (formValues) => {
    dispatch(fetchStores(formValues));
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
                error={!!errors.city}
                helperText={errors.city}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth error={!!errors.state}>
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
                <FormHelperText>{errors.state}</FormHelperText>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} alignItems='flex-end'>
          <Grid container rowSpacing={2}>
            <Grid item xs={12}>
              <Button size='large' fullWidth variant='contained' type='submit'>
                SEARCH
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                size='large'
                fullWidth
                variant='outlined'
                onClick={() => history.push('/transaction-success')}
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

const SearchByZip = ({ history }) => {
  const { values, errors, handleSubmit, handleBlur, handleChange } = useFormik({
    initialValues: {
      zipCode: '',
    },
    validationSchema: validationSchema.byZip,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
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
                SEARCH
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button
                size='large'
                fullWidth
                variant='outlined'
                onClick={() => history.push('/transaction-success')}
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

const PickStore = () => {
  return (
    <StoreList container>
      <Grid item className='selected-store'>
        <Typography variant='h5'> Stores Near: 76018 </Typography>
        <Typography variant='subtitle2'>within 100mi</Typography>
      </Grid>
      {Array(8)
        .fill(null)
        .map((item) => {
          return (
            <Grid
              className='store-tile'
              item
              justifyContent='space-between'
              display='flex'
              xs={12}
            >
              <Typography variant='body1'>Arlington Highlands</Typography>
              <Button variant='text'>Select Store</Button>
            </Grid>
          );
        })}
    </StoreList>
  );
};

const StoreSearch = ({ history }) => {
  const [index, setIndex] = useState(0);
  const [pickStore, setPickStore] = useState(false);

  const onTabClicked = (_, i) => {
    setIndex(i);
  };

  return (
    <PageContainer>
      {pickStore ? (
        <PickStore />
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
            <SearchByCity history={history} />
          </Panel>
          <Panel value={index} index={1}>
            <SearchByZip />
          </Panel>
        </ContentWrapper>
      )}
    </PageContainer>
  );
};

export default StoreSearch;
