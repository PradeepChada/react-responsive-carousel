import React from 'react';
import Box from '@mui/material/Box';
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
const SKUSkeleton = () => {
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
function SKUTile({ skuInfo, skuQuantity, error }) {
  if (skuInfo == null) return SKUSkeleton();
  const { SKUImg, price, skuTitle, skuCode } = skuInfo;
  return (
    <Wrapper>
      <Image src={SKUImg} alt='SKUImage' />
      <Box flexDirection='column' overflow='hidden'>
        <Price>${price}/ea</Price>
        <Title data-testid='sku-title'>{skuTitle}</Title>

        {error == null ? (
          skuQuantity == null ? (
            <StockSkeleton variant='text' data-testid='stock-skeleton' />
          ) : skuQuantity > 0 ? (
            <Stock>{skuQuantity} in Stock</Stock>
          ) : (
            <OutOfStock>Out of Stock</OutOfStock>
          )
        ) : (
          error === skuErrorMessages.inventory && (
            <StockError>
              Availability information is unavailable at this time. Please
              rescan or enter SKU manually.
            </StockError>
          )
        )}
        <Code>SKU: #{skuCode}</Code>
      </Box>
    </Wrapper>
  );
}

export default SKUTile;
