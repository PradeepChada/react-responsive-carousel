import Axios from '../api';
import config from '../config';

export const getSkuVariants = (skuCode) => {
  const url = `${config.appConfig.catalog_service_url}/v1/products/${skuCode}`;
  return Axios.get(url);
};
