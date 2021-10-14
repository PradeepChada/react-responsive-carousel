import React from 'react';
import { Box, Typography } from '@mui/material';
import { Wrapper, Icon, Chevron } from './HomeTile.styles';

const HomeTile = ({ icon, title, handleClick }) => {
  return (
    <Wrapper onClick={handleClick}>
      <Box display='flex' alignItems='center'>
        <Icon src={icon} alt='Scan Barcode' />
        <Typography>{title}</Typography>
      </Box>
      <Chevron />
    </Wrapper>
  );
};

export default HomeTile;
