import Axios from '../api';
import config from '../config';

export const getSkuInfo = (skuCode) => {
  const url = `${config.appConfig.catalog_service_url}/v1/sku/${skuCode}?storeId=899`;
  return Axios.get(url);
};

export const getSkuAvailability = (body) => {
  const url = `${config.appConfig.inventory_service_url}/store-sku-availabilities`;
  return Axios.post(url, body);
};

export const getStoreAvailability = (skuId, storeId) => {
  const url = `${config.appConfig.inventory_service_url}/market-availabilities?sku=${skuId}&store=${storeId}`;
  return Axios.get(url);
};

export const getShipSkuAvailability = (body) => {
  const url = `${config.appConfig.inventory_service_url}/ship-sku-availabilities`;
  return Axios.post(url, body);
};
