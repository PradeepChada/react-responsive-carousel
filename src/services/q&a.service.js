import Axios from '../api';
import { getConfig } from '../config';

export const getQuestionsData = (productID) => {
  const POWER_REVIEW_URL = getConfig('power_review_url');
  const MERCAHANT_ID = getConfig('merchant_id');
  const POWER_REVIEW_API_KEY = getConfig('power_review_api_key');
  const url = `${POWER_REVIEW_URL}/m/${MERCAHANT_ID}/l/en_US/product/${productID}/questions?_noconfig=true&apikey=${POWER_REVIEW_API_KEY}`;
  return Axios.get(url);
};

export const getQuestionsDataSortBy = (productID, sortBy) => {
  const POWER_REVIEW_URL = getConfig('power_review_url');
  const MERCAHANT_ID = getConfig('merchant_id');
  const POWER_REVIEW_API_KEY = getConfig('power_review_api_key');
  const url = `${POWER_REVIEW_URL}/m/${MERCAHANT_ID}/l/en_US/product/${productID}/questions?sort=${sortBy}&_noconfig=true&apikey=${POWER_REVIEW_API_KEY}`;
  return Axios.get(url);
};

export const getQuestionDataByPage = (nextPageURL) => {
  const POWER_REVIEW_URL = getConfig('power_review_url');
  const POWER_REVIEW_API_KEY = getConfig('power_review_api_key');
  const url = `${POWER_REVIEW_URL}${nextPageURL}&apikey=${POWER_REVIEW_API_KEY}`;
  return Axios.get(url);
};
