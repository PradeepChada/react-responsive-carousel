// NOSONAR

import React from 'react';
import { Button, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { fetchStores } from '../../../slices/store.slice';

const validationSchema = Yup.object({
  zipCode: Yup.number('Zip Code must be a number').required(
    'Zip code required'
  ),
});

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
    validationSchema: validationSchema,
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

export default SearchByZip;
