import * as skuService from '../services/sku.service';
import { createSlice } from '@reduxjs/toolkit';
import { skuErrorMessages } from '../constants/errorMessages';

const INITIAL_STATE = {
  loading: false,
  cartItems: [],
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState: INITIAL_STATE,
  reducers: {
    loading: (state) => {
      state.loading = true;
      state.error = null;
    },
    addItemToCart: (state, action) => {
      state.cartItems.unshift(action.payload);
      state.loading = false;
      state.error = null;
    },
    removeItemFromCart: (state, action) => {
      state.cartItems = action.payload;
    },
    increaseItemQuantity: (state, action) => {
      state.cartItems = action.payload;
    },
    decreaseItemQuantity: (state, action) => {
      state.cartItems = action.payload;
    },
    clearCart: (state) => {
      state.cartItems = [];
    },
    failure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const actions = cartSlice.actions;

export const addItemToCart = (skuCode) => (dispatch) => {
  dispatch(actions.loading());
  skuService
    .getSkuInfo(skuCode)
    .then((res) => {
      if (res?.status === 204) {
        dispatch(actions.failure(skuErrorMessages.notFound));
      } else {
        dispatch(
          actions.addItemToCart({
            skuQuantity: 1,
            skuData: res?.data,
          })
        );
      }
    })
    .catch(({ response }) => {
      if (response?.status === 400) {
        dispatch(actions.failure(skuErrorMessages.notFound));
      } else {
        dispatch(actions.failure(skuErrorMessages.unknown));
      }
    });
};

export const removeItemFromCart = (skuId, cartItems) => (dispatch) => {
  const newCartItems = [];
  cartItems.forEach((item) => {
    if (item.skuData.id !== skuId) {
      newCartItems.push(item);
    }
  });
  dispatch(actions.removeItemFromCart(newCartItems));
};

export const increaseItemQuantityFromCart =
  (skuId, cartItems) => (dispatch) => {
    const newCartItems = [];

    cartItems.forEach((item) => {
      if (item.skuData.id === Number(skuId)) {
        newCartItems.push({ ...item, skuQuantity: item.skuQuantity + 1 });
      } else {
        newCartItems.push(item);
      }
    });
    dispatch(actions.increaseItemQuantity(newCartItems));
  };

export const setItemQuantityByGivenQuantityFromCart =
  (skuId, cartItems, givenQuantity) => (dispatch) => {
    const newCartItems = [];
    cartItems.forEach((item) => {
      if (Number(item.skuData.id) === Number(skuId)) {
        newCartItems.push({
          ...item,
          skuQuantity: Number(givenQuantity),
        });
      } else {
        newCartItems.push(item);
      }
    });
    dispatch(actions.increaseItemQuantity(newCartItems));
  };

export const decreaseItemQuantityFromCart =
  (skuId, cartItems) => (dispatch) => {
    const newCartItems = [];
    cartItems.forEach((item) => {
      if (item.skuData.id === skuId) {
        newCartItems.push({ ...item, skuQuantity: item.skuQuantity - 1 });
      } else {
        newCartItems.push(item);
      }
    });
    dispatch(actions.removeItemFromCart(newCartItems));
  };

export default cartSlice;
