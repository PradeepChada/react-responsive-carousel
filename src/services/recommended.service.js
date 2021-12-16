import { frequentlyBoughtTogether } from '../utils/recommended';

export const getFreqBoughtProducts = () => {
  return new Promise((resolve) =>
    setTimeout(resolve, 1000, { data: frequentlyBoughtTogether })
  );
};
