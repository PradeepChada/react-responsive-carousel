import { combineReducers } from 'redux';
// import currency from "./currency.reducer";
import currencySlice from '../slices/currency.slice';
import skuSlice from '../slices/sku.slice';
import skuVariants from '../slices/skuVariants.slice';

export default combineReducers({
  currency: currencySlice.reducer,
  sku: skuSlice.reducer,
  skuVariants: skuVariants.reducer,
});
