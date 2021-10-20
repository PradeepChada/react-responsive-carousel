import React from 'react';
import { Box } from '@mui/material';
import { Wrapper, Icon, Chevron, Title } from './HomeTile.styles';

const HomeTile = ({ icon, title, handleClick }) => {
  return (
    <Wrapper onClick={handleClick}>
      <Box display='flex' alignItems='center'>
        <Icon src={icon} alt='Scan Barcode' />
        <Title>{title}</Title>
      </Box>
      <Chevron />
    </Wrapper>
  );
};

export default HomeTile;
