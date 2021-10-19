import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Skeleton, Button, Divider, Box } from '@mui/material';
import ProductTitle from '../../components/product-title/ProductTitle';
import SkuTile from '../../components/sku-tile/SkuTile';
import { fetchASkuVariants } from '../../slices/skuVariants.slice';
import { PageContainer, Wrapper, Title } from './ProductVariants.styles';
import {getSkuPrice } from './../../utils/skuHelpers';

const LoadingSkeleton = () => {
  return (
    <Box padding={1}>
      <Skeleton variant="rectangular" height={16} />
      <Box display='flex' justifyContent='space-between' alignItems='center' marginTop={'5px'} marginBottom={1}>
        <div />
        <Skeleton variant="rectangular" width={60} height={10} />
      </Box>
    </Box>
  )
}

const ProductVariants = ({ match }) => {
  const dispatch = useDispatch();
  const { loading, skuData, error } = useSelector(
    (state) => state.sku
  );

  useEffect(() => {
    if (!skuData)
      dispatch(fetchASkuVariants(match?.params?.id, 899));
  }, [dispatch, match?.params?.id, skuData])

  const getSkuData = (item) => {
    const skuInfo = {
      image:
        'data:image/png;base64,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',
      price: getSkuPrice(item?.productPrice, 'maxRetailPrice'),
      name: item.name,
      qtyAvailableAtStore: item.qtyAvailableAtStore,
      skuId: item.id,
    };
    return skuInfo;
  }

  return (
    <PageContainer>
      {loading ? <LoadingSkeleton/> : <ProductTitle
        title={skuData?.name}
        skuId={match?.params?.id}
        rating={4}
        ratingCount={10}
      />}
      <Wrapper>
        <Title variant='h6'>Additional Sizes & Colors (3)</Title>
      </Wrapper>{
        loading ? Array(2).fill(null).map(() => <SkuTile loading={true} />) :
          skuData?.skus.filter(o => o.id !== match?.params?.id).map(item => {
            const skuInfo = getSkuData(item);
            return <SkuTile skuInfo={skuInfo} />
          })
      }
    </PageContainer>
  );
};

export default ProductVariants;
