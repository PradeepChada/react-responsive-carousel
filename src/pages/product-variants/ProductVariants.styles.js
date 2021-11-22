import { styled } from '@mui/styles';
import { Container, Typography, Box } from '@mui/material';
import { colors } from '../../utils/themeUtils';

export const PageContainer = styled(Container)({
  padding: '0.625rem 1rem',
});

export const Wrapper = styled(Box)({
  marginTop: "1.5rem",
  marginBottom: "1rem",
});

export const Title = styled(Typography)({
  fontSize: "1.125rem",
  fontWeight: 600,
  marginTop: "1.625rem",
  marginBottom: props => props.noContent ? "0.5rem" : "1rem",
});

export const ErrorWrapper = styled(Box)({
  padding: '1.875rem 0'
})

export const NoContent = styled(Typography)({
  fontSize: "0.875rem",
  color: colors.selectGray
})
