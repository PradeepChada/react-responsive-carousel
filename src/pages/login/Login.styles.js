import { styled } from '@mui/styles';
import { Container, Typography, Box } from '@mui/material';
import { colors, styles, font } from './../../utils/themeUtils';

export const PageContainer = styled(Container)({
  padding: `1.875rem`,
  backgroundColor: colors.white,
  textAlign: 'center',
  flex: 1,
  '& img': {
    width: '13rem',
    marginTop: '3rem',
  },
  '& h4': {
    fontSize: font.size[38],
    fontWeight: font.weight[600],
    color: colors.brandBlue,
    margin: styles.margin[4],
  },
  '& button.submit-button': {
    marginTop: styles.margin[2],
  },
  '& .invalid-creds': {
    marginTop: styles.margin[3],
    color: colors.danger,
    textAlign: 'left',
    fontSize: font.size[14],
  },
});

export const Wrapper = styled(Box)({
  marginTop: styles.margin[4],
  marginBottom: styles.margin[3],
  borderBottom: `1px solid ${colors.gray85}`,
  '& ul': {
    paddingLeft: '1.75rem',
    '& li': {
      color: colors.black,
      fontSize: font.size[14],
    },
  },
});

export const Title = styled(Typography)({
  fontSize: font.size[18],
  fontWeight: font.weight[600],
  marginBottom: styles.margin[3],
});

export const ErrorWrapper = styled(Box)({
  padding: '1.875rem 0',
});
