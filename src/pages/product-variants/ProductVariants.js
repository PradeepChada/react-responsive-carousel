import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Skeleton, Box, Typography } from '@mui/material';
import ProductTitle from '../../components/product-title/ProductTitle';
import SkuTile from '../../components/sku-tile/SkuTile';
import { fetchASkuVariants } from '../../slices/skuVariants.slice';
import { fetchSkuDetails } from '../../slices/sku.slice';
import {
  PageContainer,
  Wrapper,
  Title,
  ErrorWrapper,
} from './ProductVariants.styles';
import { getSkuPrice } from './../../utils/skuHelpers';
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

  const {
    loading: skuTitleLoading,
    skuData,
    skuAvailabilityLoading,
    skuAvailabilityError,
    skuAvailability,
  } = useSelector((state) => state.sku);

  const getQuantity = (skuId, data = []) => {
    return data?.find((o) => o.fulfillmentStoreNumber === skuId)?.qtyAvailableAtStore;
  };

  useEffect(() => {
    dispatch(fetchASkuVariants(match?.params?.defaultProduct, 899));
  }, [dispatch, match?.params?.defaultProduct]);

  useEffect(() => {
   if (!skuData) dispatch(fetchSkuDetails(match?.params?.id, 899));
  }, [dispatch, match?.params?.id, skuData]);

  const getSkuData = (item) => {
    const skuInfo = {
      image: `${config.ASSET_URL}${item.mediaList?.[0]?.url}`,
      price: getSkuPrice(item?.productPrice, 'maxRetailPrice'),
      name: item.name,
      qtyAvailableAtStore: getQuantity(
        item.id,
        skuAvailability?.inventoryEstimates
      ),
      skuId: item.id,
    };
    return skuInfo;
  };

  if (error) {
    return (
      <ErrorWrapper alignItems='center'>
        <SkuError {...error} />
      </ErrorWrapper>
    );
  }
  const variants = skuVariants?.skus?.filter((o) => o.id !== match?.params?.id)
  return (
    <PageContainer>
      {skuTitleLoading ? (
        <LoadingSkeleton />
      ) : (
        <ProductTitle
          title={skuData?.name}
          skuId={match?.params?.id}
          rating={4}
          ratingCount={10}
        />
      )}
      <Wrapper>
        <Title variant='h6'>Additional Sizes & Colors {variants?.length ? `(${variants.length})` : null}</Title>
      </Wrapper>
      {loading
        ? Array(2)
            .fill(null)
            .map(() => <SkuTile loading={true} />)
        : variants?.length ? variants.map((item) => {
              const skuInfo = getSkuData(item);
              return (
                <SkuTile
                  skuInfo={skuInfo}
                  skuAvailabilityLoading={skuAvailabilityLoading}
                  skuAvailabilityError={skuAvailabilityError}
                  handleClick={(id) => history.push(`/product-details/${id}`)}
                />
              );
            }) : 
            <SkuError {...skuErrorMessages.productVariants} />
            // <Typography h1 textAlign="center" marginTop={5} >Product variants not available</Typography>
          }
    </PageContainer>
  );
};

export default ProductVariants;
