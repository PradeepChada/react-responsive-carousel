import { styled } from '@mui/styles';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { colors, styles, font } from './../../utils/themeUtils';
import InputBase from '@mui/material/InputBase';

export const PageContainer = styled(Container)({
  padding: `0.625rem ${styles.padding[3]}`,
});

export const SalePriceWrapper = styled(Box)({
  display: styles.display.flex,
  alignItems: styles.align.center,
  '& .sale-price': {
    fontSize: font.size[32],
    fontWeight: font.weight[700],
    color: colors.danger,
  },
  '& .normal-price': {
    fontSize: font.size[12],
    fontWeight: font.weight[400],
    color: colors.textBlack,
    marginBottom: '0.125rem',
  },
  '& .savings': {
    fontSize: font.size[14],
    fontWeight: font.weight[700],
    color: colors.green,
  },
});
export const Price = styled('div')({
  fontSize: font.size[32],
  color: colors.textBlack,
  margin: '1.125rem 0 0 0',
  fontWeight: font.weight[600],
});

export const Spec = styled(Typography)({
  fontSize: font.size[14],
  fontWeight: font.weight[600],
  marginTop: styles.margin[1],
  '& span': {
    fontWeight: font.weight[400],
  },
  '&:first-child': {
    marginTop: styles.margin[4],
  },
});

export const Availability = styled(Box)({
  marginTop: '1.25rem',
  '& .sub-head': {
    fontSize: font.size[14],
    fontWeight: font.weight[600],
    marginBottom: styles.margin[2],
  },
  '& .store-tile': {
    background: colors.bgGray,
    padding: '0.75rem 0.875rem',
    margin: `${styles.margin[2]} 0`,
    display: styles.display.flex,
    alignItems: styles.align.center,
    '&.other-stores': {
      padding: '1.125rem 0.875rem',
    },
    '& img': {
      marginRight: styles.margin[3],
    },
    '& .stock-details': {
      fontWeight: font.weight[600],
      fontSize: font.size[16],
      '& .stock-green': {
        color: colors.green,
      },
      '& .stock-red': {
        color: colors.red,
      },
    },
    '& .availability-link': {
      color: colors.brandBlue,
      fontSize: font.size[14],
      fontWeight: font.weight['bold'],
      textTransform: 'unset',
      padding: styles.padding[0],
      marginTop: styles.margin[1],
    },
  },
  '& .other-stores': {
    alignItems: styles.align.center,
    '& .stock-details': {
      padding: '0.375rem 0',
      '&:first-child': {
        paddingTop: styles.padding[0],
      },
      '&:last-child': {
        paddingBottom: styles.padding[0],
      },
    },
    '& hr': {
      borderColor: colors.white,
      borderWidth: 1,
    },
  },
});

export const InfoTile = styled(Box)({
  padding: '1.125rem 0',
  display: styles.display.flex,
  justifyContent: styles.justify.between,
  fontSize: font.size[16],
  borderBottom: `1px solid ${colors.gray85} `,
  '& p': {
    fontSize: font.size[16],
    color: colors.black,
    fontWeight: 600,
  },
  '& svg[data-testid=ChevronRightIcon]': {
    color: colors.lightBlue,
  },
  '& .ratings-wrapper': {
    width: '100%',
    '& .rating-info-block': {
      marginTop: '1.125rem',
      display: styles.display.flex,
      alignItems: styles.align.center,
      '& span': {
        verticalAlign: 'middle',
      },
    },
  },
  '& .total-question-text': {
    fontSize: font.size[14],
    color: colors.brandBlue,
    marginTop: '0.875rem',
    textDecoration: 'underline',
  },
});

export const ErrorWrapper = styled(Box)({
  padding: '1.875rem 0',
});

export const StockError = styled(Box)({
  backgroundColor: colors.bgDanger,
  fontSize: font.size[14],
  color: colors.danger,
  border: `1px solid ${colors.dangerBorder}`,
  borderRadius: '0.25rem',
  fontWeight: font.weight[400],
  padding: '0.375rem 0.625rem 0.75rem 0.625rem',
  '& .refresh-btn': {
    display: styles.display.flex,
    alignItems: styles.align.center,
    fontWeight: font.weight['bold'],
  },
  '& button': {
    textTransform: 'none',
    color: colors.danger,
    textDecoration: 'underline',
    fontWeight: font.weight[600],
    padding: '0 0.375rem',
  },
});

export const ButtonGroupWrapper = styled(Box)({
  display: styles.display.flex,
  justifyContent: styles.justify.evenly,
  alignItems: styles.align.center,
  width: '80px',
  height: '36px',
  boxSizing: 'border-box',
  borderRadius: '4px',
  backgroundColor: colors.white,
  border: `1px solid ${colors.gray60}`,
  '& p': {
    fontSize: font.size[16],
    flexGrow: '1',
    textAlign: 'center',
  },
});

export const InputWrapper = styled(InputBase)({
  flex: 2,
  fontSize: font.size[16],
  color: colors.textBlack,
  fontWeight: font.weight[400],
  '& input': {
    textAlign: 'center',
  },
});

export const SaveButton = styled(Box)({
  height: '3rem',
  display: styles.display.flex,
  flexGrow: '1',
  justifyContent: styles.justify.center,
  alignItems: styles.align.center,
  fontSize: font.size[14],
  fontWeight: font.weight['bold'],
  color: colors.white,
  backgroundColor: colors.lightBlue,
  textTransform: 'uppercase',
  borderRadius: '4px',
});
