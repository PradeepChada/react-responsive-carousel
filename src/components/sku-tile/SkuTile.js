import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import {
  Wrapper,
  ImageSkeleton,
  PriceSkeleton,
  TitleSkeleton,
  StockSkeleton,
  CodeSkeleton,
  Image,
  Price,
  SalePriceWrapper,
  Title,
  Stock,
  StockError,
  OutOfStock,
  Code,
} from './SkuTile.styles';
import { skuErrorMessages } from '../../constants/errorMessages';
import { Button, Skeleton, Typography } from '@mui/material';
import RatingsBar from '../ratings-bar/RatingsBar';

const showStock = (skuAvailabilityLoading, skuAvailabilityError, skuInfo) => {
  if (skuAvailabilityLoading) {
    return <StockSkeleton variant='text' data-testid='stock-skeleton' />;
  } else if (skuAvailabilityError) {
    return <StockError>{skuErrorMessages.inventory?.description}</StockError>;
  } else {
    return skuInfo?.qtyAvailableAtStore > 0 ? (
      <Stock>{skuInfo?.qtyAvailableAtStore} Available</Stock>
    ) : (
      <OutOfStock>Out of Stock</OutOfStock>
    );
  }
};
const SkuTile = ({
  skuInfo,
  rating,
  showNearAvailability,
  loading,
  skuAvailabilityLoading,
  skuAvailabilityError,
  handleClick,
  toggleDrawer,
  showRatingandAvailability,
}) => {
  const _renderSkeleton = () => {
    return (
      <Wrapper>
        <ImageSkeleton variant='rectangular' data-testid='image-skeleton' />
        <Box display='flex' flexDirection='column' overflow='hidden'>
          <PriceSkeleton variant='text' data-testid='price-skeleton' />
          <TitleSkeleton variant='text' data-testid='title-skeleton' />
          {showRatingandAvailability && (
            <Skeleton variant='text' className='availability-link' />
          )}
          <StockSkeleton variant='text' data-testid='stock-skeleton' />
          {showRatingandAvailability && <Skeleton variant='text' />}
          <CodeSkeleton variant='text' data-testid='code-skeleton' />
        </Box>
      </Wrapper>
    );
  };
  if (loading) return _renderSkeleton();
  return (
    <Wrapper onClick={() => handleClick(skuInfo.skuId)}>
      <Image src={skuInfo?.image} alt='SKUImage' />
      <Box flexDirection='column' overflow='hidden'>
        {skuInfo?.skuPriceDetails?.onSale ? (
          <SalePriceWrapper>
            <Typography className='sale-price'>
              ${skuInfo?.skuPriceDetails?.salePrice?.toFixed(2)}
            </Typography>
            <Typography className='normal-price'>
              ${skuInfo?.skuPriceDetails?.price?.toFixed(2)}
            </Typography>
          </SalePriceWrapper>
        ) : (
          <Price>${skuInfo?.skuPriceDetails?.price?.toFixed(2)}/ea</Price>
        )}
        <Title data-testid='sku-title'>
          {skuInfo?.name?.substring(0, 25)}...
        </Title>
        {showRatingandAvailability && <RatingsBar rating={rating} />}
        {showStock(skuAvailabilityLoading, skuAvailabilityError, skuInfo)}
        {showRatingandAvailability && showNearAvailability && (
          <Button
            className='availability-link'
            variant='text'
            onClick={(e) => {
              e.stopPropagation();
              toggleDrawer(true);
            }}
          >
            Show availability in other stores
          </Button>
        )}
        <Code>SKU: #{skuInfo?.skuId}</Code>
      </Box>
    </Wrapper>
  );
};

export default SkuTile;

SkuTile.propTypes = {
  skuInfo: PropTypes.object,
  rating: PropTypes.number,
  loading: PropTypes.bool,
  showNearAvailability: PropTypes.bool,
  skuAvailabilityLoading: PropTypes.bool,
  skuAvailabilityError: PropTypes.object,
  handleClick: PropTypes.func,
  toggleDrawer: PropTypes.func,
  showRatingandAvailability: PropTypes.bool,
};

SkuTile.defaultProps = {
  showRatingandAvailability: false,
};
