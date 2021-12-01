import { styled } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { colors, font, styles } from '../../utils/themeUtils';

const sizes = {
  medium: {
    icon: 48,
    title: font.size[22],
  },
  large: {
    icon: 64,
    title: font.size[26],
  },
};

export const TextWrapper = styled(Box)({
  // width: '260px',
  // marginTop: '30px',
});

export const ErrorIcon = styled(ErrorOutlineIcon)({
  color: colors.red,
  width: (props) => sizes[props.size].icon,
  height: (props) => sizes[props.size].icon,
  marginBottom: styles.margin[3],
});

export const Title = styled(Typography)({
  fontSize: (props) => sizes[props.size].title,
  fontWeight: font.weight[700],
  color: colors.textBlack,
});

export const Description = styled(Typography)({
  fontSize: font.size[16],
  fontWeight: font.weight[400],
  textAlign: 'center',
  color: colors.textBlack,
});
