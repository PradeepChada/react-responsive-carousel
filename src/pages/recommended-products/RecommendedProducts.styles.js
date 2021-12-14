import { styled } from '@mui/styles';
import { Container, Typography, Box } from '@mui/material';
import { colors, styles, font } from '../../utils/themeUtils';

export const PageContainer = styled(Container)({
  padding: `0.625rem ${styles.margin[3]}`,
});

export const Wrapper = styled(Box)({
  marginTop: styles.margin[4],
  marginBottom: styles.margin[3],
});

export const Title = styled(Typography)({
  fontSize: font.size[18],
  fontWeight: font.weight[600],
  marginTop: styles.margin[3],
});

export const SkuList = styled(Box)({
  display: '-webkit-box',
  overflowX: 'auto',
  marginTop: styles.margin[3],
});

export const ErrorWrapper = styled(Box)({
  padding: '1.875rem 0',
});

export const NoContent = styled(Typography)({
  fontSize: font.size[14],
  color: colors.selectGray,
});
