import { styled } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { colors, styles, font } from '../../utils/themeUtils';
import { Container } from '@mui/material';

export const Wrapper = styled(Container)({
  padding: `0.75rem ${styles.padding[3]}`,
});

export const TextWrapper = styled(Box)({
  width: '271px',
  marginTop: '1.875rem',
  marginLeft: styles.margin['auto'],
  marginRight: styles.margin['auto'],
});

export const Title = styled(Typography)({
  fontSize: font.size[22],
  fontWeight: font.weight[700],
  color: colors.textBlack,
});

export const Description = styled(Typography)({
  fontSize: font.size[16],
  fontWeight: font.weight[400],
  textAlign: 'center',
  color: colors.textBlack,
});

export const ErrorWrapper = styled(Box)({
  padding: '1.875rem 0',
  '& p[error-title="Search Malfunction"] + p': {
    padding: '0 4rem',
  },
});

export const SKUMalfunctionWrapper = styled(Box)({
  marginTop: '1.875rem',
});

export const ErrorIconWrapper = styled(ErrorOutlineIcon)({
  color: colors.red,
  width: '40px',
  height: '40px',
  marginBottom: styles.margin[4],
});

export const SKUMalfunctionText = styled(Typography)({
  fontSize: font.size[22],
  color: colors.textBlack,
  fontWeight: font.weight[700],
});

export const SKUMalfunctionDescription = styled(Typography)({
  fontSize: font.size[16],
  color: colors.textBlack,
  fontWeight: font.weight[400],
  textAlign: 'center',
  width: '200px',
});

export const UnknownErrorWrapper = styled(Box)({
  marginTop: '1.875rem',
});

export const UnknownErrorText = styled(Typography)({
  fontSize: font.size[22],
  color: colors.textBlack,
  fontWeight: font.weight[700],
});

export const UnknownErrorDescription = styled(Typography)({
  fontSize: font.size[16],
  color: colors.textBlack,
  fontWeight: font.weight[400],
  textAlign: 'center',
  width: '200px',
});
