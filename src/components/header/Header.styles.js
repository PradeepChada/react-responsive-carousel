import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/styles';
import { colors } from './../../utils/themeUtils';

export const Logo = styled('img')({
  height: 21,
});

export const StyledAppBar = styled(AppBar)({
  backgroundColor: colors.white,
  marginBottom: '0.25rem',
  '& .MuiToolbar-regular': {
    '& .home-icon': {
      position: 'absolute',
      margin: 'auto',
      cursor: 'pointer',
    },
  },
});

export const TakeCheckout = styled(Typography)({
  fontSize: '1.375rm',
  fontWeight: 'bold',
  color: colors.black,
});

export const CancelOrderButton = styled(Typography)({
  fontSize: '0.75rem',
  color: colors.brandBlue,
  textDecoration: 'underline',
});
