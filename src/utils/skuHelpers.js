import config from './../config';

export const getSkuPrice = (skuPrices = {}, type) => {
  return skuPrices[type]?.amount;
};

export const getSkuPriceDetails = (skuPrices = {}) => {
  if (skuPrices['onSale'] === true)
    return {
      price: skuPrices['maxRetailPrice']?.amount,
      onSale: skuPrices['onSale'],
      salePrice: skuPrices['maxSalePrice']?.amount,
      maxPercentOff: skuPrices['maxPercentOff'],
      maxSavings: skuPrices['maxSavings']?.amount,
    };
  else
    return {
      price: skuPrices['maxRetailPrice']?.amount,
      onSale: skuPrices['onSale'],
    };
};

export const getColor = (attributes) => {
  return attributes?.find((o) => o.id === 'COLOR')?.name;
};
export const getQtyInStore = (data = [], storeId) =>
  data?.find((o) => o.fulfillmentStoreNumber === String(storeId))
    ?.qtyAvailableAtStore;
export const getQtyInDC = (data = []) => data?.[0]?.qtyAvailable;
export const getQtyOnline = (data = []) =>
  data?.find((o) => o.fulfillmentStoreNumber === '899')?.qtyAvailableInDc;

export const getReviewsApiUrl = (productId, sort = '') => {
  return `/m/${config.appConfig?.merchant_id}/l/en_US/product/${productId}/reviews?sort=${sort}&_noconfig=true&apikey=${config?.appConfig?.power_review_api_key}`;
};

export const filterQuestionsData = (questionData, newQuestions) => {
  console.log(questionData);
  console.log(newQuestions);
  return {
    ...newQuestions,
    questionData: {
      ...newQuestions.questionData,
      results: [...questionData.results, ...newQuestions.questionData.results],
    },
  };
};
