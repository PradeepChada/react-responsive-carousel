import React from 'react';
import PropTypes from 'prop-types';
import { TextWrapper, Title, Description, ErrorIcon } from './SkuError.styles';
import { Box } from '@mui/system';

const SkuError = ({ title, description }) => {
  return (
    <TextWrapper display='flex' flexDirection='column' alignItems='center'>
      <ErrorIcon />
      <Box textAlign='center'>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </Box>
    </TextWrapper>
  );
};

export default SkuError;

SkuError.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};
