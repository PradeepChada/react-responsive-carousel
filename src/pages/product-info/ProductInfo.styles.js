import { styled } from '@mui/styles';
import { Container, Typography, Box } from '@mui/material';
import { colors } from './../../utils/themeUtils';

export const PageContainer = styled(Container)({
  padding: '0.625rem 1rem',
});

export const Wrapper = styled(Box)({
  marginTop: '1.5rem',
  marginBottom: '1rem',
  borderBottom: `1px solid ${colors.gray85}`,
  '& ul': {
    paddingLeft: '1.75rem',
    '& li': {
      color: colors.black,
      fontSize: '0.875rem',
    },
  },
});

export const Title = styled(Typography)({
  fontSize: '1.125rem',
  fontWeight: 600,
  marginBottom: '1rem',
});

export const ErrorWrapper = styled(Box)({
  padding: '1.875rem 0',
});
