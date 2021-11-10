import React from 'react';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import { RatingCount, SkuNumber, Title } from './ProductTitle.styles';
import RatingsBar from '../ratings-bar/RatingsBar';
import { Skeleton } from '@mui/material';

const ProductTitle = ({ title, skuId, rating, ratingCount, ratingLoading }) => {
  return (
    <Box>
      <Title fontWeight={600}>{title}</Title>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        {ratingLoading ? (
          <Skeleton width={100} />
        ) : (
          <Box display='flex' alignItems='center'>
            <RatingsBar rating={rating} />
            <RatingCount>{ratingCount}</RatingCount>
          </Box>
        )}
        <SkuNumber>SKU: #{skuId}</SkuNumber>
      </Box>
    </Box>
  );
};

export default ProductTitle;

ProductTitle.propTypes = {
  title: PropTypes.string,
  rating: PropTypes.number,
  ratingCount: PropTypes.number,
  skuId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  ratingLoading: PropTypes.bool,
};

ProductTitle.defaultPropas = {
  ratingCount: 0,
  rating: 0,
  title: '',
};
