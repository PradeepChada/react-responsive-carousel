import AppBar from '@mui/material/AppBar';
import { styled } from '@mui/styles';
import { colors } from './../../utils/themeUtils';

export const Logo = styled('img')({
  height: 21,
});

export const StyledAppBar = styled(AppBar)({
  backgroundColor: colors.white,
  marginBottom: 4,
  '& .MuiToolbar-regular': {
    '& .home-icon': {
      position: 'absolute',
      margin: 'auto',
      cursor: 'pointer',
    },
  },
});
