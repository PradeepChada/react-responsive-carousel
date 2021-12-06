import Axios from '../api';
import config from '../config';

export const getStoreList = (params) => {
  const queryStr = Object.keys(params)
    .filter((key) => params[key])
    .map((key) => `${key}=${params[key]}`)
    .join('&');
  //   if(longitude){
  //       qs = `lat=${lattitude}&lon=${longitude}`;
  //   }else if(state){
  //       qs = `state=${state}&city=${city}`
  //   }else if(zipCode){
  //     qs = `zipCode=${zipCode}`
  //   }
  const url = `https://www.containerstore.com/store/api/locations?${queryStr}`;
  return Axios.get(url);
};
