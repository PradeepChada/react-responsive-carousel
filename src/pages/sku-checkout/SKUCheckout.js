import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSkuDetails, actions } from '../../slices/sku.slice';
import { skuErrorMessages } from '../../constants/errorMessages';
import {
  BoxWrapper,
  TextWrapper,
  Title,
  Description,
  ErrorWrapper,
  CartContainer,
  RightArrow,
  DownArrow,
  UpArrow,
} from './SKUCheckout.styles';
import { getQtyInStore, getSkuPriceDetails } from '../../utils/skuHelpers';
import SearchBar from '../../components/searchbar/SearchBar';
import SKUTile from './sku-tile/SKUTile';
import config from './../../config';
import SkuError from '../../components/sku-error/SkuError';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
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
  const [openOrderSummary, setOpenOrderSummary] = useState(false);
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

  const arrowClickHandler = () => {
    setOpenOrderSummary((prevState) => !prevState);
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
      <CartContainer>
        <Box className='order-discount-container'>
          <Typography className='order-discount-text'>
            Order Discounts
          </Typography>
          <RightArrow />
        </Box>
        <Box
          className='order-summary-container'
          display={openOrderSummary ? 'flex' : 'none'}
        >
          <Typography className='order-summary-text'>Order Summary</Typography>
          <Box className='subtotal-text'>
            <Typography>Subtotal</Typography>
            <Typography>$0.00</Typography>
          </Box>
          <Box className='discounts-text'>
            <Typography>Discounts</Typography>
            <Typography>$0.00</Typography>
          </Box>
          <Box className='tax-text'>
            <Typography>Tax</Typography>
            <Typography>$0.00</Typography>
          </Box>
        </Box>
        <Box className='total-price-container'>
          <Box>
            <Box display='flex' flexDirection='row' alignItems='center'>
              <Typography className='total-price-text'>Total</Typography>
              {openOrderSummary ? (
                <DownArrow onClick={arrowClickHandler} />
              ) : (
                <UpArrow onClick={arrowClickHandler} />
              )}
            </Box>

            <Typography className='cart-total-price'>--</Typography>
          </Box>
          <Box className='pay-button'>FINISH / PAY</Box>
        </Box>
      </CartContainer>
    </>
  );
}

export default SkuCheckout;
