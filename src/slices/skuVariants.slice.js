import * as skuService from '../services/sku.service';
import * as additionalSku from '../services/skuVariants.service';
import { createSlice } from '@reduxjs/toolkit';
import { skuErrorMessages } from '../constants/errorMessages';

const INITIAL_STATE = {
  loading: false,
  skuVariants: null,
  error: null,
  // error: skuErrorMessages.malfunction,
  skuAvailabilityLoading: false,
  skuAvailability: null,
  skuAvailabilityError: null
};

const skuSlice = createSlice({
  name: 'sku',
  initialState: INITIAL_STATE,
  reducers: {
    variantsLoading: (state) => {
      state.loading = true;
      state.skuVariants = null;
      state.error = null
    },
    variantsSuccess: (state, action) => {
      state.loading = false;
      state.skuVariants = action.payload;
    },
    variantsFailure: (state, action) => {
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
  }
});


export const actions = skuSlice.actions;

export const fetchASkuVariants = (skuCode, storeId) => (dispatch) => {
  dispatch(actions.variantsLoading());
  additionalSku.getSkuVariants(skuCode, storeId)
    .then((res) => {
      if (res?.status === 204)
        dispatch(actions.variantsSuccess(skuErrorMessages.productVariants));
      else{
        dispatch(actions.variantsSuccess(res?.data));
        const stockBody = {
          sourceStoreNumber: "5",
          fulfillmentStoreNumbers: [899, 5],
          skuQtyPairs: res?.data?.skus?.map(o => ({
            skuNumber: o.id,
            qty: 0
          }))
        }
        dispatch(fetchSkuAvailability(stockBody));
      }
    })
    .catch(() => {
      dispatch(actions.variantsSuccess(skuErrorMessages.productVariants));
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


export default skuSlice;
