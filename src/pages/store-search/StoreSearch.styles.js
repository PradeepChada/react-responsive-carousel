import { styled } from '@mui/styles';
import { Box, Grid } from '@mui/material';
import { styles, colors, font } from '../../utils/themeUtils';

export const PageContainer = styled(Box)({
  height: '100%',
  justifyContent: styles.justify.between,
  padding: styles.padding[3],
  boxSizing: 'border-box',
});

export const ContentWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
  '& .tab-content': {
    height: '100%',
    marginTop: 0,
    '& .MuiGrid-item': {
      '&:first-child': {
        flexGrow: 1,
      },
      '&:last-child': {
        alignSelf: 'flex-end',
      },
    },
  },
  '& .MuiTabs-flexContainer': {
    '& button': {
      border: 'none',
      '&:first-child': {
        marginRight: 1,
      },
      '&:last-child': {
        marginLeft: 1,
      },
    },
  },
  '& .MuiAlert-root': {
    marginTop: styles.margin[3],
    height: '2rem',
    padding: `0 ${styles.padding[2]}`,
    fontSize: font.size[14],
    display: 'flex',
    alignItems: 'center',
    color: colors.danger,
    border: `1px solid rgba(223, 46, 47, 0.1)`,
    backgroundColor: '#FDF4F5',
  },
  '& .MuiFormHelperText-root': {
    '&.Mui-error': {
      color: colors.danger,
      marginLeft: styles.margin[0],
      fontSize: font.size[14],
    },
  },
});

export const StoreList = styled(Grid)({
  '& .selected-store': {
    '& h5': {
      fontSize: font.size[20],
      lineHeight: 1.5,
      fontWeight: font.weight[600],
    },
    '& h6': {
      lineHeight: 1.5,
      fontSize: font.size[12],
    },
  },
  '& .store-tile': {
    padding: `${styles.padding[4]} ${styles.padding[0]}`,
    borderBottom: `1px solid ${colors.gray85}`,
    '&:last-child': {
      borderBottom: 'none',
    },
    '& button': {
      fontWeight: font.weight[600],
      padding: `0 ${styles.padding[2]}`,
    },
  },
});
