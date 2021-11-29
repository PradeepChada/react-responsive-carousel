import * as currencyService from '../services/currencyService';
import { createSlice } from '@reduxjs/toolkit';
import { popAccountDetails } from '../utils/MockData';
const INITIAL_STATE = {
  loading: false,
  accountDetails: [],
  mainAccount: null,
  error: null,
};

const popAccountSlice = createSlice({
  name: 'POPAccount',
  initialState: INITIAL_STATE,
  reducers: {
    loading: (state) => {
      state.loading = true;
    },
    success: (state, action) => {
      state.loading = false;
      state.accountDetails = action.payload;
    },
    setMain: (state, action) => {
      state.mainAccount = action.payload;
    },
    failure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const actions = popAccountSlice.actions;

export const fetchPOPAccountDetailsByPhone = (phone) => (dispatch) => {
  dispatch(actions.loading());
};

export const fetchPOPAccountDetailsByEmail = (email) => (dispatch) => {
  dispatch(actions.loading());
  setTimeout(() => {
    dispatch(actions.success(popAccountDetails.customers));
  }, 3000);
};

export const setMainPOPAccount = (account) => (dispatch) => {
  dispatch(actions.setMain(account));
};

export const fetchCurrencyDetails = (currency) => (dispatch) => {
  dispatch(actions.loading());
  currencyService
    .fetchCurrencyDetails(currency)
    .then((res) => {
      dispatch(actions.success(res?.data?.data?.rates));
    })
    .catch((err) => {
      dispatch(actions.failure(err));
    });
};

export default popAccountSlice;
