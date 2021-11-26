import { styled } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { colors, font, styles } from '../../utils/themeUtils';

export const TextWrapper = styled(Box)({
  // width: '260px',
  // marginTop: '30px',
});

export const ErrorIcon = styled(ErrorOutlineIcon)({
  color: colors.red,
  width: '48px',
  height: '48px',
  marginBottom: styles.margin[3],
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
