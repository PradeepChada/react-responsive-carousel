import { styled } from '@mui/styles';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { colors } from './../../utils/themeUtils';
import InputBase from '@mui/material/InputBase';

export const PageContainer = styled(Container)({
  padding: '0.625rem 1rem',
});

export const SalePriceWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  '& .sale-price': {
    fontSize: '2rem',
    fontWeight: '700',
    color: colors.danger,
  },
  '& .normal-price': {
    fontSize: '0.75rem',
    fontWeight: '400',
    color: colors.textBlack,
    marginBottom: '0.125rem',
  },
  '& .savings': {
    fontSize: '0.875rem',
    fontWeight: '700',
    color: colors.green,
  },
});
export const Price = styled('div')({
  fontSize: '2rem',
  color: colors.fontColor,
  margin: '1.125rem 0 0 0',
  fontWeight: 600,
});

export const Spec = styled(Typography)({
  fontSize: '0.875rem',
  fontWeight: 600,
  marginTop: '0.25rem',
  '& span': {
    fontWeight: 400,
  },
  '&:first-child': {
    marginTop: '1.5rem',
  },
});

export const Availability = styled(Box)({
  marginTop: '1.25rem',
  '& .sub-head': {
    fontSize: '0.875rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
  },
  '& .store-tile': {
    background: colors.bgGray,
    padding: '0.625rem 0.875rem',
    margin: '0.5rem 0',
    display: 'flex',
    alignItems: 'center',
    '&.other-stores': {
      padding: '1.125rem 0.875rem',
    },
    '& img': {
      marginRight: '1rem',
    },
    '& .stock-details': {
      fontWeight: 600,
      fontSize: '0.75rem',
      '& .stock-green': {
        color: colors.green,
      },
      '& .stock-red': {
        color: colors.red,
      },
    },
    '& .availability-link': {
      color: colors.brandBlue,
      fontSize: '0.625rem',
      textDecoration: 'underline',
      textTransform: 'unset',
      padding: 0,
    },
  },
  '& .other-stores': {
    alignItems: 'center',
    '& .stock-details': {
      padding: '0.375rem 0',
      '&:first-child': {
        paddingTop: 0,
      },
      '&:last-child': {
        paddingBottom: 0,
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
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '1rem',
  lineHeight: '1.375rem',
  borderBottom: `1px solid ${colors.gray85} `,
  '& p': {
    fontSize: '1rem',
    lineHeight: '1.375rem',
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
      display: 'flex',
      alignItems: 'center',
      '& span': {
        verticalAlign: 'middle',
      },
    },
  },
  '& .total-question-text': {
    fontSize: '0.875rem',
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
  fontSize: '0.875rem',
  color: colors.danger,
  border: `1px solid ${colors.dangerBorder}`,
  borderRadius: '0.25rem',
  fontWeight: '400',
  padding: '0.375rem 0.625rem 0.75rem 0.625rem',
  '& .refresh-btn': {
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  '& button': {
    textTransform: 'none',
    color: colors.danger,
    textDecoration: 'underline',
    fontWeight: '600',
    padding: '0 0.375rem',
  },
});

export const ButtonGroupWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  width: '80px',
  height: '36px',
  boxSizing: 'border-box',
  borderRadius: '4px',
  backgroundColor: colors.white,
  border: `1px solid ${colors.gray60}`,
  '& p': {
    fontSize: '1rem',
    flexGrow: '1',
    textAlign: 'center',
  },
});

export const InputWrapper = styled(InputBase)({
  flex: 2,
  fontSize: '1rem',
  color: colors.fontColor,
  fontWeight: '400',
  '& input': {
    textAlign: 'center',
  },
});

export const SaveButton = styled(Box)({
  height: '3rem',
  display: 'flex',
  flexGrow: '1',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '0.875rem',
  fontWeight: 'bold',
  color: colors.white,
  backgroundColor: colors.lightBlue,
  textTransform: 'uppercase',
  borderRadius: '4px',
});
