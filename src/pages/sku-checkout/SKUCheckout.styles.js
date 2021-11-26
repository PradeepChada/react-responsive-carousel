import { Typography } from '@mui/material';
import { styled } from '@mui/styles';
import { Box } from '@mui/system';
import { colors, styles, font } from '../../utils/themeUtils';
import ChevronRight from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const boxSizing = 'border-box';

export const BoxWrapper = styled(Box)({
  display: styles.display.flex,
  flexDirection: 'column',
  alignItems: styles.align.center,
  padding: `${styles.padding[3]} ${styles.padding[3]} 0 ${styles.padding[3]}`,
  '& .cart-items-container': {
    display: styles.display.flex,
    flexDirection: 'column',
    width: '100%',
  },
});

export const TextWrapper = styled(Box)({
  width: '271px',
  marginTop: '1.875rem',
});

export const Title = styled(Typography)({
  fontSize: font.size[18],
  fontWeight: font.weight[700],
  color: colors.textBlack,
});

export const Description = styled(Typography)({
  fontSize: font.size[16],
  fontWeight: font.weight[400],
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
    display: styles.display.flex,
    justifyContent: styles.justify.between,
    boxSizing: boxSizing,
    padding: `0.75rem ${styles.padding[3]}`,
  },
  '& .order-summary-container': {
    flexDirection: 'column',
    boxSizing: boxSizing,
    backgroundColor: colors.bgGray,
    padding: `0.75rem ${styles.padding[3]} 0 ${styles.padding[3]}`,
    height: '135px',
    transition: 'all 1s',
    '& .order-summary-text': {
      fontSize: font.size[18],
      fontWeight: font.weight['bold'],
      color: colors.black,
    },
    '& .subtotal-text': {
      display: styles.display.flex,
      justifyContent: styles.justify.between,
      fontSize: font.size[14],
      fontWeight: font.weight['bold'],
      color: colors.black,
      marginTop: styles.margin[3],
      '& > p': {
        fontWeight: 'bold',
        color: colors.black,
      },
    },
    '& .discounts-text': {
      display: styles.display.flex,
      justifyContent: styles.justify.between,
      fontSize: font.size[14],
      fontWeight: font.weight['normal'],
      color: colors.black90,
      marginTop: styles.margin[1],
    },
    '& .tax-text': {
      display: styles.display.flex,
      justifyContent: styles.justify.between,
      fontSize: font.size[14],
      fontWeight: font.weight['normal'],
      color: colors.black90,
      marginTop: styles.margin[1],
    },
  },
  '& .order-discount-text': {
    fontSize: font.size[14],
    color: colors.textBlack,
    fontWeight: font.weight[700],
  },
  '& .total-price-container': {
    boxSizing: boxSizing,
    height: '70px',
    padding: `0 ${styles.padding[3]}`,
    display: styles.display.flex,
    justifyContent: styles.justify.between,
    backgroundColor: colors.bgGray,
  },
  '& .cart-total-price': {
    fontSize: font.size[28],
    color: colors.black,
  },
  '& .total-price-text': {
    fontSize: font.size[12],
    color: colors.black,
    marginTop: styles.margin[2],
  },
});

export const RightArrow = styled(ChevronRight)({
  color: colors.brandBlue,
});

export const DownArrow = styled(KeyboardArrowDownIcon)({
  color: colors.brandBlue,
  cursor: 'pointer',
  marginTop: styles.margin[2],
});

export const UpArrow = styled(KeyboardArrowUpIcon)({
  color: colors.brandBlue,
  cursor: 'pointer',
  marginTop: styles.margin[2],
});

export const ErrorWrapper = styled(Box)({
  '& div:first-child': {
    flexDirection: 'row',
    padding: `${styles.padding[3]} 0 ${styles.padding[3]} 0.375rem`,
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
  display: styles.display.flex,
  justifyContent: styles.justify.center,
  alignItems: styles.align.center,
  fontSize: font.size[14],
  color: colors.white,
  marginTop: '0.875rem',
  letterSpacing: '1px',
  opacity: (props) => (props.disable ? '0.5' : '1'),
});
