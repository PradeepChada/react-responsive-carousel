import { Typography, Skeleton, Button, Divider, Drawer } from '@mui/material';
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
} from './ProductDetails.styles';
import StoreIcon from './../../assets/icons/store.svg';
import DeliveryIcon from './../../assets/icons/delivery.svg';
import ChevronRight from '@mui/icons-material/ChevronRight';
import ProductCarousel from './product-carousel/ProductCarousel';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchSkuDetails,
  fetchStoreAvailability,
} from '../../slices/sku.slice';
import {
  getSkuPrice,
  getQtyInStore,
  getQtyInDC,
  getQtyOnline,
} from './../../utils/skuHelpers';
import SkuError from '../../components/sku-error/SkuError';
import config from './../../config';
import NetworkInventory from './network-inventory/NetworkInventory';

const LoadingSkeleton = () => {
  return (
    <Box padding={1}>
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
    </Box>
  );
};

const ProductDetails = ({ history, match }) => {
  const dispatch = useDispatch();
  const {
    loading,
    skuData,
    error,
    skuAvailability,
    mktAvailLoading,
    mktAvailData,
    mktAvailError,
  } = useSelector((state) => state.sku);
  const [showDrawer, setShowDrawer] = useState(false);
  const price = getSkuPrice(skuData?.skuPrices, 'maxRetailPrice');

  useEffect(() => {
    if (!skuData) {
      dispatch(fetchSkuDetails(match?.params?.id, 899));
    }
  }, [dispatch, match?.params?.id, skuData]);

  const toggleDrawer = (open) => {
    open && dispatch(fetchStoreAvailability(match?.params?.id));
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
          data={mktAvailData?.storeAvailabilities}
          loading={mktAvailLoading}
        />
      </Drawer>
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

  const inStoreQty = getQtyInStore(skuAvailability?.inventoryEstimates, '5');
  const onlineQty = getQtyOnline(skuAvailability?.inventoryEstimates, '5');
  const dcQty = getQtyInDC(skuAvailability?.inventoryEstimates);

  return (
    <PageContainer>
      {_renderDrawer()}
      <ProductTitle
        title={skuData?.name}
        skuId={skuData?.id}
        rating={4}
        ratingCount={10}
      />
      <ProductCarousel
        images={
          skuData?.mediaList
            ?.filter((o) => o.name === 'SKU_IMAGE')
            ?.map((o) => `${config.ASSET_URL}${o.url}`) || []
        }
      />
      <Price>${price}/ea</Price>
      <div>
        <Spec>
          Dimensions: <span>{skuData?.dimensionDescription}</span>
        </Spec>
        {!!skuData?.dimension?.weight && (
          <Spec>
            Weight: <span>{skuData?.dimension?.weight}</span>
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
        <Box className='store-tile'>
          <img src={StoreIcon} alt='Store' />
          <Box flexGrow={1}>
            <div className='stock-details'>
              {inStoreQty ? (
                <span className='stock-green'>{inStoreQty} in Stock</span>
              ) : (
                <span className='stock-red'>Out of Stock</span>
              )}{' '}
              in this store
            </div>
            <Button
              className='availability-link'
              variant='text'
              onClick={() => toggleDrawer(true)}
            >
              View availability in other stores
            </Button>
          </Box>
        </Box>
        <Box className='store-tile other-stores'>
          <img src={DeliveryIcon} alt='Store' />
          <Box flexGrow={1}>
            <div className='stock-details'>
              {dcQty ? (
                <span className='stock-green'>{dcQty} in Stock</span>
              ) : (
                <span className='stock-red'>Out of Stock</span>
              )}{' '}
              in DC
              {/* <span className='stock-green'>{qtyAvailableInDc} in Stock</span> in DC */}
            </div>
            <Divider />
            <div className='stock-details'>
              {onlineQty ? (
                <span className='stock-green'>{onlineQty} in Stock</span>
              ) : (
                <span className='stock-red'>Out of Stock</span>
              )}{' '}
              online
            </div>
          </Box>
        </Box>
      </Availability>
      <Box>
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
      </Box>
    </PageContainer>
  );
};

export default ProductDetails;
