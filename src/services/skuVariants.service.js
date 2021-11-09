import Axios from '../api';
import { getConfig } from '../config';

export const getSkuVariants = (skuCode) => {
  const CATELOG_BASE_URL = getConfig('catalog_service_url');
  const url = `${CATELOG_BASE_URL}/v1/products/${skuCode}`;
  return Axios.get(url);
};
