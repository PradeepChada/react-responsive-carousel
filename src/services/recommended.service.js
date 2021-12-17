import {
  customersAlsoViewed,
  frequentlyBoughtTogether,
} from '../utils/recommended';

export const getFreqBoughtProducts = () => {
  return new Promise((resolve) =>
    setTimeout(resolve, 1000, { data: frequentlyBoughtTogether })
  );
};

export const getCustViewedProducts = () => {
  return new Promise((resolve) =>
    setTimeout(resolve, 1000, { data: customersAlsoViewed })
  );
};
