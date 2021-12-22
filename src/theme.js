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
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: colors.white,
          color: colors.textBlack,
          '& .MuiInputLabel-root': {
            '&.Mui-focused': {
              color: colors.selectGray,
            },
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              // borderColor: colors.selectGray,
            },
            '&:hover fieldset': {
              borderColor: colors.selectGray,
            },
            '&.Mui-focused fieldset': {
              borderColor: colors.selectGray,
              borderWidth: 1,
            },
            '&.Mui-error': {
              '& fieldset': {
                borderColor: colors.danger,
              },
            },
          },
          '& .MuiFormHelperText-root.Mui-error': {
            color: colors.danger,
            marginLeft: 0,
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          backgroundColor: colors.white,
          color: colors.textBlack,
          '& .MuiInputLabel-root': {
            '&.Mui-focused': {
              color: colors.selectGray,
            },
          },
          '& .MuiOutlinedInput-root': {
            '&.Mui-focused': {
              color: colors.selectGray,
              '& fieldset': {
                borderColor: colors.selectGray,
                borderWidth: 1,
              },
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderWidth: 1,
            },
            '&.Mui-error': {
              '& fieldset': {
                borderColor: colors.danger,
                borderWidth: 1,
              },
            },
          },
          '& .MuiFormHelperText-root.Mui-error': {
            color: colors.danger,
            marginLeft: 0,
          },
        },
      },
    },
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
          fontWeight: '600',
        },
        outlined: {
          borderColor: colors.lightBlue,
          fontWeight: '600',
          color: colors.lightBlue,
          '&.no-border': {
            border: 'none',
            color: colors.textBlack,
          },
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
    MuiAlert: {
      styleOverrides: {
        root: {
          padding: `0 ${styles.padding[1]}`,
          fontSize: font.size[14],
          display: 'flex',
          alignItems: 'center',
        },
        standardError: {
          color: colors.danger,
          border: `1px solid rgba(223, 46, 47, 0.1)`,
          backgroundColor: colors.bgDanger,
        },
      },
    },
  },
});

export default theme;
