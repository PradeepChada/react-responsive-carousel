import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSkuDetails, actions } from '../../slices/sku.slice';
import { skuErrorMessages } from '../../constants/errorMessages';
import SearchBar from '../sku-search/searchbar/SearchBar';
import SkuTile from './../../components/sku-tile/SkuTile';
import SkuError from '../../components/sku-error/SkuError';
import { getSkuPrice, getQtyInStore } from './../../utils/skuHelpers';
import config from './../../config';
import {
  Wrapper,
  TextWrapper,
  Title,
  Description,
  ErrorWrapper,
} from './SearchPage.styles';

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

const SearchPage = ({ history }) => {
  const dispatch = useDispatch();
  const {
    loading,
    skuData,
    error,
    skuAvailabilityLoading,
    skuAvailability,
    skuAvailabilityError,
  } = useSelector((state) => state.sku);

  const price = getSkuPrice(skuData?.skuPrices, 'maxRetailPrice');

  useEffect(() => {
    dispatch(actions.reset());
  }, [dispatch]);

  const handleSearch = (skuId) => {
    if (!skuId) dispatch(actions.failure(skuErrorMessages.malfunction));
    else {
      dispatch(fetchSkuDetails(skuId, 899));
    }
  };

  const handleClear = () => {
    dispatch(actions.reset());
  };

  // const getQtyInStore = (data=[], storeId) =>  data?.find(o => o.fulfillmentStoreNumber === storeId)?.qtyAvailableAtStore;

  const skuImg = skuData?.mediaList?.[0]?.url
    ? `${config.ASSET_URL}${skuData?.mediaList?.[0]?.url}`
    : null;
  const skuInfo = {
    name: skuData?.name,
    image: skuImg,
    price,
    skuId: skuData?.id,
    qtyAvailableAtStore: getQtyInStore(
      skuAvailability?.inventoryEstimates,
      '5'
    ),
  };

  return (
    <Wrapper display='flex' flexDirection='column' alignItems='center'>
      <SearchBar handleSearch={handleSearch} handleClear={handleClear} />
      {!loading && !error && !skuData && <SearchPageText />}
      {error ? (
        <ErrorWrapper alignItems='center'>
          <SkuError {...error} />
        </ErrorWrapper>
      ) : (
        (loading || skuData) && (
          <SkuTile
            skuInfo={skuInfo}
            skuAvailability={skuAvailability}
            loading={loading}
            skuAvailabilityLoading={skuAvailabilityLoading}
            skuAvailabilityError={skuAvailabilityError}
            handleClick={(id) => history.push(`/product-details/${id}`)}
          />
        )
      )}
    </Wrapper>
  );
};

export default SearchPage;
