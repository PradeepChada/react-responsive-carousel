import { Grid, Box } from '@mui/material';
import React from 'react';
import { Wrapper, RatingCount } from './ProductCard.styles';
import RatingsBar from '../../../components/ratings-bar/RatingsBar';

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
        {data?.quantity ? '10 Available' : 'Out of Stock'}{' '}
      </div>
    );
  };

  return (
    <Wrapper onClick={onClickProduct}>
      <img src={data?.image} alt='product' />
      <Grid className='content'>
        {_renderColorsAvail()}
        <div className='price'>${data.price}</div>
        <div className='title'>{data?.title}</div>

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
