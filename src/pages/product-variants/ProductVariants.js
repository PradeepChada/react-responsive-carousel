import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Skeleton, Box } from '@mui/material';
import ProductTitle from '../../components/product-title/ProductTitle';
import SkuTile from '../../components/sku-tile/SkuTile';
import { fetchSkuVariants } from '../../slices/skuVariants.slice';
import { fetchSkuDetails } from '../../slices/sku.slice';
import {
  PageContainer,
  Title,
  ErrorWrapper,
  NoContent,
} from './ProductVariants.styles';
import { getSKUQtyInStore, getSkuPriceDetails } from './../../utils/skuHelpers';
import SkuError from '../../components/sku-error/SkuError';
import config from './../../config';
import { skuErrorMessages } from '../../constants/errorMessages';

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

const ProductVariants = ({ history, match }) => {
  const dispatch = useDispatch();
  const { loading, skuVariants, error } = useSelector(
    (state) => state.skuVariants
  );
  const { reviewsData } = useSelector((state) => state.reviews);
  const { storeId } = useSelector((state) => state.store);
  const {
    loading: skuTitleLoading,
    skuData,
    skuAvailabilityLoading,
    skuAvailabilityError,
    skuAvailability,
  } = useSelector((state) => state.sku);

  useEffect(() => {
    dispatch(fetchSkuVariants(match?.params?.defaultProduct, storeId));
  }, [dispatch, match?.params?.defaultProduct, storeId]);

  useEffect(() => {
    if (skuData?.id !== Number(match?.params?.id)) {
      dispatch(fetchSkuDetails(match?.params?.id, storeId, false));
    }
  }, [dispatch, match?.params?.id, skuData, storeId]);

  const getSkuData = (item) => {
    return {
      image: `${config.appConfig.asset_base_url}${item.mediaList?.[0]?.url}`,
      skuPriceDetails: getSkuPriceDetails(item?.productPrice),
      name: item.name,
      qtyAvailableAtStore: getSKUQtyInStore(
        item.id,
        skuAvailability?.requestStoreNumber,
        skuAvailability?.inventoryEstimates
      ),
      skuId: item.id,
    };
  };

  const renderContent = () => {
    if (loading) {
      return (
        <>
          {Array(3)
            .fill(null)
            .map((_, i) => (
              <SkuTile key={`key${i}`} loading={true} />
            ))}
        </>
      );
    } else {
      return variants?.length ? (
        variants.map((item, i) => {
          const skuInfo = getSkuData(item);
          return (
            <SkuTile
              key={`key${i}`}
              skuInfo={skuInfo}
              skuAvailabilityLoading={skuAvailabilityLoading}
              skuAvailabilityError={skuAvailabilityError}
              handleClick={(id) => history.push(`/product-details/${id}`)}
            />
          );
        })
      ) : (
        <NoContent>{skuErrorMessages.productVariants.title}</NoContent>
      );
    }
  };

  if (error) {
    return (
      <ErrorWrapper alignItems='center'>
        <SkuError {...error} />
      </ErrorWrapper>
    );
  }
  const variants = skuVariants?.skus?.filter((o) => o.id !== match?.params?.id);
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
      <Title variant='h6' nocontent={variants?.length === 0 ? 'true' : 'false'}>
        Additional Sizes & Colors&nbsp;
        {variants?.length ? `(${variants.length})` : null}
      </Title>
      {renderContent()}
    </PageContainer>
  );
};

export default ProductVariants;
