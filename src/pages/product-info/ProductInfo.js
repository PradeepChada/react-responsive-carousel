import React from 'react';
import { useSelector } from 'react-redux';
import ProductTitle from '../../components/product-title/ProductTitle';
import { PageContainer, Wrapper, Title } from './ProductInfo.styles';

const ProductInfo = ({ match }) => {
  const { loading, skuData, skuAvailability, error } = useSelector(
    (state) => state.sku
  );
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
          <li>Made of clear plastic with silicone gasket</li>
          <li>Airtight lid that comes apart for easy cleaning</li>
          <li>Modular and stackable</li>
        </ul>
      </Wrapper>
    </PageContainer>
  );
};

export default ProductInfo;
