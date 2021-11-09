import Axios from '../api';
import { getConfig } from '../config';

export const getSkuInfo = (skuCode) => {
  const CATELOG_BASE_URL = getConfig('catalog_service_url');
  const url = `${CATELOG_BASE_URL}/v1/sku/${skuCode}?storeId=899`;
  return Axios.get(url);
};

export const getSkuAvailability = (body) => {
  const INVENTORY_BASE_URL = getConfig('inventory_service_url');
  const url = `${INVENTORY_BASE_URL}/store-sku-availabilities`;
  return Axios.post(url, body);
};

export const getStoreAvailability = (skuId, storeId) => {
  const INVENTORY_BASE_URL = getConfig('inventory_service_url');
  const url = `${INVENTORY_BASE_URL}/market-availabilities?sku=${skuId}&store=${storeId}`;
  return Axios.get(url);
};
