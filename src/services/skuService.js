import Axios from '../api';
import { skuAvailability } from '../utils/MockData';

export const getSkuInfo = (skuCode, storeId) => {
  const url = `/v1/sku/${skuCode}?storeId=${storeId}`
  return Axios.get(url)
};

export const getSkuAvailability = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(skuAvailability);
      //reject(204);
    }, 2000);
  });
};
