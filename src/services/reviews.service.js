import Axios from '../api';
import config from '../config'

export const getReviewsData = (path) => {
  const url = `${config.POWER_REVIEWS_BASE_URL}${path}`
  return Axios.get(url)
};