import { Grid, Box } from '@mui/material';
import React from 'react';
import { Wrapper, RatingCount } from './ProductCard.styles';
import RatingsBar from '../../../components/ratings-bar/RatingsBar';

const IMG_BASE_URL =
  'https://cdn-fsly.yottaa.net/55df7e1a2bb0ac7d800040c2/o~f_webp/v~4b.129.0.0/https://www.containerstore.com';

const ProductCard = ({ data, onClickProduct }) => {
  const _renderColorsAvail = () => {
    return (
      <div className='colors-available'>
        {data?.colors
          ?.filter((_, i) => i < 4)
          .map((val) => {
            return (
              <Box className='color-tile' sx={{ backgroundColor: val }}></Box>
            );
          })}
        {data?.colors?.length > 4 && (
          <span className='more-text'>+{data?.colors?.length - 4}</span>
        )}
      </div>
    );
  };

  const _renderStock = () => {
    return (
      <div className={`stock ${data?.quantity ? 'green' : 'red'}`}>
        {data?.quantity ? `${data?.quantity} Available` : 'Out of Stock'}{' '}
      </div>
    );
  };

  return (
    <Wrapper onClick={onClickProduct}>
      <img src={`${IMG_BASE_URL}${data?.image}`} alt='product' />
      <Grid className='content'>
        {_renderColorsAvail()}
        <div className='price'>${data.price?.toFixed(2)}</div>
        <div className='title'>{data?.name}</div>

        <Box className='ratings-wrapper' display='flex' alignItems='center'>
          <RatingsBar rating={data?.rating} />
          <RatingCount>{data?.num_of_ratings}</RatingCount>
        </Box>
        {_renderStock()}
      </Grid>
    </Wrapper>
  );
};

export default ProductCard;
