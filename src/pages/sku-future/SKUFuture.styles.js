import { colors, styles, font } from '../../utils/themeUtils';
import { Container } from '@mui/material';
import { styled } from '@mui/system';

export const Wrapper = styled(Container)({
  display: styles.display.flex,
  flexDirection: 'column',
  justifyContent: styles.justify.between,
  height: '100vh',
  padding: styles.padding[3],
  '& p:nth-of-type(1)': {
    fontSize: font.size[20],
    fontWeight: font.weight['bold'],
  },
  '& p:nth-of-type(2)': {
    fontSize: font.size[12],
    fontWeight: font.weight['normal'],
    marginBottom: '1.75rem',
  },
  '& .available': {
    marginTop: styles.margin[3],
    fontSize: font.size[16],
    fontWeight: font.weight['bold'],
    color: colors.green,
  },
  '& .not-available': {
    marginTop: styles.margin[3],
    fontSize: font.size[16],
    fontWeight: font.weight['bold'],
    color: colors.danger,
  },
  '& .search-button': {
    display: styles.display.flex,
    justifyContent: styles.justify.center,
    alignItems: styles.align.center,
    borderRadius: '4px',
    backgroundColor: colors.lightBlue,
    color: colors.white,
    fontSize: font.size[14],
    fontWeight: font.weight['bold'],
    padding: `${styles.padding[3]} 0`,
  },
  '& .cancel-button': {
    display: styles.display.flex,
    justifyContent: styles.justify.center,
    alignItems: styles.align.center,
    borderRadius: '4px',
    fontSize: font.size[14],
    fontWeight: font.weight['bold'],
    padding: `${styles.padding[3]} 0`,
  },
});
