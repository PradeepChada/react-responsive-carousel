
export const getSkuPrice = (skuPrices = {}, type) => {
    return skuPrices[type]?.amount;
  }
  
export const getColor = (attributes) => {
    return attributes?.find(o => o.id === 'COLOR')?.name
  }
 export const getQtyInStore = (data=[], storeId) =>  data?.find(o => o.fulfillmentStoreNumber === storeId)?.qtyAvailableAtStore;
 export const getQtyInDC = (data=[], storeId) =>  data?.find(o => o.fulfillmentStoreNumber === storeId)?.qtyAvailableInDc;
 export const getQtyOnline = (data=[]) =>  data?.find(o => o.fulfillmentStoreNumber === '899')?.qtyAvailableInDc;
