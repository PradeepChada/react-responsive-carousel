import { styled } from '@mui/styles';
import { Container, Typography } from '@mui/material';
import { Box} from '@mui/system';
import { colors } from './../../utils/themeUtils';

export const PageContainer = styled(Container)({
  padding: '9px 15px',
});

export const SalePriceWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  '& .sale-price': {
    fontSize: '32px',
    lineHeight: '18px',
    fontWeight: '700',
    color: colors.danger,
  },
  '& .normal-price': {
    fontSize: '12px',
    lineHeight: '14px',
    fontWeight: '400',
    color: colors.fontColor,
    marginBottom: '1.5px',
  },
  '& .savings': {
    fontSize: '14px',
    lineHeight: '14px',
    fontWeight: '700',
    color: colors.green,
  },
});
export const Price = styled('div')({
  fontSize: '32px',
  color: colors.fontColor,
  margin: '18px 0 0 0',
  lineHeight: '18px',
  fontWeight: 600,
});

export const Spec = styled(Typography)({
  fontSize: 14,
  lineHeight: '18px',
  fontWeight: 600,
  marginTop: 3,
  '& span': {
    fontWeight: 400,
  },
  '&:first-child': {
    marginTop: 24,
  },
});

export const Availability = styled(Box)({
  marginTop: 20,
  '& .sub-head': {
    fontSize: 14,
    lineHeight: '18px',
    fontWeight: 600,
    marginBottom: 7,
  },
  '& .store-tile': {
    background: colors.lightBackground,
    padding: '14px',
    margin: '4px 0',
    display: 'flex',
    alignItems: 'center',
    '& img': {
      marginRight: 15,
    },
    '& .stock-details': {
      fontWeight: 600,
      fontSize: 12,
      lineHeight: '16px',
      '& .stock-green': {
        color: colors.green,
      },
      '& .stock-red': {
        color: colors.red,
      },
    },
    '& .availability-link': {
      color: colors.primary,
      fontSize: 10,
      lineHeight: '22px',
      textDecoration: 'underline',
      textTransform: 'unset',
      padding: 0,
    },
  },
  '& .other-stores': {
    alignItems: 'flex-start',
    '& .stock-details': {
      padding: '6px 0',
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
  padding: '17px 0',
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: 16,
  lineHeight: '22px',
  borderBottom: `1px solid ${colors.gray85} `,
  '& p': {
    fontSize: 16,
    lineHeight: '22px',
    color: colors.black,
  },
  '& svg': {
    color: colors.lightBlue,
  },
});

export const ErrorWrapper = styled(Box)({
  padding: '29px 0px',
});

export const StockError = styled(Box)({
  backgroundColor: colors.dangerBackground,
  fontSize: '14px',
  color: colors.danger,
  border: `1px solid ${colors.dangerBorder}`,
  borderRadius: '4px',
  fontWeight: '400',
  padding: '5px 10px 12px 10px',
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
    padding: '0px 5px',
  },
});
