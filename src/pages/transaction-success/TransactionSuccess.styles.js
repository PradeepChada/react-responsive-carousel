import { styled } from '@mui/styles';
import { colors } from './../../utils/themeUtils';
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import { Box } from '@mui/system';
import { Container, Typography, Button } from '@mui/material';

export const TextWrapper = styled(Box)({
  // width: '260px',
  // marginTop: '30px',
  padding: '6.438rem 0',
});

export const SuccessIcon = styled(CheckBoxRoundedIcon)({
  color: '#128400',
  width: '65px',
  height: '65px',
  marginBottom: '1rem',
  borderRadius: '80px',
});

export const Title = styled(Typography)({
  fontSize: '27px',
  fontWeight: '700',
  color: colors.textBlack,
});

export const PageContainer = styled(Container)({
  padding: '1rem',
  height: '100%',
});

export const ButtonDone = styled(Button)({
  fontColor: '#333337',
  color: 'black',
  fontWeight: '700',
  marginBottom: '16px',
  marginTop: '16px',
});
