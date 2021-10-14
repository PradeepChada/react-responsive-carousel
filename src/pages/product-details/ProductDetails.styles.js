import { styled } from '@mui/styles';
import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { colors } from './../../utils/themeUtils';

export const PageContainer = styled(Container)({
  padding: '9px 15px',
});

export const Price = styled('div')({
  fontSize: '32px',
  color: '#333337',
  margin: '20px 0',
  fontWeight: 600,
});

export const Spec = styled(Typography)({
  fontSize: 14,
  lineHeight: '18px',
  fontWeight: 600,
  '& span': {
    fontWeight: 400,
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
    background: '#F6F6FA',
    padding: '14px',
    margin: '5px 0',
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
        color: '#128400',
      },
    },
    '& .availability-link': {
      color: '#005DAB',
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
      borderColor: '#fff',
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
  borderBottom: '1px solid #D9D9D9',
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
  padding: '29px 45px'
})
