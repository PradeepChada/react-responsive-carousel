import { styled } from '@mui/styles';
import { Container, Typography, Box } from '@mui/material';
import { colors, styles, font } from '../../utils/themeUtils';

export const PageContainer = styled(Container)({
  padding: `0.625rem ${styles.margin[3]}`,
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
  minHeight: '20rem',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});

export const NoContent = styled(Typography)({
  fontSize: font.size[14],
  color: colors.selectGray,
});
