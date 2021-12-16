import { styled } from '@mui/styles';
import { Container, Typography, Box } from '@mui/material';
import { colors, styles, font } from '../../utils/themeUtils';

export const PageContainer = styled(Container)({
  padding: `0.625rem ${styles.margin[3]}`,
  "& .css-18h73ui p:nth-of-type(3)":{
    marginTop:"0.75rem"
  },
  "& .css-18h73ui p:nth-of-type(4)":{
    marginTop:"1.875rem"
  }
});

export const Wrapper = styled(Box)({
  marginTop: styles.margin[4],
  marginBottom: styles.margin[3],
});

export const Title = styled(Typography)({
  fontSize: font.size[18],
  fontWeight: font.weight[600],
  marginTop: '1.625rem',
  marginBottom: (props) =>
    props.noContent ? styles.margin[2] : styles.margin[3],
});

export const ErrorWrapper = styled(Box)({
  padding: '1.875rem 0',
});

export const NoContent = styled(Typography)({
  fontSize: font.size[14],
  color: colors.selectGray,
});
