import { styled } from '@mui/styles';
import { Carousel } from 'react-responsive-carousel';

export const Slider = styled(Carousel)(({ theme }) => ({
  marginTop: 10,
  minHeight: 300,
  '& .slider-wrapper': {
    '& .slide': {
      minWidth: '261px !important',
      marginRight: 20,
      minHeight: 260
    },
  },
  '& .thumbs-wrapper': {
    margin: '10px 0',
    '& .thumbs': {
      margin: 0,
      padding: 0,
      '& .thumb': {
        height: 43,
        width: '43px !important',
        '&.selected': {
          border: `1px solid ${theme?.palette?.primary?.main}`,
        },
      },
    },
  },
}));
