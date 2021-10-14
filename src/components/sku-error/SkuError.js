import React from 'react';
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