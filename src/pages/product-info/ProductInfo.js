import React, { useEffect } from 'react';
import { Box, Skeleton } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux';
import ProductTitle from '../../components/product-title/ProductTitle';
import SkuError from '../../components/sku-error/SkuError';
import { fetchSkuDetails } from '../../slices/sku.slice';
import { PageContainer, Wrapper, Title, ErrorWrapper } from './ProductInfo.styles';

const LoadingSkeleton = () => {
  return (
    <Box padding={1}>
      <Skeleton variant="rectangular" height={16} />
      <Box display='flex' justifyContent='space-between' alignItems='center' marginTop={'5px'} marginBottom={1}>
        <div />
        <Skeleton variant="rectangular" width={60} height={10} />
      </Box>
      <Skeleton height={10} sx={{ marginTop: 3, transform: 'none' }} />
      <Skeleton height={10} sx={{ marginTop: 1, transform: 'none' }} />
      <Skeleton height={10} sx={{ marginTop: 1, transform: 'none' }} />
    </Box>
  )
}

const ProductInfo = ({ match }) => {
  const dispatch = useDispatch();

  const { loading, skuData, error } = useSelector(
    (state) => state.sku
  );

  useEffect(() => {
    if (!skuData)
      dispatch(fetchSkuDetails(match?.params?.id, 899));
  }, [dispatch, match?.params?.id, skuData])

  if (loading) {
    return <LoadingSkeleton />
  }

  if (error) {
    return <ErrorWrapper alignItems="center">
      <SkuError {...error} />
    </ErrorWrapper>
  }

  return (
    <PageContainer>
      <ProductTitle
        title={skuData?.name}
        skuId={match?.params?.id}
        rating={4}
        ratingCount={10}
      />
      <Wrapper>
        <Title variant='h6'>Product Information</Title>
        <ul>
          <li>{skuData?.description}</li>
        </ul>
      </Wrapper>
    </PageContainer>
  );
};

export default ProductInfo;
