import { Typography } from '@mui/material';
import { styled } from '@mui/styles';
import { Box } from '@mui/system';
import { colors } from '../../utils/themeUtils';
import ChevronRight from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

export const BoxWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '1rem 1rem 0px 1rem',
  '& .cart-items-container': {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
});

export const TextWrapper = styled(Box)({
  width: '271px',
  marginTop: '1.8rem',
});

export const Title = styled(Typography)({
  fontSize: '1.3rem',
  lineHeight: '33px',
  fontWeight: '700',
  color: colors.fontColor,
});

export const Description = styled(Typography)({
  fontSize: '1rem',
  fontWeight: '400',
  textAlign: 'center',
  color: colors.fontColor,
});

export const CartContainer = styled(Box)({
  boxSizing: 'border-box',
  position: 'fixed',
  bottom: '0',
  width: '100%',
  backgroundColor: colors.white,
  borderTop: `1px solid ${colors.gray85}`,
  '& .order-discount-container': {
    height: '40px',
    display: 'flex',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    padding: '0.7rem 1rem',
  },
  '& .order-summary-container': {
    flexDirection: 'column',
    boxSizing: 'border-box',
    backgroundColor: colors.lightBackground,
    padding: '0.7rem 1rem 0px 1rem',
    height: '135px',
    transition: 'all 1s',
    '& .order-summary-text': {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      color: colors.black,
    },
    '& .subtotal-text': {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '0.8rem',
      fontWeight: 'bold',
      color: colors.black,
      marginTop: '1rem',
    },
    '& .discounts-text': {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '0.8rem',
      fontWeight: 'normal',
      color: colors.orderSummaryTextFontColor,
      marginTop: '.2rem',
    },
    '& .tax-text': {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '0.8rem',
      fontWeight: 'normal',
      color: colors.orderSummaryTextFontColor,
      marginTop: '0.2rem',
    },
  },
  '& .order-discount-text': {
    fontSize: '0.8rem',
    color: colors.fontColor,
    fontWeight: '700',
  },
  '& .total-price-container': {
    boxSizing: 'border-box',
    height: '70px',
    padding: '0px 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: colors.lightBackground,
  },
  '& .cart-total-price': {
    fontSize: '1.7rem',
    color: colors.black,
  },
  '& .total-price-text': {
    fontSize: '0.7rem',
    color: colors.black,
    marginTop: '0.5rem',
  },
  '& .pay-button': {
    width: '165px',
    height: '43px',
    borderRadius: '4px',
    backgroundColor: colors.fontColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '0.8rem',
    color: colors.white,
    marginTop: '0.8rem',
  },
});

export const RightArrow = styled(ChevronRight)({
  color: colors.primary,
});

export const DownArrow = styled(KeyboardArrowDownIcon)({
  color: colors.primary,
  cursor: 'pointer',
  marginTop: '0.5rem',
});

export const UpArrow = styled(KeyboardArrowUpIcon)({
  color: colors.primary,
  cursor: 'pointer',
  marginTop: '0.5rem',
});

export const ErrorWrapper = styled(Box)({
  '& div:first-child': {
    flexDirection: 'row',
    padding: '1rem 0px 1rem 0.3rem',
    borderBottom: `1px solid ${colors.gray85}`,
    '& svg': {
      margin: '0px',
      width: '38px',
      height: '38px',
      marginRight: '0.8rem',
    },
    '& p:nth-child(2)': {
      textAlign: 'start',
    },
  },
});
