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
  padding: '16px 15px 0px 15px',
});

export const ErrorWrapper = styled(Box)({
  padding: '29px 0px',
});

export const TextWrapper = styled(Box)({
  width: '271px',
  marginTop: '30px',
});

export const Title = styled(Typography)({
  fontSize: '22px',
  lineHeight: '33px',
  fontWeight: '700',
  color: colors.fontColor,
});

export const Description = styled(Typography)({
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: '400',
  textAlign: 'center',
  color: colors.fontColor,
});

export const CartContainer = styled(Box)({
  boxSizing: 'border-box',
  position: 'fixed',
  bottom: '0',
  width: '100%',
  borderTop: `1px solid ${colors.gray85}`,
  '& .order-discount-container': {
    height: '40px',
    display: 'flex',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    padding: '11px 15px',
  },
  '& .order-summary-container': {
    flexDirection: 'column',
    boxSizing: 'border-box',
    backgroundColor: colors.lightBackground,
    padding: '12px 15px 0px 15px',
    height: '135px',
    transition: 'all 1s',
    '& .order-summary-text': {
      fontSize: '18px',
      fontWeight: 'bold',
      color: colors.black,
    },
    '& .subtotal-text': {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '14px',
      fontWeight: 'bold',
      color: colors.black,
      marginTop: '16px',
    },
    '& .discounts-text': {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '14px',
      fontWeight: 'normal',
      color: colors.orderSummaryTextFontColor,
      marginTop: '4px',
    },
    '& .tax-text': {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: '14px',
      fontWeight: 'normal',
      color: colors.orderSummaryTextFontColor,
      marginTop: '4px',
    },
  },
  '& .order-discount-text': {
    fontSize: '14px',
    color: colors.fontColor,
    fontWeight: '700',
  },
  '& .total-price-container': {
    boxSizing: 'border-box',
    height: '70px',
    padding: '0px 15px',
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor: colors.lightBackground,
  },
  '& .cart-total-price': {
    fontSize: '27px',
    color: colors.black,
  },
  '& .total-price-text': {
    fontSize: '12px',
    color: colors.black,
    marginTop: '7px',
  },
  '& .pay-button': {
    width: '165px',
    height: '43px',
    borderRadius: '4px',
    backgroundColor: colors.fontColor,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '14px',
    color: colors.white,
    marginTop: '13px',
  },
});

export const RightArrow = styled(ChevronRight)({
  color: colors.primary,
});

export const DownArrow = styled(KeyboardArrowDownIcon)({
  color: colors.primary,
  cursor: 'pointer',
  marginTop: '7px',
});

export const UpArrow = styled(KeyboardArrowUpIcon)({
  color: colors.primary,
  cursor: 'pointer',
  marginTop: '7px',
});
