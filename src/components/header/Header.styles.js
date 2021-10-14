import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/styles';
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
