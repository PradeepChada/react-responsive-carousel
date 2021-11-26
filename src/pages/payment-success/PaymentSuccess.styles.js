import { styled } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CheckBoxRoundedIcon from '@mui/icons-material/CheckBoxRounded';
import { styles, colors, font } from '../../utils/themeUtils';
export const Wrapper = styled(Box)({
  height: '100%',
  justifyContent: styles.justify.between,
});

export const PaymentWrapper = styled(Box)({
  flexGrow: 1,
  justifyContent: 'center',
});

export const Image = styled('img')({
  height: '40px',
  width: '40px',
  marginBottom: '0.75rem',
});
export const ErrorIcon = styled(CheckBoxRoundedIcon)({
  color: '#128400',
  width: '40px',
  height: '40px',
  marginTop: '30px',
  borderRadius: '80px',
});
export const ContentWrapper = styled(Box)({
  backgroundColor: colors.bgGray,
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  minHeight: 330,
  '& .tab-content': {
    height: '100%',
    '& .MuiGrid-item': {
      '&:first-child': {
        flexGrow: 1,
      },
      '&:last-child': {
        alignSelf: 'flex-end',
      },
    },
  },
  '& .MuiTabs-flexContainer': {
    '& button': {
      border: 'none',
      '&:first-child': {
        marginRight: 1,
      },
      '&:last-child': {
        marginLeft: 1,
      },
    },
  },
});

export const Title = styled(Typography)({
  fontSize: font.size[14],
  lineHeight: '22px',
  fontWeight: '700',
  color: colors.black,
  letterSpacing: 0.2,
  marginBottom: '4px',
});

export const Title2 = styled(Typography)({
  fontSize: '37px',
  fontWeight: '700',
  textAlign: 'center',
  color: '#333337',
  lineHeight: '39px',
});

export const Amount = styled(Typography)({
  fontSize: '37px',
  fontWeight: font.weight[600],
  textAlign: 'center',
  color: '#333337',
  lineHeight: '39px',
});

export const Decoration = styled(Typography)({
  color: '#005DAB',
  fontSize: '14px',
  lineHeight: '18px ',
  marginTop: '17px',
  textDecoration: 'underline',
  letterSpacing: 0.2,
});

export const Description = styled(Typography)({
  fontSize: '27px',
  fontWeight: font.weight[600],
  textAlign: 'center',
  color: '#333337',
  marginTop: '27px',
  paddingLeft: '54px',
  paddingRight: '54px',
});
