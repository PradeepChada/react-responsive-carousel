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
export const getQtyInDC = (data = [], storeId) =>
  data?.find((o) => o.fulfillmentStoreNumber === String(storeId))
    ?.qtyAvailableInDc;
export const getQtyOnline = (data = []) =>
  data?.find((o) => o.fulfillmentStoreNumber === '899')?.qtyAvailableInDc;

export const getReviewsApiUrl = (productId, sort) => {
  return `/m/1093761574/l/en_US/product/${productId}/reviews?sort=${sort}&_noconfig=true&apikey=1199d38c-7e7c-4b4f-940b-16f6080509fc`;
};

