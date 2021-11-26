import { Typography } from '@mui/material';
import { styled } from '@mui/styles';
import { Box } from '@mui/system';
import { colors } from '../../utils/themeUtils';
import ChevronRight from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const boxSizing = 'border-box';
const spaceBetween = 'space-between';

export const BoxWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1rem 1rem 0 1rem',
  '& .cart-items-container': {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
});

export const TextWrapper = styled(Box)({
  width: '271px',
  marginTop: '1.875rem',
});

export const Title = styled(Typography)({
  fontSize: '1.125rem',
  fontWeight: '700',
  color: colors.textBlack,
});

export const Description = styled(Typography)({
  fontSize: '1rem',
  fontWeight: '400',
  textAlign: 'center',
  color: colors.textBlack,
});

export const CartContainer = styled(Box)({
  boxSizing: boxSizing,
  position: 'fixed',
  bottom: '0',
  width: '100%',
  backgroundColor: colors.white,
  borderTop: `1px solid ${colors.gray85}`,
  '& .order-discount-container': {
    height: '40px',
    display: 'flex',
    justifyContent: spaceBetween,
    boxSizing: boxSizing,
    padding: '0.75rem 1rem',
  },
  '& .order-summary-container': {
    flexDirection: 'column',
    boxSizing: boxSizing,
    backgroundColor: colors.bgGray,
    padding: '0.75rem 1rem 0 1rem',
    height: '135px',
    transition: 'all 1s',
    '& .order-summary-text': {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      color: colors.black,
    },
    '& .subtotal-text': {
      display: 'flex',
      justifyContent: spaceBetween,
      fontSize: '0.875rem',
      fontWeight: 'bold',
      color: colors.black,
      marginTop: '1rem',
      '& > p': {
        fontWeight: 'bold',
        color: colors.black,
      },
    },
    '& .discounts-text': {
      display: 'flex',
      justifyContent: spaceBetween,
      fontSize: '0.875rem',
      fontWeight: 'normal',
      color: colors.black90,
      marginTop: '.25rem',
    },
    '& .tax-text': {
      display: 'flex',
      justifyContent: spaceBetween,
      fontSize: '0.875rem',
      fontWeight: 'normal',
      color: colors.black90,
      marginTop: '0.25rem',
    },
  },
  '& .order-discount-text': {
    fontSize: '0.875rem',
    color: colors.textBlack,
    fontWeight: '700',
  },
  '& .total-price-container': {
    boxSizing: boxSizing,
    height: '70px',
    padding: '0 1rem',
    display: 'flex',
    justifyContent: spaceBetween,
    backgroundColor: colors.bgGray,
  },
  '& .cart-total-price': {
    fontSize: '1.75rem',
    color: colors.black,
  },
  '& .total-price-text': {
    fontSize: '0.75rem',
    color: colors.black,
    marginTop: '0.5rem',
  },
});

export const RightArrow = styled(ChevronRight)({
  color: colors.brandBlue,
});

export const DownArrow = styled(KeyboardArrowDownIcon)({
  color: colors.brandBlue,
  cursor: 'pointer',
  marginTop: '0.5rem',
});

export const UpArrow = styled(KeyboardArrowUpIcon)({
  color: colors.brandBlue,
  cursor: 'pointer',
  marginTop: '0.5rem',
});

export const ErrorWrapper = styled(Box)({
  '& div:first-child': {
    flexDirection: 'row',
    padding: '1rem 0 1rem 0.375rem',
    borderBottom: `1px solid ${colors.gray85}`,
    '& svg': {
      margin: '0',
      width: '38px',
      height: '38px',
      marginRight: '0.875rem',
    },
    '& p:nth-child(1)': {
      textAlign: 'start',
    },
    '& p:nth-child(2)': {
      textAlign: 'start',
    },
  },
});
export const PayButton = styled(Box)({
  width: '165px',
  height: '43px',
  fontWeight: 'bold',
  borderRadius: '4px',
  backgroundColor: (props) =>
    props.disable ? colors.textBlack : colors.lightBlue,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '0.875rem',
  color: colors.white,
  marginTop: '0.875rem',
  letterSpacing: '1px',
  opacity: (props) => (props.disable ? '0.5' : '1'),
});
