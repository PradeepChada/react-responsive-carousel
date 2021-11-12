import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from '../../components/searchbar/SearchBar';
import SKUTile from './sku-tile/SKUTile';
import SkuError from '../../components/sku-error/SkuError';
import {
  addItemToCart,
  removeItemFromCart,
  increaseItemQuantityFromCart,
  decreaseItemQuantityFromCart,
  actions,
} from '../../slices/cart.slice';
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
import { getSKUTileInfo, givenItemExits } from '../../utils/skuHelpers';

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
  const { loading, cartItems, error } = useSelector((state) => state.cart);
  const [openOrderSummary, setOpenOrderSummary] = useState(false);

  const handleSearch = (skuId) => {
    if (!skuId) dispatch(actions.failure(skuErrorMessages.malfunction));
    else {
      if (!givenItemExits(skuId, cartItems)) dispatch(addItemToCart(skuId));
    }
  };

  const removeItem = (skuId) => {
    dispatch(removeItemFromCart(skuId, cartItems));
  };
  const increaseItemQuantity = (skuId) => {
    dispatch(increaseItemQuantityFromCart(skuId, cartItems));
  };

  const decreaseItemQuantity = (skuId, skuQantity) => {
    if (skuQantity > 1)
      dispatch(decreaseItemQuantityFromCart(skuId, cartItems));
    else removeItem(skuId);
  };

  const handleClick = () => {};
  const handleClear = () => {};

  const arrowClickHandler = () => {
    setOpenOrderSummary((prevState) => !prevState);
  };

  return (
    <>
      <BoxWrapper>
        <SearchBar handleSearch={handleSearch} handleClear={handleClear} />
        {cartItems.length === 0 && !loading && error == null && (
          <SearchPageText />
        )}
        {error && (
          <ErrorWrapper>
            <SkuError {...error} />
          </ErrorWrapper>
        )}
        {loading && <SKUTile loading={loading} />}
        {cartItems.map((data) => (
          <SKUTile
            key={data?.skuData?.id}
            skuInfo={getSKUTileInfo(data?.skuData)}
            skuQuantity={data?.skuQantity}
            removeItem={removeItem}
            handleClick={handleClick}
            increaseItemQuantity={increaseItemQuantity}
            decreaseItemQuantity={decreaseItemQuantity}
          />
        ))}
      </BoxWrapper>
      <CartContainer>
        <Box
          className='order-discount-container'
          display={openOrderSummary ? 'none ' : 'flex'}
        >
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
