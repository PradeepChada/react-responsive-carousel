import * as currencyService from '../services/currencyService';
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  loading: false,
  currencyDetails: [],
  error: null,
};

const currencySlice = createSlice({
  name: 'currency',
  initialState: INITIAL_STATE,
  reducers: {
    loading: (state) => {
      state.loading = true;
    },
    success: (state, action) => {
      state.loading = false;
      state.currencyDetails = action.payload;
    },
    failure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const actions = currencySlice.actions;

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

export default currencySlice;
