import { styled } from '@mui/styles';
import { Container, Grid } from '@mui/material';
import { colors, font, styles } from '../../utils/themeUtils';

export const PageContainer = styled(Container)({
  padding: styles.padding[0],
  '& .home-content': {
    padding: `${styles.margin[0]} ${styles.margin[3]}`,
    '& .profile-name': {
      marginBottom: styles.margin[3],
      fontWeight: font.weight[600],
      fontSize: font.size[26],
      '& button': {
        marginLeft: styles.margin[3],
        fontSize: font.size[12],
        textDecoration: 'underline',
      },
    },
    '& .inventory-tile': {
      '& img': {
        marginLeft: styles.margin[1],
      },
    },
  },
});

export const LocationTile = styled(Grid)({
  backgroundColor: colors.lightGray,
  marginBottom: styles.margin[3],
  fontWeight: font.weight[600],
  padding: `${styles.padding[3]} ${styles.padding[3]}`,
  marginTop: `-${styles.margin[1]}`,
  '& button': {
    padding: 0,
    fontWeight: font.weight[600],
    minWidth: 'unset',
  },
  '& .MuiAlert-root': {
    marginTop: styles.margin[1],
  },
});
