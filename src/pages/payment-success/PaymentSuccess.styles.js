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
    marginTop: 0,
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
  fontWeight: font.weight[600],
  color: colors.black,
  letterSpacing: 0.2,
  marginBottom: styles.margin[1],
});

export const Price = styled(Typography)({
  fontSize: '2.25rem',
  fontWeight: font.weight[600],
  textAlign: 'center',
  lineHeight: '39px',
});
