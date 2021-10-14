import { combineReducers } from 'redux';
// import currency from "./currency.reducer";
import currencySlice from '../slices/currency.slice';
import skuSlice from '../slices/sku.slice';

export default combineReducers({
  currency: currencySlice.reducer,
  sku: skuSlice.reducer,
});
