import * as recommendedService from '../services/recommended.service';
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  freqBoughtLoading: false,
  freqBoughtProducts: [],
  freqBoughtError: null,
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
      state.error = null;
    },
    fetchFreqBoughtFailure: (state, action) => {
      state.freqBoughtLoading = false;
      state.freqBoughtError = action.payload;
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
      dispatch(actions.fetchFreqBoughtFailure(err.response));
    });
};

export default freqBoughtSlice;
