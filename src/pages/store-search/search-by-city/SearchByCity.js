import React, { useState } from 'react';
import { Button, Grid, Alert } from '@mui/material';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import stateList from './../../../constants/states.json';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { fetchStores } from '../../../slices/store.slice';

const validationSchema = Yup.object({
  city: Yup.string().required('City required'),
  state: Yup.string().required('State required'),
});

const SearchByCity = ({ history, setPickStore, storeLoading }) => {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();
  const { values, errors, touched, handleSubmit, handleBlur, handleChange } =
    useFormik({
      initialValues: {
        city: '',
        state: '',
      },
      validationSchema: validationSchema,
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

export default SearchByCity;
