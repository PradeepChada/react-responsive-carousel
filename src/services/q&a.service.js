import Axios from '../api';
import config from '../config';

export const getQuestionsData = (productID) => {
  const { power_review_url, merchant_id, power_review_api_key } =
    config.appConfig;
  const url = `${power_review_url}/m/${merchant_id}/l/en_US/product/${productID}/questions?_noconfig=true&apikey=${power_review_api_key}`;
  return Axios.get(url);
};

export const getQuestionsDataSortBy = (productID, sortBy) => {
  const { power_review_url, merchant_id, power_review_api_key } =
    config.appConfig;
  const url = `${power_review_url}/m/${merchant_id}/l/en_US/product/${productID}/questions?sort=${sortBy}&_noconfig=true&apikey=${power_review_api_key}`;
  return Axios.get(url);
};

export const getQuestionDataByPage = (nextPageURL) => {
  const { power_review_url, power_review_api_key } = config.appConfig;
  const url = `${power_review_url}${nextPageURL}&apikey=${power_review_api_key}`;
  return Axios.get(url);
};
