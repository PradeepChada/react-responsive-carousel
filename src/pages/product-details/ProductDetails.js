import { Typography, Skeleton, Button, Drawer, Container } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import ProductTitle from '../../components/product-title/ProductTitle';
import {
  Availability,
  InfoTile,
  PageContainer,
  Price,
  Spec,
  ErrorWrapper,
  StockError,
  SalePriceWrapper,
  ButtonGroupWrapper,
  InputWrapper,
  SaveButton,
} from './ProductDetails.styles';
import StoreIcon from './../../assets/icons/store.svg';
import DeliveryIcon from './../../assets/icons/delivery.svg';
import RefreshIcon from './../../assets/icons/refresh.svg';
import ChevronRight from '@mui/icons-material/ChevronRight';
import ProductCarousel from './product-carousel/ProductCarousel';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchSkuAvailability,
  fetchSkuDetails,
  fetchStoreAvailability,
} from '../../slices/sku.slice';
import {
  getQtyInStore,
  getQtyInDC,
  getSkuPriceDetails,
  givenItemExitsInCart,
  getProductImages,
  getProductVideos,
} from './../../utils/skuHelpers';
import SkuError from '../../components/sku-error/SkuError';
import NetworkInventory from './network-inventory/NetworkInventory';
import { skuErrorMessages } from '../../constants/errorMessages';
import RatingsBar from '../../components/ratings-bar/RatingsBar';
import { fetchQuestionDetails, resetQA } from '../../slices/q&a.slice';
import { RatingCount } from '../../components/product-title/ProductTitle.styles';
import { setItemQuantityByGivenQuantityFromCart } from '../../slices/cart.slice';
import ProductVideos from './product-videos/ProductVideos';

const LoadingSkeleton = () => {
  return (
    <Container padding={1}>
      <Skeleton variant='rectangular' height={16} />
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        marginTop={'5px'}
        marginBottom={1}
      >
        <div />
        <Skeleton variant='rectangular' width={60} height={10} />
      </Box>
      <Box display='flex'>
        <Skeleton variant='rectangular' width={207} height={207} />
      </Box>
      <Box display='flex' marginTop={1} justifyConten='flex-start'>
        <Skeleton
          variant='rectangular'
          width={43}
          height={43}
          sx={{ marginRight: 1 }}
        />
        <Skeleton variant='rectangular' width={43} height={43} />
      </Box>
      <Skeleton
        width={70}
        height={30}
        sx={{ marginTop: '10px', marginBottom: '10px' }}
      />
      <Skeleton width={200} sx={{ marginTop: '10px' }} />
      <Skeleton width={110} sx={{ marginBottom: '5px' }} />
      <Skeleton width={60} sx={{ marginTop: 2, marginBottom: 1 }} />
      <Skeleton height={50} sx={{ transform: 'none' }} />
      <Skeleton height={80} sx={{ marginTop: 1, transform: 'none' }} />
      <Skeleton height={40} sx={{ marginTop: 2 }} />
      <Skeleton height={40} sx={{ marginBottom: '5px' }} />
    </Container>
  );
};
const showStockDetails = (skuAvailabilityLoading, inStoreQty) => {
  if (skuAvailabilityLoading) {
    return <Skeleton />;
  }
  return (
    <div className='stock-details'>
      {inStoreQty ? (
        <span className='stock-green'>{inStoreQty} in Stock</span>
      ) : (
        <span className='stock-red'>Out of Stock</span>
      )}{' '}
      in this store
    </div>
  );
};

