import { Typography, Skeleton, Button, Divider } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import ProductTitle from '../../components/product-title/ProductTitle';
import {
  Availability,
  InfoTile,
  PageContainer,
  Price,
  Spec,
  ErrorWrapper
} from './ProductDetails.styles';
import StoreIcon from './../../assets/icons/store.svg';
import DeliveryIcon from './../../assets/icons/delivery.svg';
import ChevronRight from '@mui/icons-material/ChevronRight';
import ProductCarousel from './product-carousel/ProductCarousel';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSkuDetails } from '../../slices/sku.slice';
import SkuError from '../../components/sku-error/SkuError';

const getSkuPrice = (skuPrices = {}, type) => {
  return skuPrices[type]?.amount;
}

const getColor = (attributes) => {
  return attributes?.find(o => o.id === 'COLOR')?.name
}

const LoadingSkeleton = () => {
  return (
    <Box padding={1}>
      <Skeleton variant="rectangular" height={16} />
      <Box display='flex' justifyContent='space-between' alignItems='center' marginTop={'5px'} marginBottom={1}>
        <div />
        <Skeleton variant="rectangular" width={60} height={10} />
      </Box>
      <Box display="flex">
        <Skeleton variant="rectangular" width={207} height={207} />
      </Box>
      <Box display="flex" marginTop={1} justifyConten="flex-start">
        <Skeleton variant="rectangular" width={43} height={43} sx={{ marginRight: 1 }} />
        <Skeleton variant="rectangular" width={43} height={43} />
      </Box>
      <Skeleton width={70} height={30} sx={{ marginTop: '10px', marginBottom: '10px' }} />
      <Skeleton width={200} sx={{ marginTop: '10px' }} />
      <Skeleton width={110} sx={{ marginBottom: '5px' }} />
      <Skeleton width={60} sx={{ marginTop: 2, marginBottom: 1 }} />
      <Skeleton height={50} sx={{ transform: 'none', }} />
      <Skeleton height={80} sx={{ marginTop: 1, transform: 'none' }} />
      <Skeleton height={40} sx={{ marginTop: 2 }} />
      <Skeleton height={40} sx={{ marginBottom: '5px' }} />
    </Box>
  )
}

const ProductDetails = ({ history, match }) => {
  const dispatch = useDispatch();
  const { loading, skuData, error } = useSelector(
    (state) => state.sku
  );
  const price = getSkuPrice(skuData?.skuPrices, 'maxRetailPrice');
  const color = getColor(skuData?.attribute)

  useEffect(() => {
    if(!skuData)
    dispatch(fetchSkuDetails(match?.params?.id, 899));
  }, [dispatch, match?.params?.id, skuData])

  if (loading) {
    return <LoadingSkeleton />
  }
  if (error) {
    return <ErrorWrapper alignItems="center">
      <SkuError {...error}/>
    </ErrorWrapper>
  }
  return (
    <PageContainer>
      <ProductTitle
        title={skuData?.name}
        skuId={skuData?.id}
        rating={4}
        ratingCount={10}
      />
      <ProductCarousel
        images={skuData?.mediaList?.map((o) => o.url) || []}
      />
      <Price>${price}/ea</Price>
      <div>
        <Spec>
          Dimensions:{' '}
          <span>
            {skuData?.dimension?.length}" sq. x {skuData?.dimension?.height}" h
          </span>
        </Spec>
        {!!skuData?.dimension?.weight && <Spec>
          Color: <span>{skuData?.dimension?.weight}</span>
        </Spec>}
        {color && <Spec>
          Color: <span>{color}</span>
        </Spec>}
      </div>
      <Availability>
        <Typography className='sub-head'>Availability</Typography>
        <Box className='store-tile'>
          <img src={StoreIcon} alt='Store' />
          <Box flexGrow={1}>
            <div className='stock-details'>
              <span className='stock-green'>10 in Stock</span> in this store
            </div>
            <Button className='availability-link' variant='text'>
              View availability in other stores
            </Button>
          </Box>
        </Box>
        <Box className='store-tile other-stores'>
          <img src={DeliveryIcon} alt='Store' />
          <Box flexGrow={1}>
            <div className='stock-details'>
              <span className='stock-green'>100 in Stock</span> in DC
            </div>
            <Divider />
            <div className='stock-details'>
              <span className='stock-green'>131 in Stock</span> online
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
          onClick={() => history.push(`/product-variants/${match?.params?.id}`)}
        >
          <Typography>Additional Sizes & Colors (3)</Typography>
          <ChevronRight />
        </InfoTile>
      </Box>
    </PageContainer>
  );
};

export default ProductDetails;
