import * as popService from '../services/popAccount.service';
import { createSlice } from '@reduxjs/toolkit';
import { popAccountNotFound } from '../constants/errorMessages';
import { getFirstPOPMemeber } from '../utils/skuHelpers';
const INITIAL_STATE = {
  loading: false,
  accountDetails: [],
  mainAccount: null,
  error: null,
};

const popAccountSlice = createSlice({
  name: 'POPAccount',
  initialState: INITIAL_STATE,
  reducers: {
    loading: (state) => {
      state.loading = true;
    },
    success: (state, action) => {
      state.loading = false;
      state.accountDetails = action.payload;
      state.error = null;
    },
    setMain: (state, action) => {
      state.mainAccount = action.payload;
    },
    failure: (state, action) => {
      state.loading = false;
      state.accountDetails = [];
      state.mainAccount = null;
      state.error = action.payload;
    },
    setErrorNull: (state, action) => {
      state.error = null;
    },
  },
});

export const actions = popAccountSlice.actions;

export const fetchPOPAccountDetailsByPhone = (phone, history) => (dispatch) => {
  dispatch(actions.loading());
  popService
    .getAccountByPhone(phone)
    .then((res) => {
      if (res?.data?._embedded.customers.length === 0) {
        dispatch(actions.failure(popAccountNotFound.phone));
      } else {
        dispatch(actions.success(res?.data?._embedded.customers));
        if (res?.data?._embedded.customers.length === 1) {
          dispatch(
            setMainPOPAccount(
              getFirstPOPMemeber(res?.data?._embedded.customers).emailAddress
            )
          );
          history.push('/sku-checkout');
        }
      }
    })
    .catch((err) => {
      dispatch(actions.failure(popAccountNotFound.unknown));
    });
};

export const fetchPOPAccountDetailsByEmail = (email, history) => (dispatch) => {
  dispatch(actions.loading());
  popService
    .getAccountByEmail(email)
    .then((res) => {
      if (res?.data?._embedded.customers.length === 0) {
        dispatch(actions.failure(popAccountNotFound.email));
      } else {
        dispatch(actions.success(res?.data?._embedded.customers));
        if (res?.data?._embedded.customers.length === 1) {
          dispatch(
            setMainPOPAccount(
              getFirstPOPMemeber(res?.data?._embedded.customers).emailAddress
            )
          );
          history.push('/sku-checkout');
        }
      }
    })
    .catch((err) => {
      dispatch(actions.failure(popAccountNotFound.unknown));
    });
};

export const setMainPOPAccount = (account) => (dispatch) => {
  dispatch(actions.setMain(account));
};

export default popAccountSlice;
