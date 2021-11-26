import { Typography } from '@mui/material';
import { styled } from '@mui/styles';
import { colors, font, styles } from '../../utils/themeUtils';

export const Title = styled(Typography)({
  textTransform: 'capitalize',
});

export const RatingCount = styled('span')({
  color: colors.black40,
  fontSize: font.size[12],
  marginLeft: styles.margin[2],
});

export const SkuNumber = styled('span')({
  color: colors.selectGray,
  fontSize: font.size[12],
});
