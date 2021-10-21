import Axios from '../api';
import config from '../config'

export const getSkuInfo = (skuCode) => {
  const url = `${config.CATELOG_BASE_URL}/v1/sku/${skuCode}?storeId=899`
  return Axios.get(url)
};

export const getSkuAvailability = (body) => {
  const url = `${config.INVENTORY_BASE_URL}/store-sku-availabilities`
  return Axios.post(url, body)
};


export const getStoreAvailability = (skuId, storeId) => {
  const url = `${config.INVENTORY_BASE_URL}/market-availabilities?sku=${skuId}&store=${storeId}`
  return Axios.get(url)
};
