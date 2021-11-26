import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/styles';
import { colors, font, styles } from './../../utils/themeUtils';

export const Logo = styled('img')({
  height: 21,
});

export const StyledAppBar = styled(AppBar)({
  backgroundColor: colors.white,
  marginBottom: styles.margin[1],
  '& .MuiToolbar-regular': {
    '& .home-icon': {
      position: 'absolute',
      margin: styles.margin['auto'],
      cursor: 'pointer',
    },
  },
});

export const TakeCheckout = styled(Typography)({
  fontSize: font.size[22],
  fontWeight: font.weight['bold'],
  color: colors.black,
});

export const CancelOrderButton = styled(Typography)({
  fontSize: font.size[12],
  color: colors.brandBlue,
  textDecoration: 'underline',
  position: 'absolute',
  right: 16,
});
