import { styled } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { colors, font, styles } from '../../utils/themeUtils';

export const Wrapper = styled(Box)({
  height: '100%',
});

export const PaymentWrapper = styled(Box)({
  marginTop: styles.margin[3],
});
export const TextWrapper = styled(Box)({
  width: '100%',
  height: '100%',
  background: colors.bgGray,
  marginTop: styles.margin[4],
  borderTopLeftRadius: '5px',
  borderTopRightRadius: '5px',
  display: styles.display.flex,
  alignItems: styles.align.center,
});

export const Title = styled(Typography)({
  fontSize: font.size[14],
  //   lineHeight: '22px',
  fontWeight: font.weight[600],
  color: colors.black,
  //   letterSpacing: 0.2,
  marginBottom: styles.margin[1],
});

export const Amount = styled(Typography)({
  fontSize: '2.25rem',
  fontWeight: font.weight[600],
  //   textAlign: 'center',
  lineHeight: 1,
  //   color: '#333337',
  //   lineHeight: '39px',
});

export const Decoration = styled(Typography)({
  color: colors.brandBlue,
  fontSize: font.size[14],
  lineHeight: '18px ',
  marginTop: styles.margin[3],
  textDecoration: 'underline',
  letterSpacing: 0.2,
});

export const Description = styled(Typography)({
  fontSize: '1.75rem',
  fontWeight: font.weight[600],
  textAlign: 'center',
  //   color: '#333337',
  marginTop: styles.margin[4],
});