const showAvailabilityInOtherStore = (skuAvailabilityLoading, toggleDrawer) => {
  if (skuAvailabilityLoading) {
    return <Skeleton width={200} />;
  }
  return (
    <Button
      className='availability-link'
      variant='text'
      onClick={() => toggleDrawer(true)}
    >
      View availability in other stores
    </Button>
  );
};
const ProductDetails = ({ history, match }) => {
  const SKUCheckoutDetailsURL = '/sku-checkout/sku-details';
  const [showVideos, setShowVideos] = useState(false);
  const dispatch = useDispatch();
  const {
    storeId,
    loading,
    skuData,
    error,
    skuAvailability,
    skuAvailabilityLoading,
    skuAvailabilityError,
    mktAvailLoading,
    mktAvailData,
    mktAvailError,
    shipSkuAvailData,
    shipSkuAvailLoading,
  } = useSelector((state) => state.sku);

  const { reviewsData, loading: ratingLoading } = useSelector(
    (state) => state.reviews
  );
  const { questionsData } = useSelector((state) => state.skuQuestions);
  const { cartItems } = useSelector((state) => state.cart);
  const [showDrawer, setShowDrawer] = useState(false);
  const [skuQuantity, setSkuQuantity] = useState(1);
  const skuPriceDetails = getSkuPriceDetails(skuData?.skuPrices);

  useEffect(() => {
    if (skuData?.id !== Number(match?.params?.id)) {
      dispatch(fetchSkuDetails(match?.params?.id, storeId));
    }
  }, [dispatch, match?.params?.id, skuData, storeId]);

  useEffect(() => {
    if (skuData?.defaultProductId != null) {
      dispatch(fetchQuestionDetails(skuData?.defaultProductId));
    } else {
      dispatch(resetQA());
    }
  }, [dispatch, skuData]);

  useEffect(() => {
    if (history.location.pathname.includes(SKUCheckoutDetailsURL)) {
      const isExits = givenItemExitsInCart(match?.params?.id, cartItems);
      if (isExits <= -1) {
        history.replace('/sku-checkout');
      } else {
        setSkuQuantity(cartItems[isExits].skuQuantity);
      }
    }
  }, [match?.params?.id, cartItems, history]);

  const toggleDrawer = (open) => {
    open && dispatch(fetchStoreAvailability(match?.params?.id, storeId));
    setShowDrawer(open);
  };

  const fetchSkuAvailabilityData = () => {
    const stockBody = {
      sourceStoreNumber: storeId,
      fulfillmentStoreNumbers: [storeId, 899],
      skuQtyPairs: [
        {
          skuNumber: match?.params?.id,
          qty: 0,
        },
      ],
    };
    dispatch(fetchSkuAvailability(stockBody));
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

  const _renderDCInfo = () => {
    if (shipSkuAvailLoading) {
      return <Skeleton />;
    }
    return (
      <div className='stock-details'>
        {dcQty > 0 ? (
          <span className='stock-green'>Available</span>
        ) : (
          <span className='stock-red'>Unavailable</span>
        )}{' '}
        in DC
      </div>
    );
  };

  if (loading) {
    return <LoadingSkeleton />;
  }
  if (error) {
    return (
      <ErrorWrapper alignItems='center'>
        <SkuError {...error} />
      </ErrorWrapper>
    );
  }

  const inStoreQty = getQtyInStore(
    skuAvailability?.inventoryEstimates,
    skuAvailability?.requestStoreNumber
  );

  const dcQty = getQtyInDC(shipSkuAvailData?.inventoryEstimates);

  const plusButtonHandler = () => {
    setSkuQuantity((prevQuantity) => {
      if (prevQuantity < 999) {
        return prevQuantity + 1;
      } else {
        return prevQuantity;
      }
    });
  };
  const minusButtonHandler = () => {
    setSkuQuantity((prevQuantity) => {
      if (prevQuantity > 1) {
        return prevQuantity - 1;
      } else {
        return prevQuantity;
      }
    });
  };
  const saveChangesButtonHandler = () => {
    dispatch(
      setItemQuantityByGivenQuantityFromCart(
        match?.params?.id,
        cartItems,
        skuQuantity
      )
    );
    history.push('/sku-checkout');
  };
  const onChangeQuantity = (event) => {
    if (event.target.value < 1000) {
      setSkuQuantity(event.target.value);
    }
  };

  const onBlurQuantityInput = () => {
    if (skuQuantity <= 0) {
      setSkuQuantity(1);
    }
  };

  const videos = getProductVideos(skuData || {});
  return (
    <PageContainer>
      {_renderDrawer()}
      {showVideos && (
        <ProductVideos
          showModal={showVideos}
          handleClose={() => setShowVideos(false)}
          data={[...videos, ...videos, ...videos]}
        />
      )}
      <ProductTitle
        title={skuData?.name}
        skuId={skuData?.id}
        rating={reviewsData?.results?.[0]?.rollup?.average_rating}
        ratingCount={reviewsData?.results?.[0]?.rollup?.review_count}
        ratingLoading={ratingLoading}
      />
      <ProductCarousel images={getProductImages(skuData || {})} />
      {skuPriceDetails?.onSale ? (
        <SalePriceWrapper>
          <Typography className='sale-price'>
            ${skuPriceDetails?.salePrice?.toFixed(2)}
          </Typography>
          <Box marginLeft={'10px'}>
            <Typography className='normal-price'>
              Was ${skuPriceDetails?.price?.toFixed(2)}
            </Typography>
            <Typography className='savings'>
              Save ${skuPriceDetails?.maxSavings?.toFixed(2)} (
              {skuPriceDetails?.maxPercentOff}% off)
            </Typography>
          </Box>
        </SalePriceWrapper>
      ) : (
        <Price>${skuPriceDetails?.price?.toFixed(2)}/ea</Price>
      )}
      <div>
        {skuData?.dimensionDescription && (
          <Spec>
            Dimensions: <span>{skuData?.dimensionDescription}</span>
          </Spec>
        )}
        {skuData?.color && (
          <Spec>
            Color: <span>{skuData?.color}</span>
          </Spec>
        )}
      </div>
      <Availability>
        <Typography className='sub-head'>Availability</Typography>
        {skuAvailabilityError ? (
          <StockError>
            {skuErrorMessages.inventory?.shortDescription}
            <Box className='refresh-btn'>
              {/* <CachedIcon />  */}
              <img src={RefreshIcon} alt='Refresh' />
              <Button onClick={fetchSkuAvailabilityData} variant='text'>
                Refresh Page
              </Button>
            </Box>
          </StockError>
        ) : (
          <>
            <Box className='store-tile'>
              <img src={StoreIcon} alt='Store' />
              <Box flexGrow={1}>
                {showStockDetails(skuAvailabilityLoading, inStoreQty)}
                {showAvailabilityInOtherStore(
                  skuAvailabilityLoading,
                  toggleDrawer
                )}
              </Box>
              {history.location.pathname.includes(SKUCheckoutDetailsURL) && (
                <ButtonGroupWrapper>
                  <Typography
                    className='plus-button'
                    onClick={minusButtonHandler}
                  >
                    -
                  </Typography>
                  <InputWrapper
                    value={skuQuantity}
                    onChange={onChangeQuantity}
                    onBlur={onBlurQuantityInput}
                  />
                  <Typography
                    className='minus-button'
                    onClick={plusButtonHandler}
                  >
                    +
                  </Typography>
                </ButtonGroupWrapper>
              )}
            </Box>
            <Box className='store-tile other-stores'>
              <img src={DeliveryIcon} alt='Store' />
              <Box flexGrow={1}>{_renderDCInfo()}</Box>
            </Box>
          </>
        )}
      </Availability>
      <Box>
        {videos.length > 0 && (
          <InfoTile onClick={() => setShowVideos(true)}>
            <Typography>Product Videos</Typography>
            <ChevronRight />
          </InfoTile>
        )}
        <InfoTile
          onClick={() => history.push(`/product-info/${match?.params?.id}`)}
        >
          <Typography>Product Information</Typography>
          <ChevronRight />
        </InfoTile>
        <InfoTile
          onClick={() =>
            history.push(
              `/product-variants/${match?.params?.id}/${skuData?.defaultProductId}`
            )
          }
        >
          <Typography>Additional Sizes & Colors</Typography>
          <ChevronRight />
        </InfoTile>
        <InfoTile onClick={() => history.push(`/reviews/${match?.params?.id}`)}>
          <div className='ratings-wrapper'>
            <Box display='flex' justifyContent='space-between'>
              <Typography>Customer Reviews</Typography>
              <ChevronRight />
            </Box>
            <Box className='rating-info-block'>
              <RatingsBar
                rating={reviewsData?.results?.[0]?.rollup?.average_rating}
              />
              <RatingCount>
                {reviewsData?.results?.[0]?.rollup?.review_count || 0}
              </RatingCount>
            </Box>
          </div>
        </InfoTile>
        <InfoTile
          onClick={() => history.push(`/sku-info/q&a/${match?.params?.id}`)}
        >
          <Box display='flex' flexDirection='column' width='100%'>
            <Box display='flex' justifyContent='space-between' flexGrow='1'>
              <Typography>Q&A</Typography>
              <ChevronRight />
            </Box>
            {questionsData && (
              <Typography className='total-question-text'>
                {questionsData?.paging?.total_results} Questions
              </Typography>
            )}
          </Box>
        </InfoTile>
      </Box>
      {history.location.pathname.includes(SKUCheckoutDetailsURL) && (
        <SaveButton onClick={saveChangesButtonHandler}>Save Changes</SaveButton>
      )}
    </PageContainer>
  );
};

export default ProductDetails;
