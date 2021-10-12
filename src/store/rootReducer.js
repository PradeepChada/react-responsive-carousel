import { combineReducers } from 'redux';
// import currency from "./currency.reducer";
import currencySlice from '../slices/currency.slice';

export default combineReducers({
  currency: currencySlice.reducer,
});
