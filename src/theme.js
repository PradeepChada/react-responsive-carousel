import { colors, fontSizes } from './utils/themeUtils';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Proxima Nova',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    allVariants: {
      color: colors.fontColor,
    },
  },
  palette: {
    primary: {
      main: colors.primary,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          height: '3rem',
        },
        contained: {
          boxShadow: 'none',
          backgroundColor: colors.lightBlue,
          fontsize: fontSizes.f14,
          fontWeight: 'bold',
        },
        outlined: {
          borderColor: colors.lightBlue,
          fontWeight: 'bold',
          color: colors.lightBlue,
        },
        text: {
          padding: 0,
        },
      },
    },
  },
});

export default theme;
