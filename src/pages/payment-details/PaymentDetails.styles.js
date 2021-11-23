import { styled } from '@mui/styles';
import { colors, styles } from '../../utils/themeUtils';
import { Box } from '@mui/system';

export const PageContainer = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: styles.justify.between,
});
export const PaymentInfo = styled(Box)({
  padding: '0 1rem',
  '& > div:nth-child(1)': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: styles.justify.between,
    alignItems: 'end',
    paddingBottom: '1.375rem',
    borderBottom: `1px solid ${colors.gray85}`,
    '& p:nth-child(1)': {
      fontSize: '1.125rem',
      fontWeight: 600,
      color: colors.fontColor,
    },
    '& > div': {
      flexDirection: 'column',
      alignItems: 'end',
      '& p:nth-child(1)': {
        fontSize: '0.75rem',
        fontWeight: 'normal',
        color: colors.black,
        textAlign: 'end',
        marginTop: '0.25rem',
      },
      '& p:nth-child(2)': {
        fontSize: '1.75rem',
        lineHeight: 1,
        fontWeight: 600,
        color: colors.black,
      },
    },
  },
  '& > div:nth-child(2)': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: styles.justify.between,
    alignItems: 'center',
    padding: '0.75rem 0',
    borderBottom: `1px solid ${colors.gray85}`,
    '& p:nth-child(1)': {
      fontSize: '0.875rem',
      fontWeight: 600,
      color: colors.fontColor,
    },
    '& p:nth-child(2)': {
      fontSize: '0.875rem',
      fontWeight: 'normal',
      color: colors.brandBlue,
      textDecoration: 'underline',
    },
  },
  '& > div:nth-child(3)': {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: styles.justify.between,
    alignItems: 'center',
    padding: '0.75rem 0',
    borderBottom: `1px solid ${colors.gray85}`,
    '& p:nth-child(1)': {
      fontSize: '0.875rem',
      fontWeight: 600,
      color: colors.fontColor,
    },
    '& p:nth-child(2)': {
      fontSize: '0.875rem',
      fontWeight: 'normal',
      color: colors.brandBlue,
      textDecoration: 'underline',
    },
  },
  '& > div:nth-child(4)': {
    '& legend': {
      fontSize: '0.875rem',
      fontWeight: 600,
      color: colors.fontColor,
      marginTop: '0.75rem',
    },
    '& span': {
      fontSize: '0.875rem',
    },
  },
});

export const OrderSummary = styled(Box)({
  boxSizing: 'border-box',
  width: '100%',
  backgroundColor: colors.answerBackground,
  padding: '1rem',
  marginTop: '.5rem',
  '& > p': {
    fontSize: '1.125rem',
    fontWeight: 600,
    color: colors.fontColor,
    marginBottom: '1rem',
  },
  '& .subtotal-text': {
    display: 'flex',
    justifyContent: styles.justify.between,
    marginBottom: '0.25rem',
    '& > p': {
      fontSize: '0.875rem',
      fontWeight: 600,
      color: colors.black,
    },
  },
  '& .discounts-text': {
    display: 'flex',
    justifyContent: styles.justify.between,
    marginBottom: '0.25rem',
    '& > p:nth-child(1)': {
      fontSize: '0.875rem',
      fontWeight: 'normal',
      color: colors.orderSummaryTextFontColor,
    },
    '& > p:nth-child(2)': {
      fontSize: '0.875rem',
      fontWeight: 'normal',
      color: colors.red,
    },
  },
  '& .tax-text': {
    display: 'flex',
    justifyContent: styles.justify.between,
    marginBottom: '1.625rem',
    '& > p': {
      fontSize: '0.875rem',
      fontWeight: 'normal',
      color: colors.orderSummaryTextFontColor,
    },
  },
  '& .total-price-text': {
    display: 'flex',
    justifyContent: styles.justify.between,
    marginBottom: '1rem',
    alignItems: styles.align.center,
    '& > p:nth-child(1)': {
      fontSize: '0.875rem',
      fontWeight: 600,
      color: colors.black,
    },
    '& > p:nth-child(2)': {
      fontSize: '2.375rem',
      fontWeight: 600,
      color: colors.fontColor,
    },
  },
  '& .pay-button': {
    height: '3rem',
    display: 'flex',
    flexGrow: '1',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.lightBlue,
    color: colors.white,
    fontSize: '0.875rem',
    fontWeight: 600,
    borderRadius: '4px',
  },
});
