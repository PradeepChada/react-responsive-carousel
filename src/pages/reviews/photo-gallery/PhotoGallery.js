import React from 'react';
import { Container, Typography, Box, Rating } from '@mui/material';
import { GelleryContainer } from './PhotoGallery.styles';

const PhotoGallery = ({ data = [], handleClick }) => {
  const [firstItem, ...restItems] = data;
  return (
    <GelleryContainer>
      <div
        className='first-image'
        style={{ backgroundImage: `url(${firstItem?.uri})` }}
        onClick={() => handleClick(0, firstItem)}
      />
      <div className='rest-items'>
        {restItems
          .filter((_, i) => i < 4)
          .map((item, i) => {
            return (
              <div
                className='bg-img'
                style={{ backgroundImage: `url(${item?.uri})` }}
                onClick={() => handleClick(i, item)}
              >
                {i === 3 && (
                  <div className='more'>
                    {restItems?.length - 4}+ <br /> More Photos
                  </div>
                )}
              </div>
            );
          })}
      </div>
    </GelleryContainer>
  );
};

export default PhotoGallery;
