import Axios from '../api';
// import { skuAvailability } from '../utils/MockData';
import config from '../config';
import addSizeCol from '../utils/addSizeCol.json';

export const getSkuVariants = (skuCode) => {
    // return new Promise(resolve => setTimeout(resolve, 3000, { data: addSizeCol }));
    const url = `${config.CATELOG_BASE_URL}/v1/products/${skuCode}`
    return Axios.get(url)
};