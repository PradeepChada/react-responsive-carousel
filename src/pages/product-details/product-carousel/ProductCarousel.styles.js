import { styled } from '@mui/styles';
import { Carousel } from 'react-responsive-carousel';

export const Slider = styled(Carousel)(({ theme }) => ({
  marginTop: '0.625rem',
  minHeight: 270,
  '& .slider-wrapper': {
    '& .slide': {
      minWidth: '208px !important',
      width: '208px !important',
      marginRight: '1.25rem',
      minHeight: 207,
    },
  },
  '& .thumbs-wrapper': {
    margin: '0.5rem 0 0 0',
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
  '& .carousel-status': {
    display: 'none',
  },
}));
