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

export const getProductImages = ({
  defaultProductId,
  mediaList,
  productVisuals,
} = {}) => {
  if (defaultProductId) {
    return (
      productVisuals
        ?.filter((o) => !o.isVideo)
        ?.map((o) => `${config.appConfig.asset_base_url}${o.src}`) || []
    );
  } else {
    return (
      mediaList
        ?.filter((o) => o.name === 'amazon' || o.name === 'SKU_IMAGE')
        ?.map((o) => `${config.appConfig.asset_base_url}${o.url}`) || []
    );
  }
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

export const showCheckoutHeader = (path) => {
  return ['/sku-checkout', '/payment-details', '/pop-signup'].includes(path);
};

export const showCancelOrderButton = (path) => {
  return ['/sku-checkout', '/payment-details'].includes(path);
};

export const getSKUTileInfo = (skuData) => {
  return {
    name: skuData?.name,
    image: skuData?.mediaList?.[0]?.url
      ? `${config.appConfig.asset_base_url}${skuData?.mediaList?.[0]?.url}`
      : null,
    skuPriceDetails: getSkuPriceDetails(skuData?.skuPrices),
    skuId: skuData?.id,
  };
};

export const givenItemExitsInCart = (skuId, cartItems) => {
  let exits = -1;
  cartItems.forEach((data, index) => {
    if (data?.skuData?.id === parseInt(skuId)) {
      exits = index;
    }
  });
  return exits;
};

export const getFirstPOPMemeber = (accountDetails) => {
  let _account = null;
  accountDetails.forEach((data) => {
    if (data.popMember === true) _account = data;
  });
  return _account;
};

export const getPOPAccountFullName = (accountDetails, emailAddress) => {
  let _fullname = null;
  accountDetails.forEach((data) => {
    if (data.emailAddress === emailAddress) {
      _fullname = data.firstName + ' ' + data.lastName;
    }
  });
  return _fullname;
};
export const generateVideoUrl = (provider, videoId) => {
  if (provider === 'WISTIA') {
    return `${config.appConfig.wistia_embed_url}${videoId}`;
  } else {
    return `${config.appConfig.youtube_embed_url}${videoId}`;
  }
};

export const getProductVideos = ({ productVisuals }) => {
  return (
    productVisuals
      ?.filter((o) => o.isVideo)
      ?.map((o) => ({
        url: generateVideoUrl(o.providerName, o.videoId),
        thumbnail: o.thumbnailSrc,
        videoId: o.videoId,
      })) || []
  );
};
