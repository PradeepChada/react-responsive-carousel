import React, { useState } from 'react';
import { PageContainer } from './Login.styles';
import AppLogo from './../../assets/images/logo.svg';
import {
  Button,
  Grid,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, actions as loginActions } from '../../slices/auth.slice';

const initialValues = {
  emp_id: '',
  password: '',
};

const validationSchema = Yup.object({
  emp_id: Yup.string().required('Employee Id required'),
  password: Yup.string().required('Password required'),
});

const Login = () => {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const { loginLoading, loginError } = useSelector((state) => state.auth);

  const handleLogin = (formValues) => {
    dispatch(loginUser(formValues));
  };

  const handleChangeInput = (e) => {
    dispatch(loginActions.resetLoginError());
    handleChange(e);
  };

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema,
      onSubmit: handleLogin,
    });
  return (
    <PageContainer>
      <img className='app-logo' src={AppLogo} alt='logo' />
      <Typography variant='h4'>Mobius</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container rowSpacing={3}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              name='emp_id'
              label='Employee Id'
              value={values.emp_id}
              onChange={handleChangeInput}
              onBlur={handleBlur}
              error={(!!errors.emp_id && touched.emp_id) || loginError}
              helperText={touched.emp_id && errors.emp_id}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl
              variant='outlined'
              fullWidth
              error={(!!errors.password && touched.password) || loginError}
            >
              <InputLabel htmlFor='outlined-adornment-password'>
                Password
              </InputLabel>
              <OutlinedInput
                fullWidth
                id='outlined-adornment-password'
                name='password'
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChangeInput}
                onBlur={handleBlur}
                endAdornment={
                  <InputAdornment position='end'>
                    <IconButton
                      aria-label='toggle password visibility'
                      onClick={() => setShowPassword((val) => !val)}
                      edge='end'
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                label='Password'
              />
              <FormHelperText>
                {touched.password && errors.password}
              </FormHelperText>
            </FormControl>
          </Grid>
          {loginError && (
            <Typography className='invalid-creds'>
              The email or assword you entered is incorrect, please try again.
            </Typography>
          )}
          <Grid item xs={12}>
            <Button
              className='submit-button'
              fullWidth
              type='submit'
              variant='contained'
            >
              {loginLoading ? 'SIGNING IN' : 'SIGN IN'}
            </Button>
          </Grid>
        </Grid>
      </form>
    </PageContainer>
  );
};

export default Login;
