import { Typography } from '@mui/material';
import { styled } from '@mui/styles';
import { Box } from '@mui/system';
import { colors } from '../../utils/themeUtils';

export const BoxWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '16px 15px 0px 15px',
});

export const ErrorWrapper = styled(Box)({
  padding: '29px 0px',
});

export const TextWrapper = styled(Box)({
  width: '271px',
  marginTop: '30px',
});

export const Title = styled(Typography)({
  fontSize: '22px',
  lineHeight: '33px',
  fontWeight: '700',
  color: colors.fontColor,
});

export const Description = styled(Typography)({
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: '400',
  textAlign: 'center',
  color: colors.fontColor,
});
