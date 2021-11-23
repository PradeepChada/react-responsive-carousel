import { styled } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { colors } from './../../../utils/themeUtils';

export const Title = styled(Typography)({
  margin: '0.625rem 0',
  fontSize: '1.25rem',
  fontWeight: 700,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
});

export const ValueInStock = styled(Box)({
  color: colors.green,
  fontWeight: '700',
  fontSize: '0.75rem',
});

export const ValueOutOfStock = styled(Box)({
  color: colors.red,
  fontWeight: '700',
  fontSize: '0.75rem',
});

export const InventoryBox = styled(Box)({
  width: 310,
  padding: '1rem',
  '& .list-block': {
    margin: 0,
    padding: 0,
    border: 'none',
    '& .list-item': {
      padding: '0.75rem 0',
      borderTop: `1px solid ${colors.gray85}`,
      fontSize: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
});
export const ListWrapper = styled(Box)({
  marginTop: '1rem',
});
