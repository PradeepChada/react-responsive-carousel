import { styled } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export const Title = styled(Typography)({
  position: 'absolute',
  top: '12px',
  left: '17px',
  fontSize: '20px',
  lineHeight: '22px',
  fontWeight: '700',
  color: '#333337',
});
export const ValueInStock = styled(Box)({
  color: 'green',
  position: 'absolute',
  right: '17px',
  fontWeight: '700',
  fontSize: '12px',
  lineHeight: '16px',
});

export const ValueOutOfStock = styled(Box)({
  color: 'red',
  position: 'absolute',
  right: '17px',
  fontWeight: '700',
  fontSize: '12px',
  lineHeight: '16px',
});

export const InventoryBox = styled(Box)({
  width: 320,
  '& .close': {
    position: 'absolute',
    right: '17px',
    top: '12px',
    cursor: 'pointer'
  },
  '& .list-block':{
    top: '23px'
  },
  '& .divider-line':{
    position: 'relative',
     margin: '15px 17px'
  },
  '& .outlet-info': {
    position: 'absolute',
    left: '17px',
    lineHeight: '22px'
  }
})
export const ListWrapper = styled(Box)({
  marginTop: '15px',
})