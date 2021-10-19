import { styled } from '@mui/styles';
import { Carousel } from 'react-responsive-carousel';

export const Slider = styled(Carousel)(({ theme }) => ({
  marginTop: 10,
  minHeight: 270,
  '& .slider-wrapper': {
    '& .slide': {
      minWidth: '208px !important',
      marginRight: 20,
      minHeight: 207
    },
  },
  '& .thumbs-wrapper': {
    margin: '8px 0 0 0',
    '& .thumbs': {
      margin: 0,
      padding: 0,
      '& .thumb': {
        height: 48,
        width: '48px !important',
        '&.selected': {
          border: `1px solid ${theme?.palette?.primary?.main}`,
        },
      },
    },
  },
}));
