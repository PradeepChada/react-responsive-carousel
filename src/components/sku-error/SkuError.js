import React from 'react';
import PropTypes from 'prop-types';
import { TextWrapper, Title, Description, ErrorIcon } from './SkuError.styles';
import { Box } from '@mui/system';

const SkuError = ({ title, description, size }) => {
  return (
    <TextWrapper
      display='flex'
      flexDirection='column'
      alignItems='center'
      size={size}
    >
      <ErrorIcon size={size} />
      <Box textAlign='center'>
        <Title size={size}>{title}</Title>
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

SkuError.defaultProps = {
  size: 'medium',
};
