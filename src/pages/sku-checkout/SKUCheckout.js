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
  setItemQuantityByGivenQuantityFromCart,
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
  PayButton,
} from './SKUCheckout.styles';
import { getSKUTileInfo, givenItemExitsInCart } from '../../utils/skuHelpers';
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
function SkuCheckout({ history }) {
  const dispatch = useDispatch();
  const { loading, cartItems, error } = useSelector((state) => state.cart);
  const [openOrderSummary, setOpenOrderSummary] = useState(false);

  const removeItem = (skuId) => {
    dispatch(removeItemFromCart(skuId, cartItems));
  };
  const increaseItemQuantity = (skuId) => {
    dispatch(increaseItemQuantityFromCart(skuId, cartItems));
  };
  const setItemQuantity = (skuId, skuQuantity) => {
    dispatch(
      setItemQuantityByGivenQuantityFromCart(skuId, cartItems, skuQuantity)
    );
  };
  const decreaseItemQuantity = (skuId, skuQuantity) => {
    if (skuQuantity > 1) {
      dispatch(decreaseItemQuantityFromCart(skuId, cartItems));
    } else {
      removeItem(skuId);
    }
  };
  const handleSearch = (skuId) => {
    if (!skuId) {
      dispatch(actions.failure(skuErrorMessages.malfunction));
    } else {
      const exitItemIndex = givenItemExitsInCart(skuId, cartItems);
      if (exitItemIndex > -1) {
        if (cartItems[exitItemIndex].skuQuantity < 999) {
          dispatch(increaseItemQuantityFromCart(skuId, cartItems));
        }
      } else {
        dispatch(addItemToCart(skuId));
      }
    }
  };

  const arrowClickHandler = () => {
    setOpenOrderSummary((prevState) => !prevState);
  };

  return (
    <>
      <BoxWrapper>
        <SearchBar handleSearch={handleSearch} />
        {cartItems.length === 0 && !loading && error == null && (
          <SearchPageText />
        )}
        <Box
          className='cart-items-container'
          marginBottom={openOrderSummary ? '205px' : '110px'}
        >
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
              skuQuantity={data?.skuQuantity}
              removeItem={removeItem}
              handleClick={() =>
                history.push(`/sku-checkout/sku-details/${data?.skuData?.id}`)
              }
              increaseItemQuantity={increaseItemQuantity}
              decreaseItemQuantity={decreaseItemQuantity}
              setItemQuantity={setItemQuantity}
            />
          ))}
        </Box>
      </BoxWrapper>
      <CartContainer>
        {!openOrderSummary && (
          <Box
            className='order-discount-container'
            display={openOrderSummary ? 'none ' : 'flex'}
          >
            <Typography className='order-discount-text'>
              Order Discounts
            </Typography>
            <RightArrow />
          </Box>
        )}

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
                <UpArrow
                  onClick={arrowClickHandler}
                  data-testid='total-up-arrow'
                />
              ) : (
                <DownArrow
                  onClick={arrowClickHandler}
                  data-testid='total-down-arrow'
                />
              )}
            </Box>
            <Typography className='cart-total-price'>--</Typography>
          </Box>
          <PayButton
            disable={cartItems.length === 0 ? true : false}
            onClick={() => history.push('/payment-details')}
          >
            FINISH / PAY
          </PayButton>
        </Box>
      </CartContainer>
    </>
  );
}

export default SkuCheckout;
