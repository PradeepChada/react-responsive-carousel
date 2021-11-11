import { Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/styles';
import { Box } from '@mui/system';
import { colors } from './../../utils/themeUtils';

export const Logo = styled('img')({
  height: 21,
});

export const IconWrapper = styled(IconButton)({
  position: 'absolute',
  margin: 'auto',
  cursor: 'pointer',
});

export const StyledAppBar = styled(AppBar)({
  backgroundColor: colors.white,
  boxShadow: 'none',
  marginBottom: 4,
});

export const TakeCheckout = styled(Typography)({
  fontSize: '22px',
  fontWeight: 'bold',
  color: colors.black,
});
export const CancelOrderButton = styled(Typography)({
  fontSize: '12px',
  color: colors.primary,
  textDecoration: 'underline',
});
