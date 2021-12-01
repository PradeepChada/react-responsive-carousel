import { styled } from '@mui/styles';
import { colors, font, styles } from '../../utils/themeUtils';
import { Box } from '@mui/system';
import { Container, Typography, Button } from '@mui/material';

export const Content = styled(Box)({
  flexGrow: 1,
  justifyContent: 'center',
});

export const Title = styled(Typography)({
  fontSize: font.size[28],
  fontWeight: font.weight[600],
  color: colors.textBlack,
  marginTop: styles.margin[2],
});

export const PageContainer = styled(Container)({
  padding: '0 1rem 1rem 1rem',
  height: '100%',
});

export const ButtonDone = styled(Button)({
  color: colors.textBlack,
  fontWeight: font.weight[600],
  marginBottom: styles.margin[2],
  marginTop: styles.margin[2],
});
