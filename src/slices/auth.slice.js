import * as authService from '../services/auth.service';
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  loginLoading: false,
  authenticated: false,
  profile: null,
  loginError: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    loginLoading: (state) => {
      state.loginLoading = true;
      state.loginError = null;
    },
    loginSuccess: (state, action) => {
      state.authenticated = true;
      state.profile = action.payload;
      state.loginLoading = false;
      state.loginError = null;
    },
    loginFailure: (state, action) => {
      state.loginLoading = false;
      state.loginError = action.payload;
    },
    resetLoginError: (state) => {
      state.loginError = null;
    },
  },
});

export const actions = authSlice.actions;

export const loginUser = (body) => (dispatch) => {
  dispatch(actions.loginLoading());
  authService
    .signInUser(body)
    .then((res) => {
      dispatch(actions.loginSuccess(res?.data));
    })
    .catch((err) => {
      dispatch(actions.loginFailure(err));
    });
};

export default authSlice;
