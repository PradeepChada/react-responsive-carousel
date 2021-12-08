import { styled } from '@mui/styles';
import { Container } from '@mui/material';
import { styles, font, colors } from '../../utils/themeUtils';
import { Box } from '@mui/system';

export const PageContainer = styled(Container)({
  padding: styles.padding[3],
  height: '100%',
  '& .pop-account-text': {
    fontSize: font.size[18],
    fontWeight: font.weight[600],
    color: colors.textBlack,
    marginBottom: styles.margin[3],
  },
  '& .skip-text': {
    fontSize: font.size[12],
    textDecoration: 'underline',
    color: colors.lightBlue,
    marginBottom: '1.25rem',
  },
  '& .or-text': {
    textAlign: 'center',
    fontSize: font.size[16],
    fontWeight: font.weight['normal'],
    margin: `${styles.margin[1]} 0`,
  },
  '& .next-button': {
    display: styles.display.flex,
    justifyContent: styles.justify.center,
    alignItems: styles.align.center,
    backgroundColor: colors.lightBlue,
    color: colors.white,
    borderRadius: '4px',
    padding: styles.padding[3],
    width: '100%',
    marginBottom: styles.margin[2],
    fontSize: font.size[14],
    fontWeight: font.weight['bold'],
    textTransform: 'uppercase',
  },
  '& .signup-button': {
    display: styles.display.flex,
    justifyContent: styles.justify.center,
    alignItems: styles.align.center,
    color: colors.lightBlue,
    backgroundColor: colors.white,
    borderRadius: '4px',
    border: `1px solid ${colors.lightBlue}`,
    width: '100%',
    padding: styles.padding[3],
    fontSize: font.size[14],
    fontWeight: font.weight['bold'],
    textTransform: 'uppercase',
    marginBottom: styles.margin[3],
  },
  '& legend': {
    fontSize: font.size[16],
    fontWeight: font.weight['normal'],
    color: colors.selectGray,
    marginBottom: '1.875rem',
  },
  '& span': {
    fontSize: font.size[16],
  },
  '& label': {
    '& p': {
      wordBreak: 'break-all',
    },
  },
  '& .error': {
    fontSize: font.size[14],
    fontWeight: font.weight['normal'],
    color: colors.danger,
    marginTop: styles.margin[2],
    marginBottom: styles.margin[2],
  },
  '& .errorInput': {
    '& fieldset': {
      borderColor: colors.danger,
    },
  },
});

export const BoxWrapper = styled(Box)({
  display: styles.display.flex,
  flexDirection: 'column',
  justifyContent: styles.justify.between,
  height: '100%',
});
