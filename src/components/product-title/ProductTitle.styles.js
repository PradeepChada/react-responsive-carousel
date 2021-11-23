import { Typography } from '@mui/material';
import { styled } from '@mui/styles';
import { colors } from '../../utils/themeUtils';

export const Title = styled(Typography)({
  textTransform: 'capitalize',
});

export const RatingCount = styled('span')({
  color: colors.black40,
  fontSize: '0.75rem',
  marginLeft: '0.5rem',
});

export const SkuNumber = styled('span')({
  color: colors.selectGray,
  fontSize: '0.75rem',
});
