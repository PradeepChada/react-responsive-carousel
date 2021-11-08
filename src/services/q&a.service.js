import Axios from '../api';
import config from '../config';

export const getQuestionsData = (productID) => {
  const url = `https://display.powerreviews.com/m/1466566505/l/en_US/product/${productID}/questions?_noconfig=true&apikey=46891065-a3c9-4388-b98f-b1493ebf3ce7`;
  return Axios.get(url);
};

export const getQuestionsDataSortBy = (productID, sortBy) => {
  const url = `https://display.powerreviews.com/m/1466566505/l/en_US/product/${productID}/questions?sort=${sortBy}&_noconfig=true&apikey=46891065-a3c9-4388-b98f-b1493ebf3ce7`;
  return Axios.get(url);
};

export const getQuestionDataByPage = (nextPageURL) => {
  const url = ` https://display.powerreviews.com${nextPageURL}&apikey=46891065-a3c9-4388-b98f-b1493ebf3ce7`;
  return Axios.get(url);
};
