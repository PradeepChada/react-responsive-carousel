import * as storeService from '../services/store.service';
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  storeLoading: false,
  stores: [],
  storesError: null,
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
  },
});

export const actions = storeSlice.actions;

export const fetchStores = (params) => (dispatch) => {
  dispatch(actions.fetchStoreLoding());
  storeService
    .getStoreList(params)
    .then((res) => {
      dispatch(actions.fetchStoreSuccess(res?.data));
    })
    .catch(({ response }) => {
      dispatch(actions.fetchStoreFailure(response));
    });
};

export default storeSlice;
