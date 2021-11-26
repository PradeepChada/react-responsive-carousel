import { colors, font, styles } from './utils/themeUtils';
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
      color: colors.textBlack,
    },
  },
  palette: {
    primary: {
      main: colors.brandBlue,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          height: '3rem',
          fontSize: font.size[14],
        },
        contained: {
          boxShadow: 'none',
          backgroundColor: colors.lightBlue,
          fontWeight: 'bold',
        },
        outlined: {
          borderColor: colors.lightBlue,
          fontWeight: 'bold',
          color: colors.lightBlue,
        },
        text: {
          padding: styles.padding[0],
          height: 'auto',
        },
        sizeSmall: {
          height: '2.5rem',
        },
      },
    },
  },
});

export default theme;
