import { Container, Button } from '@mui/material';
import { styled } from '@mui/styles';
import { font, styles } from '../../utils/themeUtils';

export const PageContainer = styled(Container)({
  padding: '1rem',
  height: '100%',
  '& .error-wrapper': {
    marginBottom: styles.margin[5],
  },
});

export const Buttoncancel = styled(Button)({
  color: 'inherit',
  fontWeight: font.weight[600],
  marginTop: styles.margin[2],
  height: '3rem',
});
