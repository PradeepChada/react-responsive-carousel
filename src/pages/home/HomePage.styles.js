import { styled } from '@mui/styles';
import { Container } from '@mui/material';
import { styles } from '../../utils/themeUtils';
export const PageContainer = styled(Container)({
  padding: `${styles.margin[4]} ${styles.margin[3]}`,
  '& .inventory-tile': {
    '& img': {
      marginLeft: styles.margin[1],
    },
  },
});
