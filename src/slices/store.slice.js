import * as storeService from '../services/store.service';
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  storeLoading: false,
  stores: [],
  storesError: null,
  formValues: {},
};

const storeSlice = createSlice({
  name: 'store',
  initialState: INITIAL_STATE,
  reducers: {
    fetchStoreLoding: (state) => {
      state.storeLoading = true;
      state.error = null;
    },
    fetchStoreSuccess: (state, action) => {
      state.storeLoading = false;
      state.stores = action.payload;
      state.error = null;
    },
    fetchStoreFailure: (state, action) => {
      state.storeLoading = false;
      state.storesError = action.payload;
    },
    setFormValues: (state, action) => {
      state.formValues = action.payload;
    },
    setStoreInfo: (state, action) => {
      state.storeInfo = action.payload;
    },
  },
});

export const actions = storeSlice.actions;

export const fetchStores = (params) => (dispatch) => {
  dispatch(actions.fetchStoreLoding());
  return storeService
    .getStoreList(params)
    .then((res) => {
      dispatch(actions.fetchStoreSuccess(res?.data));
      dispatch(actions.setFormValues(params));
      return res?.data;
    })
    .catch((err) => {
      dispatch(actions.fetchStoreFailure(err.response));
      throw err;
    });
};

export default storeSlice;
