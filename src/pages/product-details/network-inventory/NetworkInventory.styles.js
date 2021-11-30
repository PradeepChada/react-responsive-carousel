import { styled } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { colors, styles, font } from './../../../utils/themeUtils';

export const Title = styled(Typography)({
  margin: '0.625rem 0',
  fontSize: font.size[20],
  fontWeight: font.weight[700],
  display: styles.display.flex,
  justifyContent: styles.justify.between,
  alignItems: styles.align.center,
});

export const ValueInStock = styled(Box)({
  color: colors.green,
  fontWeight: font.weight[700],
  fontSize: font.size[12],
});

export const ValueOutOfStock = styled(Box)({
  color: colors.red,
  fontWeight: font.weight[700],
  fontSize: font.size[12],
});

export const InventoryBox = styled(Box)({
  width: 310,
  padding: styles.padding[3],
  '& .list-block': {
    margin: 0,
    padding: 0,
    border: 'none',
    '& .list-item': {
      padding: '0.75rem 0',
      borderTop: `1px solid ${colors.gray85}`,
      fontSize: font.size[16],
      display: styles.display.flex,
      justifyContent: styles.justify.between,
      alignItems: styles.align.center,
    },
  },
});
export const ListWrapper = styled(Box)({
  marginTop: styles.margin[3],
});
