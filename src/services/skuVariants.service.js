import Axios from '../api';
import config from '../config';

export const getSkuVariants = (skuCode) => {
    const url = `${config.CATELOG_BASE_URL}/v1/products/${skuCode}`
    return Axios.get(url)
};