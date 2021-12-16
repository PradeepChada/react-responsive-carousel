import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Skeleton, Box } from '@mui/material';
import ProductTitle from '../../components/product-title/ProductTitle';
import { fetchSkuVariants } from '../../slices/skuVariants.slice';
import { fetchSkuDetails } from '../../slices/sku.slice';
import {
  PageContainer,
  Title,
  ErrorWrapper,
  NoContent,
  SkuList,
} from './RecommendedProducts.styles';
import SkuError from '../../components/sku-error/SkuError';
import ProductCard from './product-card/ProductCard';
import { fetchFreqBoughtProducts } from '../../slices/recommended.slice';

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
    </Box>
  );
};

const ProductSkeleton = () => {
  return (
    <Box sx={{ marginRight: 1, paddingBottom: 2 }}>
      <Skeleton width={150} height={150} sx={{ transform: 'none' }} />
      <Box display={'flex'} justifyContent={'flex-start'}>
        {Array(2)
          .fill(null)
          .map(() => (
            <Skeleton
              height={30}
              width={30}
              sx={{ marginRight: 1, transform: 'none', marginTop: 1 }}
            />
          ))}
      </Box>
      <Skeleton
        width={'100%'}
        height={10}
        sx={{ transform: 'none', marginTop: 1 }}
      />
      <Skeleton
        width={'50%'}
        height={10}
        sx={{ transform: 'none', marginTop: 1 }}
      />
      <Skeleton
        width={'100%'}
        height={10}
        sx={{ transform: 'none', marginTop: 2 }}
      />
    </Box>
  );
};

const RecommendedProducts = ({ history, match }) => {
  const dispatch = useDispatch();
  const { freqBoughtLoading, freqBoughtProducts, freqBoughtErroor } =
    useSelector((state) => state.recommended);
  const { reviewsData } = useSelector((state) => state.reviews);

  const {
    storeId,
    loading: skuTitleLoading,
    skuData,
  } = useSelector((state) => state.sku);

  useEffect(() => {
    dispatch(fetchSkuVariants(match?.params?.defaultProduct, storeId));
  }, [dispatch, match?.params?.defaultProduct, storeId]);

  useEffect(() => {
    dispatch(fetchFreqBoughtProducts());
  }, [dispatch]);

  useEffect(() => {
    if (skuData?.id !== Number(match?.params?.id)) {
      dispatch(fetchSkuDetails(match?.params?.id, storeId, false));
    }
  }, [dispatch, match?.params?.id, skuData, storeId]);

  if (freqBoughtErroor) {
    return (
      <ErrorWrapper alignItems='center'>
        <SkuError {...freqBoughtErroor} />
      </ErrorWrapper>
    );
  }

  const renderContent = () => {
    if (freqBoughtLoading) {
      return (
        <SkuList>
          {Array(3)
            .fill(null)
            .map((_, i) => (
              <ProductSkeleton />
            ))}
        </SkuList>
      );
    } else {
      return freqBoughtProducts?.length ? (
        <SkuList>
          {freqBoughtProducts.map((item, i) => {
            return (
              <ProductCard
                data={item}
                onClickProduct={() =>
                  history.push(`/product-details/${item?.id}`)
                }
              />
            );
          })}
        </SkuList>
      ) : (
        <NoContent>No recommended products found</NoContent>
      );
    }
  };

  return (
    <PageContainer>
      {skuTitleLoading ? (
        <LoadingSkeleton />
      ) : (
        <ProductTitle
          title={skuData?.name}
          skuId={match?.params?.id}
          rating={reviewsData?.results?.[0]?.rollup?.average_rating}
          ratingCount={reviewsData?.results?.[0]?.rollup?.review_count}
        />
      )}
      <Title variant='h6'>Frequently Bought Together</Title>
      {renderContent()}
    </PageContainer>
  );
};

export default RecommendedProducts;
