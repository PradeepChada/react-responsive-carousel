import { Rating, Typography } from '@mui/material';
import { styled } from '@mui/styles';
import { colors } from '../../utils/themeUtils';

export const Title = styled(Typography)({
  lineHeight: '20px'
});

export const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    '& svg': {
      color: colors.starFilled,
    },
  },
  '& .MuiRating-iconEmpty': {
    '& svg': {
      color: colors.starEmpty,
      fill: colors.starEmpty,
      // backgroundColor: colors.starEmpty
    },
  },
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
