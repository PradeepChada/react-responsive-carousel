import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchSkuDetails,
  actions,
  fetchStoreAvailability,
} from '../../slices/sku.slice';
import { skuErrorMessages } from '../../constants/errorMessages';
import SearchBar from '../../components/searchbar/SearchBar';
import SkuTile from './../../components/sku-tile/SkuTile';
import SkuError from '../../components/sku-error/SkuError';
import { getQtyInStore, getSkuPriceDetails } from './../../utils/skuHelpers';
import config from './../../config';
import {
  Wrapper,
  TextWrapper,
  Title,
  Description,
  ErrorWrapper,
} from './SearchPage.styles';
import { Drawer } from '@mui/material';
import NetworkInventory from '../product-details/network-inventory/NetworkInventory';

const showNearAvailability = (storeAvailabilities) => {
  return storeAvailabilities?.length <= 1 ? false : true;
};
const SearchPageText = () => {
  return (
    <TextWrapper display='flex' flexDirection='column'>
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
    storeId,
    loading,
    skuData,
    error,
    mktAvailData,
    skuAvailabilityLoading,
    skuAvailability,
    mktAvailLoading,
    mktAvailError,
    skuAvailabilityError,
  } = useSelector((state) => state.sku);

  const { reviewsData } = useSelector((state) => state.reviews);
  const [showDrawer, setShowDrawer] = useState(false);
  const skuPriceDetails = getSkuPriceDetails(skuData?.skuPrices);
  useEffect(() => {
    dispatch(actions.reset());
  }, [dispatch]);

  useEffect(() => {
    if (skuData != null) {
      dispatch(fetchStoreAvailability(skuData?.id, storeId));
    }
  }, [skuData, dispatch, storeId]);
  const toggleDrawer = (open) => {
    setShowDrawer(open);
  };
  const _renderDrawer = () => {
    return (
      <Drawer
        anchor={'left'}
        open={showDrawer}
        onClose={() => toggleDrawer(false)}
      >
        <NetworkInventory
          anchor={'left'}
          toggleDrawer={toggleDrawer}
          data={mktAvailData?.storeAvailabilities?.filter(
            (o) =>
              ![899, Number(skuAvailability?.requestStoreNumber)].includes(
                o.storeNumber
              )
          )}
          loading={mktAvailLoading}
          error={mktAvailError}
        />
      </Drawer>
    );
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

  const skuImg = skuData?.mediaList?.[0]?.url
    ? `${config.appConfig.asset_base_url}${
        skuData?.mediaList?.find((o) =>
          skuData?.defaultProductId
            ? //TODO: remove the OR part when latest Catalog Service is deployed in PROD
              o.name === 'thumb' || o.name === 'SKU_SMALL_IMAGE'
            : o.name === 'SKU_SMALL_IMAGE'
        )?.url
      }`
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

  return (
    <Wrapper>
      <SearchBar handleSearch={handleSearch} handleClear={handleClear} />
      {_renderDrawer()}
      {!loading && !error && !skuData && <SearchPageText />}
      {error ? (
        <ErrorWrapper alignItems='center'>
          <SkuError {...error} />
        </ErrorWrapper>
      ) : (
        (loading || skuData) && (
          <SkuTile
            skuInfo={skuInfo}
            rating={reviewsData?.results?.[0]?.rollup?.average_rating}
            showNearAvailability={showNearAvailability(
              mktAvailData?.storeAvailabilities
            )}
            skuAvailability={skuAvailability}
            loading={loading}
            skuAvailabilityLoading={skuAvailabilityLoading}
            skuAvailabilityError={skuAvailabilityError}
            toggleDrawer={toggleDrawer}
            handleClick={(id) => history.push(`/product-details/${id}`)}
          />
        )
      )}
    </Wrapper>
  );
};

export default SearchPage;
