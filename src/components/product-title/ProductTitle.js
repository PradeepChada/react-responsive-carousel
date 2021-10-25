import React from 'react';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import { SkuNumber, Title } from './ProductTitle.styles';

const ProductTitle = ({ title, skuId }) => {
  return (
    <Box>
      <Title fontWeight={600}>{title}</Title>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Box display='flex' alignItems='center'>
          {/* <StyledRating
            name='read-only'
            value={rating}
            size={'small'}
            readOnly
          />
          <RatingCount>{ratingCount}</RatingCount> */}
        </Box>
        <SkuNumber>SKU: #{skuId}</SkuNumber>
      </Box>
    </Box>
  );
};

export default ProductTitle;

ProductTitle.propTypes = {
  title: PropTypes.string,
  skuId: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
}
