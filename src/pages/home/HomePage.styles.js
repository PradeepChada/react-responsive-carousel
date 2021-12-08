import { styled } from '@mui/styles';
import { Container, Grid } from '@mui/material';
import { colors, font, styles } from '../../utils/themeUtils';
export const PageContainer = styled(Container)({
  padding: styles.padding[0],
  '& .home-content': {
    padding: `${styles.margin[0]} ${styles.margin[3]}`,
    '& .inventory-tile': {
      '& img': {
        marginLeft: styles.margin[1],
      },
    },
  },
});

export const LocationTile = styled(Grid)({
  height: '3rem',
  justifyContent: styles.justify.between,
  alignItems: styles.align.center,
  display: styles.display.flex,
  backgroundColor: colors.lightGray,
  marginBottom: styles.margin[3],
  fontWeight: font.weight[600],
  padding: `${styles.padding[0]} ${styles.padding[3]}`,
  marginTop: `-${styles.margin[1]}`,
  '& button': {
    padding: 0,
    fontWeight: font.weight[600],
    minWidth: 'unset',
  },
});
