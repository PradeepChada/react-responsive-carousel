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
  Title,
  Stock,
  StockError,
  OutOfStock,
  Code,
} from './SkuTile.styles';
import { skuErrorMessages } from '../../constants/errorMessages';

const SkuTile = ({ skuInfo, loading, skuAvailabilityLoading, skuAvailabilityError, handleClick }) => {

  const _renderSkeleton = () => {
    return (
      <Wrapper>
        <ImageSkeleton variant='rectangular' data-testid='image-skeleton' />
        <Box display='flex' flexDirection='column' overflow='hidden'>
          <PriceSkeleton variant='text' data-testid='price-skeleton' />
          <TitleSkeleton variant='text' data-testid='title-skeleton' />
          <StockSkeleton variant='text' data-testid='stock-skeleton' />
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
        <Price>${skuInfo?.price}/ea</Price>
        <Title data-testid='sku-title'>{skuInfo?.name}</Title>

        {skuAvailabilityLoading ?
          <StockSkeleton variant='text' data-testid='stock-skeleton' />
          : skuAvailabilityError ?
            <StockError>
              {skuErrorMessages.inventory?.description}
            </StockError> :
            skuInfo?.qtyAvailableAtStore > 0 ? (
              <Stock>{skuInfo?.qtyAvailableAtStore} in Stock</Stock>
            ) :
              <OutOfStock>Out of Stock</OutOfStock>
        }
        <Code>SKU: #{skuInfo?.skuId}</Code>
      </Box>
    </Wrapper>
  );
}

export default SkuTile;

SkuTile.propTypes = {
  skuInfo: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  skuAvailabilityLoading: PropTypes.bool,
  skuAvailabilityError: PropTypes.object,
  handleClick: PropTypes.func
}
