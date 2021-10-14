import { Typography, Button, Divider } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import ProductTitle from '../../components/product-title/ProductTitle';
import {
  Availability,
  InfoTile,
  PageContainer,
  Price,
  Spec,
} from './ProductDetails.styles';
import StoreIcon from './../../assets/icons/store.svg';
import DeliveryIcon from './../../assets/icons/delivery.svg';
import ChevronRight from '@mui/icons-material/ChevronRight';
import ProductCarousel from './product-carousel/ProductCarousel';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSkuDetails } from '../../slices/sku.slice';

const getSkuPrice = (skuPrices={}, type) => {
  return skuPrices[type]?.amount;
}

const ProductDetails = ({ history, match }) => {
  const dispatch = useDispatch();
  const { loading, skuData, skuAvailability, error } = useSelector(
    (state) => state.sku
  );
  const availability = skuAvailability?.inventoryEstimates[0] || {};
  const price = getSkuPrice(skuData?.skuPrices, 'maxRetailPrice');

  useEffect(() => {
    dispatch(fetchSkuDetails(match?.params?.id, 899));
  }, [dispatch])
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
        // images={[
        //   'https://cdn-fsly.yottaa.net/55df7e1a2bb0ac7d800040c2/www.containerstore.com/v~4b.11c/catalogimages/331896/OD_17_10018841-File-Tote-Boxes-Hangi.jpg?width=1200&height=1200&align=center&yocs=2C_4c_2E_2H_',
        //   'https://cdn-fsly.yottaa.net/55df7e1a2bb0ac7d800040c2/www.containerstore.com/v~4b.11c/catalogimages/370134/OF_19-10013806-Portable-File_Tote_RG.jpg?width=1200&height=1200&align=center&yocs=2C_4c_2E_2H_',
        //   'https://cdn-fsly.yottaa.net/55df7e1a2bb0ac7d800040c2/www.containerstore.com/v~4b.11c/catalogimages/369949/OF_19_%2010013806-File-Totes_RGB.jpg?width=1200&height=1200&align=center&yocs=2C_4c_2E_2H_',
        // ]}
      />
      <Price>${price}/ea</Price>
      <div>
        <Spec>
          Dimensions:{' '}
          <span>
            {skuData?.dimension?.length}" sq. x {skuData?.dimension?.height}" h
          </span>
        </Spec>
        <Spec>
          Color: <span>Clear</span>
        </Spec>
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
