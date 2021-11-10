import { Typography } from '@mui/material';
import { styled } from '@mui/styles';

export const Title = styled(Typography)({
  lineHeight: '20px',
  textTransform: 'capitalize',
});

export const RatingCount = styled('span')({
  color: '#999999',
  fontSize: '12px',
  marginLeft: 8,
});

export const SkuNumber = styled('span')({
  color: '#54565B',
  fontSize: '12px',
  lineHeight: '14px',
});
