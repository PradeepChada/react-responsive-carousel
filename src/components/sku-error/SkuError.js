import React from 'react';
import PropTypes from 'prop-types';
import { Title, Description, ErrorIcon } from './SkuError.styles';
import { Box } from '@mui/system';

const SkuError = ({ title, description, size }) => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center' size={size}>
      <ErrorIcon size={size} />
      <Box textAlign='center'>
        <Title error-title={title} size={size}>
          {title}
        </Title>
        {description && <Description>{description}</Description>}
      </Box>
    </Box>
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
