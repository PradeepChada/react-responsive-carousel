import { styled } from '@mui/styles';
import { Box } from '@mui/material';
import { colors } from '../../../utils/themeUtils';

export const GelleryContainer = styled(Box)({
  marginTop: '1rem',
  display: 'flex',
  '& .first-image': {
    width: 160,
    height: 160,
    backgroundSize: 'cover',
  },
  '& .rest-items': {
    flexGrow: 1,
    width: 160,
    '& .bg-img': {
      marginLeft: '0.375rem',
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
        fontSize: '0.75rem',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        textTransform: 'uppercase',
      },
    },
  },
});
