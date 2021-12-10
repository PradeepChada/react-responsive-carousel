import React from 'react';
import PropTypes from 'prop-types';
import { Title, Description, ErrorIcon } from './SkuError.styles';
import { Box } from '@mui/system';

const SkuError = ({ title, description, size, descriptionPadding }) => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center' size={size}>
      <ErrorIcon size={size} />
      <Box textAlign='center'>
        <Title size={size}>{title}</Title>
        {description && (
          <Description padding={descriptionPadding}>{description}</Description>
        )}
      </Box>
    </Box>
  );
};

export default SkuError;

SkuError.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  descriptionPadding:PropTypes.string
};

SkuError.defaultProps = {
  size: 'medium',
};
