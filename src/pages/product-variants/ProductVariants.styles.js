import { styled } from '@mui/styles';
import { Container, Typography, Box } from '@mui/material';
import { colors } from '../../utils/themeUtils';

export const PageContainer = styled(Container)({
  padding: '9px 15px',
});

export const Wrapper = styled(Box)({
  marginTop: 24,
  marginBottom: 16,
  // borderBottom: '1px solid #D9D9D9',
});

export const Title = styled(Typography)({
  fontSize: 18,
  lineHeight: '22px',
  fontWeight: 600,
  marginBottom: props => props.noContent ? 8 : 16,
});

export const ErrorWrapper = styled(Box)({
  padding: '29px 45px'
})

export const NoContent = styled(Typography)({
  fontSize: 14,
  lineHeight: '21px',
  color: colors.abbey
})
