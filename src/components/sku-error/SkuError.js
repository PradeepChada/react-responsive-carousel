import React from 'react';
import PropTypes from 'prop-types';
import { TextWrapper, Title, Description, ErrorIcon } from './SkuError.styles';

const SkuError = ({ title, description }) => {
    return (
        <TextWrapper display='flex' flexDirection='column' alignItems='center'>
            <ErrorIcon />
            <Title>{title}</Title>
            {description && <Description>
                {description}
            </Description>}
        </TextWrapper>
    );
};


export default SkuError;

SkuError.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string
}