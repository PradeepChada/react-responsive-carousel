import { styled } from '@mui/styles';
import { Box, Typography } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { colors, styles, font } from './../../../utils/themeUtils';

export const Wrapper = styled(Box)({
  padding: styles.padding[3],
  background: colors.bgGray,
  border: `1px solid ${colors.bgGray}`,
  borderRadius: '4px',
  marginBottom: styles.margin[2],
  display: styles.display.flex,
  alignItems: styles.align.center,
  justifyContent: styles.justify.between,
  cursor: 'pointer',
});

export const Icon = styled('img')({
  marginRight: styles.margin[3],
});

export const Chevron = styled(ChevronRightIcon)(({ theme }) => ({
  color: theme.palette?.primary?.main,
  fontSize: font.size[18],
}));

export const Title = styled(Typography)({});
