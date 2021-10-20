import * as skuService from '../services/sku.service';
import { createSlice } from '@reduxjs/toolkit';
import { skuErrorMessages } from '../constants/errorMessages';

const INITIAL_STATE = {
  loading: false,
  skuData: null,
  error: null,
  // error: skuErrorMessages.malfunction,
  skuAvailabilityLoading: false,
  skuAvailability: null,
  skuAvailabilityError: null,

  mktAvailLoading: false,
  mktAvailData: null,
  mktAvailError: null
};

const skuSlice = createSlice({
  name: 'sku',
  initialState: INITIAL_STATE,
  reducers: {
    loading: (state) => {
      state.loading = true;
      // state.skuData = null;
      state.error = null
    },
    success: (state, action) => {
      state.loading = false;
      state.skuData = action.payload;
    },
    failure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    reset: () => {
      return INITIAL_STATE
    },
    skuAvailabilityLoading: (state) => {
      state.skuAvailabilityLoading = true;
      state.skuAvailability = null;
      state.skuAvailabilityError = null;
    },
    skuAvailabilitySuccess: (state, action) => {
      state.skuAvailabilityLoading = false;
      state.skuAvailability = action.payload;
    },
    skuAvailabilityFailure: (state, action) => {
      state.skuAvailabilityLoading = false;
      state.skuAvailabilityError = action.payload;
    },
    storeAvailLoading: (state) => {
      state.skuAvailabilityLoading = true;
      state.skuAvailability = null;
      state.skuAvailabilityError = null;
    },
    storeAvailSuccess: (state, action) => {
      state.skuAvailabilityLoading = false;
      state.skuAvailability = action.payload;
    },
    storeAvailFailure: (state, action) => {
      state.skuAvailabilityLoading = false;
      state.skuAvailabilityError = action.payload;
    },
  }
});


export const actions = skuSlice.actions;

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
      dispatch(actions.failure(skuErrorMessages.unknown));
    });
};

export const fetchSkuAvailability = (body) => (dispatch) => {
  dispatch(actions.skuAvailabilityLoading());
  skuService.getSkuAvailability(body)
    .then((res) => {
      dispatch(actions.skuAvailabilitySuccess(res?.data));
    })
    .catch((err) => {
      dispatch(actions.skuAvailabilityFailure(err));
    });
};

export const fetchStoreAvailability = (body) => (dispatch) => {
  dispatch(actions.storeAvailLoading());
  skuService.getStoreAvailability(body)
    .then((res) => {
      dispatch(actions.storeAvailSuccess(res?.data));
    })
    .catch((err) => {
      dispatch(actions.storeAvailFailure(err));
    });
};


export default skuSlice;
