import { styled } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { colors } from '../../utils/themeUtils';


export const TextWrapper = styled(Box)({
    // width: '260px',
    // marginTop: '30px',
});

export const ErrorIcon = styled(ErrorOutlineIcon)({
    color: colors.red,
    width: '40px',
    height: '40px',
    marginBottom: '23px',
});

export const Title = styled(Typography)({
    fontSize: '18px',
    fontWeight: '700',
    color: colors.fontColor,
});

export const Description = styled(Typography)({
    fontSize: '16px',
    fontWeight: '400',
    textAlign: 'center',
    color: colors.fontColor,
});
