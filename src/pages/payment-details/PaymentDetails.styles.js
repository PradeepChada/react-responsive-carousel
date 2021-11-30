import { styled } from '@mui/styles';
import { colors, styles, font } from '../../utils/themeUtils';
import { Box } from '@mui/system';
import { Container } from '@mui/material';

export const PageContainer = styled(Container)({
  display: styles.display.flex,
  flexDirection: 'column',
  justifyContent: styles.justify.between,
  padding: styles.padding[3],
  height: '100%',
});
export const PaymentInfo = styled(Box)({
  padding: `0 ${styles.padding[3]}`,
  '& > div:nth-child(1)': {
    display: styles.display.flex,
    flexDirection: 'row',
    justifyContent: styles.justify.between,
    alignItems: styles.align.end,
    paddingBottom: '1.375rem',
    borderBottom: `1px solid ${colors.gray85}`,
    '& p:nth-child(1)': {
      fontSize: font.size[18],
      fontWeight: font.weight[600],
      color: colors.textBlack,
    },
    '& > div': {
      flexDirection: 'column',
      alignItems: styles.align.end,
      '& p:nth-child(1)': {
        fontSize: font.size[12],
        fontWeight: font.weight['normal'],
        color: colors.black,
        textAlign: 'end',
        marginTop: styles.margin[1],
      },
      '& p:nth-child(2)': {
        fontSize: font.size[28],
        fontWeight: font.weight[600],
        color: colors.black,
      },
    },
  },
  '& > div:nth-child(2)': {
    display: styles.display.flex,
    flexDirection: 'row',
    justifyContent: styles.justify.between,
    alignItems: styles.align.center,
    padding: '0.75rem 0',
    borderBottom: `1px solid ${colors.gray85}`,
    '& p:nth-child(1)': {
      fontSize: font.size[14],
      fontWeight: font.weight[600],
      color: colors.textBlack,
      textTransform: 'capitalize',
    },
    '& p:nth-child(2)': {
      fontSize: font.size[14],
      fontWeight: font.weight['normal'],
      color: colors.brandBlue,
      textDecoration: 'underline',
    },
  },
  '& > div:nth-child(3)': {
    display: styles.display.flex,
    flexDirection: 'row',
    justifyContent: styles.justify.between,
    alignItems: styles.align.center,
    padding: '0.75rem 0',
    borderBottom: `1px solid ${colors.gray85}`,
    '& p:nth-child(1)': {
      fontSize: font.size[14],
      fontWeight: font.weight[600],
      color: colors.textBlack,
    },
    '& p:nth-child(2)': {
      fontSize: font.size[14],
      fontWeight: font.weight['normal'],
      color: colors.brandBlue,
      textDecoration: 'underline',
      textTransform: 'capitalize',
    },
  },
  '& > div:nth-child(4)': {
    '& legend': {
      fontSize: font.size[14],
      fontWeight: font.weight[600],
      color: colors.textBlack,
      marginTop: '0.75rem',
    },
    '& span': {
      fontSize: font.size[14],
    },
  },
});

export const OrderSummary = styled(Box)({
  boxSizing: 'border-box',
  width: '100%',
  padding: styles.padding[3],
  backgroundColor: colors.answerBackground,
  marginTop: styles.margin[2],
  '& > p': {
    fontSize: font.size[18],
    fontWeight: font.weight[600],
    color: colors.textBlack,
    marginBottom: styles.margin[3],
  },
  '& .subtotal-text': {
    display: styles.display.flex,
    justifyContent: styles.justify.between,
    marginBottom: styles.margin[1],
    '& > p': {
      fontSize: font.size[14],
      fontWeight: font.weight[600],
      color: colors.black,
    },
  },
  '& .discounts-text': {
    display: styles.display.flex,
    justifyContent: styles.justify.between,
    marginBottom: styles.margin[1],
    '& > p:nth-child(1)': {
      fontSize: font.size[14],
      fontWeight: font.weight['normal'],
      color: colors.orderSummaryTextFontColor,
    },
    '& > p:nth-child(2)': {
      fontSize: font.size[14],
      fontWeight: font.weight['normal'],
      color: colors.red,
    },
  },
  '& .tax-text': {
    display: styles.display.flex,
    justifyContent: styles.justify.between,
    marginBottom: '1.625rem',
    '& > p': {
      fontSize: font.size[14],
      fontWeight: font.weight['normal'],
      color: colors.orderSummaryTextFontColor,
    },
  },
  '& .total-price-text': {
    display: styles.display.flex,
    justifyContent: styles.justify.between,
    marginBottom: styles.margin[3],
    alignItems: styles.align.center,
    '& > p:nth-child(1)': {
      fontSize: font.size[14],
      fontWeight: font.weight[600],
      color: colors.black,
    },
    '& > p:nth-child(2)': {
      fontSize: font.size[38],
      fontWeight: font.weight[600],
      color: colors.textBlack,
    },
  },
  '& .pay-button': {
    height: '3rem',
    display: 'flex',
    flexGrow: '1',
    justifyContent: styles.justify.center,
    alignItems: styles.align.center,
    backgroundColor: colors.lightBlue,
    color: colors.white,
    fontSize: font.size[14],
    fontWeight: font.weight[600],
    borderRadius: '4px',
  },
});
