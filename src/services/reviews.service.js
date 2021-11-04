import Axios from '../api';
import config from '../config'

export const getReviewsData = (skuCode) => {
  const url = `${config.POWER_REVIEWS_BASE_URL}/m/1466566505/l/en_US/product/11014345/questions?_noconfig=true&apikey=46891065-a3c9-4388-b98f-b1493ebf3ce7`
  return Axios.get(url)
};