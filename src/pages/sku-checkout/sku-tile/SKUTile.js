import React, { useState } from 'react';
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
  InputWrapper,
} from './SKUTile.styles';
import { Skeleton, Typography } from '@mui/material';
const _renderSkeleton = () => {
  return (
    <Box display='flex' flexDirection='row' padding='1.5rem 0 1rem 0'>
      <ImageSkeleton variant='rectangular' data-testid='image-skeleton' />
      <Box display='flex' flexDirection='column' overflow='hidden' flexGrow={1}>
        <Box display='flex' flexDirection='row' justifyContent='space-between'>
          <TitleSkeleton variant='text' data-testid='title-skeleton' />
          <ClearIconSkeleton
            variant='rectangular'
            data-testid='clear-icon-skeleton'
          />
        </Box>
        <CodeSkeleton variant='text' data-testid='code-skeleton' />
        <Box display='flex' flexDirection='row' justifyContent='space-between'>
          <ButtonGroupSkeleton />
          <Box display='flex' flexDirection='column'>
            <PriceSkeleton data-testid='price-skeleton' />
            <Skeleton
              className='options'
              widh={50}
              data-testid='option-text-skeleton'
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
const SkuTile = ({
  skuInfo,
  skuQuantity,
  loading,
  handleClick,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  setItemQuantity,
}) => {
  const [skuQuantityError] = useState(false);
  const onChangeQuantity = (event) => {
    event.stopPropagation();
    if (event.target.value < 1000) {
      setItemQuantity(skuInfo.skuId, event.target.value);
    }
  };
  const onBlurQuantityInput = () => {
    if (Number(skuQuantity) === 0) {
      increaseItemQuantity(skuInfo.skuId);
    }
  };
  const plusButtonHandler = (event) => {
    event.stopPropagation();
    if (skuQuantity < 999) {
      increaseItemQuantity(skuInfo.skuId);
    }
  };
  const minusButtonHandler = (event) => {
    event.stopPropagation();
    decreaseItemQuantity(skuInfo.skuId, skuQuantity);
  };
  if (loading) {
    return _renderSkeleton();
  }
  return (
    <Wrapper onClick={() => handleClick(skuInfo.skuId)}>
      <Box display='flex' flexDirection='row'>
        <Box className='image-container'>
          <Image src={skuInfo?.image} alt='SKUImage' />
          {skuInfo?.skuPriceDetails?.onSale && (
            <Box className='image-sale-text'>Sale</Box>
          )}
        </Box>

        <Box flexDirection='column' overflow='hidden' flexGrow={1}>
          <Box
            display='flex'
            flexDirection='row'
            justifyContent='space-between'
          >
            <Title data-testid='sku-title'>
              {skuInfo?.name?.substring(0, 25)}...
            </Title>
            <ClearIconWrapper onClick={() => removeItem(skuInfo.skuId)} />
          </Box>
          <Code>SKU: #{skuInfo?.skuId}</Code>
          <Box
            display='flex'
            flexDirection='row'
            justifyContent='space-between'
          >
            <ButtonGroupWrapper onClick={(event) => event.stopPropagation()}>
              <Typography className='minus-button' onClick={minusButtonHandler}>
                -
              </Typography>
              <InputWrapper
                value={skuQuantity}
                onChange={onChangeQuantity}
                onBlur={onBlurQuantityInput}
              />
              <Typography className='plus-button' onClick={plusButtonHandler}>
                +
              </Typography>
            </ButtonGroupWrapper>
            <Box display='flex' flexDirection='column' alignItems='flex-end'>
              {skuInfo?.skuPriceDetails?.onSale ? (
                <>
                  <SalePriceWrapper>
                    <Typography className='sale-price'>
                      $
                      {Number(
                        skuQuantity * skuInfo?.skuPriceDetails?.salePrice
                      ).toFixed(2)}
                    </Typography>
                    <Typography className='normal-price'>
                      $
                      {Number(
                        skuQuantity * skuInfo?.skuPriceDetails?.price
                      ).toFixed(2)}
                    </Typography>
                  </SalePriceWrapper>
                  <Typography className='discount-text'>
                    Discount Applied
                  </Typography>
                </>
              ) : (
                <Price>
                  $
                  {Number(
                    skuQuantity * skuInfo?.skuPriceDetails?.price
                  ).toFixed(2)}
                </Price>
              )}
              <Typography className='options'>Options</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      {skuQuantityError && (
        <Typography className='quantity-error'>
          Unable to proceed. Quantity in cart is greater than the store's
          current stock (x in stock at this store)
        </Typography>
      )}
    </Wrapper>
  );
};

export default SkuTile;

SkuTile.propTypes = {
  skuInfo: PropTypes.object,
  loading: PropTypes.bool,
  handleClick: PropTypes.func,
  skuQuantity: PropTypes.number,
  removeItem: PropTypes.func,
  increaseItemQuantity: PropTypes.func,
  decreaseItemQuantity: PropTypes.func,
  setItemQuantity: PropTypes.func,
};
