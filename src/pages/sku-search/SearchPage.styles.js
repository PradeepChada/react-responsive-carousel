import { styled } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { colors } from '../../utils/themeUtils';

export const Wrapper = styled(Box)({
  height: '100vh',
  padding: '13px 15px',
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

export const ErrorWrapper = styled(Box)({
  padding: '29px 45px',
});

export const SKUMalfunctionWrapper = styled(Box)({
  marginTop: '29px',
});

export const ErrorIconWrapper = styled(ErrorOutlineIcon)({
  color: colors.red,
  width: '40px',
  height: '40px',
  marginBottom: '23px',
});

export const SKUMalfunctionText = styled(Typography)({
  fontSize: '22px',
  color: colors.fontColor,
  fontWeight: '700',
});

export const SKUMalfunctionDescription = styled(Typography)({
  fontSize: '16px',
  color: colors.fontColor,
  fontWeight: '400',
  textAlign: 'center',
  width: '200px',
});

export const UnknownErrorWrapper = styled(Box)({
  marginTop: '29px',
});

export const UnknownErrorText = styled(Typography)({
  fontSize: '22px',
  color: colors.fontColor,
  fontWeight: '700',
});

export const UnknownErrorDescription = styled(Typography)({
  ontSize: '16px',
  color: colors.fontColor,
  fontWeight: '400',
  textAlign: 'center',
  width: '200px',
});
