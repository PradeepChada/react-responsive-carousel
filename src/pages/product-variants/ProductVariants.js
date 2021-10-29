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
  NoContent
} from './ProductVariants.styles';
import { getSkuPrice, getQtyInStore } from './../../utils/skuHelpers';
import SkuError from '../../components/sku-error/SkuError';
import config, { getConfig } from './../../config';
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

  useEffect(() => {
    dispatch(fetchSkuVariants(match?.params?.defaultProduct, 49));
  }, [dispatch, match?.params?.defaultProduct]);

  useEffect(() => {
    if (skuData?.id !== Number(match?.params?.id)) dispatch(fetchSkuDetails(match?.params?.id, 49, false));
  }, [dispatch, match?.params?.id, skuData]);

  const getSkuData = (item) => {
    const ASSET_URL = getConfig('asset_base_url');
    const skuInfo = {
      image: `${ASSET_URL}${item.mediaList?.[0]?.url}`,
      price: getSkuPrice(item?.productPrice, 'maxRetailPrice'),
      name: item.name,
      qtyAvailableAtStore: getQtyInStore(
        skuAvailability?.inventoryEstimates,
        skuAvailability?.requestStoreNumber
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
  const variants = skuVariants?.skus?.filter((o) => o.id !== match?.params?.id);
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
        <Title variant='h6' noContent={variants?.length === 0}>
          Additional Sizes & Colors{' '}
          {variants?.length ? `(${variants.length})` : null}
        </Title>
      {/* <Wrapper> */}
      {
        loading ? (
          Array(2)
            .fill(null)
            .map((_, i) => <SkuTile key={`key${i}`} loading={true} />)
        ) : variants?.length ? (
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
        <NoContent >{skuErrorMessages.productVariants.title}</NoContent>
          // <SkuError {...skuErrorMessages.productVariants} />
        )
      }
      {/* </Wrapper> */}
    </PageContainer>
  );
};

export default ProductVariants;
