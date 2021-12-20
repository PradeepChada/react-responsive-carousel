import * as recommendedService from '../services/recommended.service';
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  freqBoughtLoading: false,
  freqBoughtProducts: [],
  freqBoughtError: null,

  custViewedLoading: false,
  custViewedProducts: [],
  custViewedError: null,
};

const freqBoughtSlice = createSlice({
  name: 'recommended',
  initialState: INITIAL_STATE,
  reducers: {
    fetchFreqBoughtLoding: (state) => {
      state.freqBoughtLoading = true;
      state.error = null;
    },
    fetchFreqBoughtSuccess: (state, action) => {
      state.freqBoughtLoading = false;
      state.freqBoughtProducts = action.payload;
    },
    fetchFreqBoughtFailure: (state, action) => {
      state.freqBoughtLoading = false;
      state.freqBoughtError = action.payload;
    },

    fetchCustViewedLoding: (state) => {
      state.custViewedLoading = true;
      state.custViewedError = null;
    },
    fetchCustViewedSuccess: (state, action) => {
      state.custViewedLoading = false;
      state.custViewedProducts = action.payload;
    },
    fetchCustViewedFailure: (state, action) => {
      state.custViewedLoading = false;
      state.custViewedError = action.payload;
    },
  },
});

export const actions = freqBoughtSlice.actions;

export const fetchFreqBoughtProducts = () => (dispatch) => {
  dispatch(actions.fetchFreqBoughtLoding());
  return recommendedService
    .getFreqBoughtProducts()
    .then((res) => {
      dispatch(actions.fetchFreqBoughtSuccess(res?.data));
    })
    .catch((err) => {
      dispatch(actions.fetchFreqBoughtFailure(err));
    });
};

export const fetchCustViewedProducts = () => (dispatch) => {
  dispatch(actions.fetchCustViewedLoding());
  return recommendedService
    .getCustViewedProducts()
    .then((res) => {
      dispatch(actions.fetchCustViewedSuccess(res?.data));
    })
    .catch((err) => {
      dispatch(actions.fetchCustViewedFailure(err));
    });
};

export default freqBoughtSlice;
