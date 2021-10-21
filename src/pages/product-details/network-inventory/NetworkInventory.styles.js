import { styled } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {colors} from './../../../utils/themeUtils'


export const Title = styled(Typography)({
  margin: '9px 0',
  fontSize: 20,
  lineHeight: '22px',
  fontWeight: 700,
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: "center",
  // borderBottom: '1px solid #D9D9D9'
});

export const ValueInStock = styled(Box)({
  color: colors.green,
  fontWeight: '700',
  fontSize: '12px',
  lineHeight: '16px',
});

export const ValueOutOfStock = styled(Box)({
  color: colors.red,
  fontWeight: '700',
  fontSize: '12px',
  lineHeight: '16px',
});

export const InventoryBox = styled(Box)({
  width: 310,
  padding: 16,
  '& .list-block':{
    margin: 0,
    padding: 0,
    border: 'none',
    '& .list-item':{
      padding: '12px 0',
      borderTop: '1px solid #D9D9D9',
      fontSize: 16,
      lineHeight: '22px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  },
  '& .outlet-info': {
    lineHeight: '22px'
  }
})
export const ListWrapper = styled(Box)({
  marginTop: '15px',
})