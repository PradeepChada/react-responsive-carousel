import Axios from '../api';
import config from '../config';

export const getReviewsData = (path) => {
  const url = `${config.appConfig.power_review_url}${path}`;
  return Axios.get(url);
};
