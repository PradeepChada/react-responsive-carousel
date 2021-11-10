import { Rating } from '@mui/material';
import { styled } from '@mui/styles';
import { colors } from '../../utils/themeUtils';

export const StyledRating = styled(Rating)({
    '& svg': {
      color: colors.ratingColor,
    },
  '& .empty-rating': {
    color: colors.gray85,
  },
});
