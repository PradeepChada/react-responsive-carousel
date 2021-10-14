import * as skuService from '../services/skuService';
import { createSlice } from '@reduxjs/toolkit';
import { skuErrorMessages } from '../constants/errorMessages';

const INITIAL_STATE = {
  loading: false,
  skuData: null,
  error: null,
  skuAvailabilityLoading: false,
  skuAvailability: null,
  skuAvailabilityError: null
};

const skuSlice = createSlice({
  name: 'sku',
  initialState: INITIAL_STATE,
  reducers: {
    loading: (state) => {
      state.loading = true;
    },
    success: (state, action) => {
      state.loading = false;
      state.skuData = action.payload;
    },
    failure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    inventoryLoading: (state) => {
      state.loading = true;
    },
    inventorySuccess: (state, action) => {
      state.loading = false;
      state.skuData = action.payload;
    },
    inventoryFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
});

const actions = skuSlice.actions;

export const fetchSkuDetails = (skuCode, storeId) => (dispatch) => {
  dispatch(actions.loading());
  skuService.getSkuInfo(skuCode, storeId)
    .then((res) => {
      if (res?.status === 204)
        dispatch(actions.failure(skuErrorMessages.notFound));
      else
        dispatch(actions.success(res?.data));
    })
    .catch(() => {
      dispatch(actions.failure(skuErrorMessages.UnknownError));
    });
};

export const fetchSkuAvailability = (skuCode) => (dispatch) => {
  dispatch(actions.inventoryLoading());
  skuService.getSkuAvailability(skuCode)
    .then((res) => {
      dispatch(actions.inventorySuccess(res));
    })
    .catch(() => {
      dispatch(actions.inventoryFailure(skuErrorMessages.UnknownError));
    });
};


export default skuSlice;
