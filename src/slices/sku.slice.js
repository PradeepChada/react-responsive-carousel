import * as skuService from '../services/sku.service';
import { createSlice } from '@reduxjs/toolkit';
import { skuErrorMessages } from '../constants/errorMessages';
import { fetchReviewDetails, actions as reviewsActions } from './reviews.slice';
import { getReviewsApiUrl } from '../utils/skuHelpers';

const INITIAL_STATE = {
  storeId: 49,
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

  shipSkuAvailLoading: false,
  shipSkuAvailData: null,
  shipSkuAvailError: null,
};

const skuSlice = createSlice({
  name: 'sku',
  initialState: INITIAL_STATE,
  reducers: {
    updateStoreId: (state, action) => {
      state.storeId = action.payload;
    },
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
    reset: (state) => {
      return { ...INITIAL_STATE, storeId: state.storeId };
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
    shipSkuAvailLoading: (state) => {
      state.shipSkuAvailLoading = true;
      state.shipSkuAvailData = null;
      state.shipSkuAvailError = null;
    },
    shipSkuAvailSuccess: (state, action) => {
      state.shipSkuAvailLoading = false;
      state.shipSkuAvailData = action.payload;
    },
    shipSkuAvailFailure: (state, action) => {
      state.shipSkuAvailLoading = false;
      state.shipSkuAvailError = action.payload;
    },
  },
});

export const actions = skuSlice.actions;

export const getSkuAvailBody = (storeId, data) => {
  return {
    sourceStoreNumber: storeId,
    fulfillmentStoreNumbers: [storeId, 899],
    skuQtyPairs: [
      {
        skuNumber: data?.id,
        qty: 0,
      },
    ],
  };
};

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
          const stockBody = getSkuAvailBody(storeId, res?.data);
          fetchQty && dispatch(fetchSkuAvailability(stockBody));
          const shipSkuBody = {
            skuNumbers: [res?.data?.id],
          };
          dispatch(fetchShipSkuAvailability(shipSkuBody));
          if (res?.data?.defaultProductId) {
            const path = getReviewsApiUrl(
              res?.data?.defaultProductId,
              'MostHelpful'
            );
            dispatch(fetchReviewDetails(path));
          } else {
            dispatch(reviewsActions?.resetReviews());
          }
          dispatch(actions.success(res?.data));
        }
      })
      .catch(({ response }) => {
        if (response?.status === 400)
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

export const fetchShipSkuAvailability = (body) => (dispatch) => {
  dispatch(actions.shipSkuAvailLoading());
  skuService
    .getShipSkuAvailability(body)
    .then((res) => {
      dispatch(actions.shipSkuAvailSuccess(res?.data));
    })
    .catch((err) => {
      dispatch(actions.shipSkuAvailError(err));
    });
};

export default skuSlice;
