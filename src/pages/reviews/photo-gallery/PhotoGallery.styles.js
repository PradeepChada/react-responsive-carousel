import { styled } from '@mui/styles';
import { Container, Typography, Box, Rating } from '@mui/material';
import { colors } from '../../../utils/themeUtils';

export const GelleryContainer = styled(Box)({
  marginTop: 15,
  display: 'flex',
  '& .first-image': {
      width: 160,
      height: 160,
      backgroundSize: 'cover'
  },
  '& .rest-items':{
      flexGrow: 1,
      width: 160,
    '& .bg-img': {
      marginLeft: 5,
      backgroundSize: 'cover',
      width: 80,
        height: 78,
        display: 'inline-block',
        position: 'relative',
        '& .more': {
            position: 'absolute',
            height: '100%',
            width: '100%',
            backgroundColor: '#005DABCC',
            color: colors.white,
            fontSize: 12,
            lineHeight: '14px',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontWeight: 'bold',
            textTransform: 'uppercase'
        }
    }
  }
});
