
export const getSkuPrice = (skuPrices = {}, type) => {
    return skuPrices[type]?.amount;
  }
  
export const getColor = (attributes) => {
    return attributes?.find(o => o.id === 'COLOR')?.name
  }
  