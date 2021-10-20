import Axios from '../api';
// import { skuAvailability } from '../utils/MockData';
import config from '../config'

export const getSkuInfo = (skuCode, storeId) => {
  const url = `${config.CATELOG_BASE_URL}/v1/sku/${skuCode}?storeId=${storeId}`
  return Axios.get(url)
};

export const getSkuAvailability = (body) => {
  const url = `${config.INVENTORY_BASE_URL}/store-sku-availabilities`
  return Axios.post(url, body)
};


export const getStoreAvailability = (body) => {
  const url = `${config.INVENTORY_BASE_URL}/market-availabilities`
  return Axios.post(url, body)
};
