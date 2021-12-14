// import Axios from '../api';
// import config from '../config';

import { frequentlyBoughtTogether } from '../utils/recommended';

export const getFreqBoughtProducts = () => {
  return new Promise((resolve) =>
    setTimeout(resolve, 1000, { data: frequentlyBoughtTogether })
  );
};
