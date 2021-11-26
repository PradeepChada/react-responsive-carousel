import { styled } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { colors, font } from '../../utils/themeUtils';

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
  marginBottom: '1rem',
});

export const Title = styled(Typography)({
  fontSize: (props) => sizes[props.size].title,
  fontWeight: '700',
  color: colors.textBlack,
});

export const Description = styled(Typography)({
  fontSize: '1rem',
  fontWeight: '400',
  textAlign: 'center',
  color: colors.textBlack,
});
