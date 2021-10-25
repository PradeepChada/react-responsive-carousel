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
  mktAvailError: null,
};

const skuSlice = createSlice({
  name: 'sku',
  initialState: INITIAL_STATE,
  reducers: {
    loading: (state) => {
      state.loading = true;
      // state.skuData = null;
      state.error = null;
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
      return INITIAL_STATE;
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
      state.mktAvailLoading = true;
      state.mktAvailData = null;
      state.mktAvailError = null;
    },
    storeAvailSuccess: (state, action) => {
      state.mktAvailLoading = false;
      state.mktAvailData = action.payload;
    },
    storeAvailFailure: (state, action) => {
      state.mktAvailLoading = false;
      state.mktAvailError = action.payload;
    },
  },
});

export const actions = skuSlice.actions;

export const fetchSkuDetails =
  (skuCode, storeId, fetchQty = true) =>
  (dispatch) => {
    dispatch(actions.loading());
    skuService
      .getSkuInfo(skuCode)
      .then((res) => {
        if (res?.status === 204)
          dispatch(actions.failure(skuErrorMessages.notFound));
        else {
          const stockBody = {
            sourceStoreNumber: storeId,
            fulfillmentStoreNumbers: [storeId, 899],
            skuQtyPairs: [
              {
                skuNumber: res?.data?.id,
                qty: 0,
              },
            ],
          };
          fetchQty && dispatch(fetchSkuAvailability(stockBody));
          dispatch(actions.success(res?.data));
        }
      })
      .catch(({ response }) => {
        if (response.status === 400)
          dispatch(actions.failure(skuErrorMessages.notFound));
        else dispatch(actions.failure(skuErrorMessages.unknown));
      });
  };

export const fetchSkuAvailability = (body) => (dispatch) => {
  dispatch(actions.skuAvailabilityLoading());
  skuService
    .getSkuAvailability(body)
    .then((res) => {
      dispatch(actions.skuAvailabilitySuccess(res?.data));
    })
    .catch((err) => {
      dispatch(actions.skuAvailabilityFailure(err));
    });
};

export const fetchStoreAvailability = (skuId, storeId) => (dispatch) => {
  dispatch(actions.storeAvailLoading());
  skuService
    .getStoreAvailability(skuId, storeId)
    .then((res) => {
      dispatch(actions.storeAvailSuccess(res?.data));
    })
    .catch((err) => {
      dispatch(actions.storeAvailFailure(err));
    });
};

export default skuSlice;
