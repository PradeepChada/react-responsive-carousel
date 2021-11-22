import { combineReducers } from 'redux';
import currencySlice from '../slices/currency.slice';
import skuSlice from '../slices/sku.slice';
import spinnerSlice from '../slices/spinner.slice';
import skuVariants from '../slices/skuVariants.slice';
import reviewSlice from '../slices/reviews.slice';
import skuQuestions from '../slices/q&a.slice';
import cartSlice from '../slices/cart.slice';
export default combineReducers({
  currency: currencySlice.reducer,
  sku: skuSlice.reducer,
  spinner: spinnerSlice.reducer,
  skuVariants: skuVariants.reducer,
  reviews: reviewSlice.reducer,
  skuQuestions: skuQuestions.reducer,
  cart: cartSlice.reducer,
});
