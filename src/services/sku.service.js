import Axios from '../api';
import config from '../config'

export const getSkuInfo = (skuCode, storeId) => {
  const url = `${config.CATELOG_BASE_URL}/v1/sku/${skuCode}?storeId=${storeId}`
  return Axios.get(url)
};

export const getSkuAvailability = (body) => {
  const url = `${config.INVENTORY_BASE_URL}/store-sku-availabilities`
  return Axios.post(url, body)
};


export const getStoreAvailability = (skuId) => {
  const url = `${config.INVENTORY_BASE_URL}/market-availabilities?sku=${skuId}&store=899`
  return Axios.get(url)
};
