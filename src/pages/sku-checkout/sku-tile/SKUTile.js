import React from 'react';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import {
  Wrapper,
  ImageSkeleton,
  PriceSkeleton,
  TitleSkeleton,
  CodeSkeleton,
  Image,
  Price,
  SalePriceWrapper,
  Title,
  Code,
  ClearIconWrapper,
  ClearIconSkeleton,
  ButtonGroupWrapper,
  ButtonGroupSkeleton,
} from './SKUTile.styles';
import { skuErrorMessages } from '../../../constants/errorMessages';
import { Skeleton, Typography } from '@mui/material';

const SkuTile = ({
  skuInfo,
  loading,
  skuAvailabilityLoading,
  skuAvailabilityError,
  handleClick,
}) => {
  const _renderSkeleton = () => {
    return (
      <Wrapper>
        <ImageSkeleton variant='rectangular' data-testid='image-skeleton' />
        <Box
          display='flex'
          flexDirection='column'
          overflow='hidden'
          flexGrow={1}
        >
          <Box
            display='flex'
            flexDirection='row'
            justifyContent='space-between'
          >
            <TitleSkeleton variant='text' data-testid='title-skeleton' />
            <ClearIconSkeleton variant='rectangular' />
          </Box>
          <CodeSkeleton variant='text' data-testid='code-skeleton' />
          <Box
            display='flex'
            flexDirection='row'
            justifyContent='space-between'
          >
            <ButtonGroupSkeleton />
            <Box display='flex' flexDirection='column'>
              <PriceSkeleton />
              <Skeleton className='options' widh={50} />
            </Box>
          </Box>
        </Box>
      </Wrapper>
    );
  };
  if (loading) return _renderSkeleton();
  return (
    <Wrapper onClick={() => handleClick(skuInfo.skuId)}>
      <Image src={skuInfo?.image} alt='SKUImage' />
      <Box flexDirection='column' overflow='hidden' flexGrow={1}>
        <Box display='flex' flexDirection='row' justifyContent='space-between'>
          <Title data-testid='sku-title'>
            {skuInfo?.name?.substring(0, 25)}...
          </Title>
          <ClearIconWrapper />
        </Box>
        <Code>SKU: #{skuInfo?.skuId}</Code>
        <Box display='flex' flexDirection='row' justifyContent='space-between'>
          <ButtonGroupWrapper>
            <Typography>+</Typography>
            <Typography>1</Typography>
            <Typography>-</Typography>
          </ButtonGroupWrapper>
          <Box display='flex' flexDirection='column' alignItems='flex-end'>
            {skuInfo?.skuPriceDetails?.onSale ? (
              <>
                <SalePriceWrapper>
                  <Typography className='sale-price'>
                    ${skuInfo?.skuPriceDetails?.salePrice}
                  </Typography>
                  <Typography className='normal-price'>
                    ${skuInfo?.skuPriceDetails?.price}
                  </Typography>
                </SalePriceWrapper>
                <Typography className='discount-text'>
                  Discount Applied
                </Typography>
              </>
            ) : (
              <Price>${skuInfo?.skuPriceDetails?.price}/ea</Price>
            )}
            <Typography className='options'>Options</Typography>
          </Box>
        </Box>
      </Box>
    </Wrapper>
  );
};

export default SkuTile;

SkuTile.propTypes = {
  skuInfo: PropTypes.object,
  loading: PropTypes.bool,
  skuAvailabilityLoading: PropTypes.bool,
  skuAvailabilityError: PropTypes.object,
  handleClick: PropTypes.func,
};
