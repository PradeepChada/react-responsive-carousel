import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSkuDetails, actions } from '../../slices/sku.slice';
import { skuErrorMessages } from '../../constants/errorMessages';
import {
  BoxWrapper,
  TextWrapper,
  Title,
  Description,
  ErrorWrapper
} from './SKUCheckout.styles';
import { getQtyInStore, getSkuPriceDetails } from '../../utils/skuHelpers';
import SearchBar from '../../components/searchbar/SearchBar';
import SKUTile from './sku-tile/SKUTile';
import config from './../../config';
import SkuError from '../../components/sku-error/SkuError';
const SearchPageText = () => {
  return (
    <TextWrapper display='flex' flexDirection='column' alignItems='center'>
      <Title>Scan Barcode or Type SKU</Title>
      <Description>
        Use the trigger on the device to scan a barcode or enter a SKU in the
        search field
      </Description>
    </TextWrapper>
  );
};
function SkuCheckout() {
  const dispatch = useDispatch();
  const {
    storeId,
    loading,
    skuData,
    error,
    skuAvailabilityLoading,
    skuAvailability,
    skuAvailabilityError,
  } = useSelector((state) => state.sku);

  const skuPriceDetails = getSkuPriceDetails(skuData?.skuPrices);
  useEffect(() => {
    dispatch(actions.reset());
  }, [dispatch]);

  const skuImg = skuData?.mediaList?.[0]?.url
    ? `${config.appConfig.asset_base_url}${skuData?.mediaList?.[0]?.url}`
    : null;

  const skuInfo = {
    name: skuData?.name,
    image: skuImg,
    skuPriceDetails,
    skuId: skuData?.id,
    qtyAvailableAtStore: getQtyInStore(
      skuAvailability?.inventoryEstimates,
      skuAvailability?.requestStoreNumber
    ),
  };
  const handleSearch = (skuId) => {
    if (!skuId) dispatch(actions.failure(skuErrorMessages.malfunction));
    else {
      dispatch(fetchSkuDetails(skuId, storeId));
    }
  };
  const handleClear = () => {
    dispatch(actions.reset());
  };
  return (
    <>
      <BoxWrapper>
        <SearchBar handleSearch={handleSearch} handleClear={handleClear} />
        {!loading && !error && !skuData && <SearchPageText />}
        {error ? (
          <ErrorWrapper alignItems='center'>
            <SkuError {...error} />
          </ErrorWrapper>
        ) : (
          (loading || skuData) && (
            <SKUTile
              skuInfo={skuInfo}
              skuAvailability={skuAvailability}
              loading={loading}
              skuAvailabilityLoading={skuAvailabilityLoading}
              skuAvailabilityError={skuAvailabilityError}
              
            />
          )
        )}
      </BoxWrapper>
    </>
  );
}

export default SkuCheckout;
