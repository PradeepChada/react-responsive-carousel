import Axios from '../api';
import config from '../config';

export const getStoreList = (params) => {
  const queryStr = Object.keys(params)
    .filter((key) => params[key])
    .map((key) => `${key}=${params[key]}`)
    .join('&');
  const url = `${config.appConfig.container_store_base_url}/store/api/locations?${queryStr}`;
  return Axios.get(url);
};
