import { styled } from '@mui/styles';
import { Carousel } from 'react-responsive-carousel';
import Dialog from '@mui/material/Dialog';
import { colors } from '../../../utils/themeUtils';

export const Modal = styled(Dialog)({
    '& .close-btn': {
        position: 'absolute',
        right: 5,
        top: 5,
        backgroundColor: colors.white,
        zIndex: 9,
        padding: 5,
        '& svg': {
            fontSize: "1.25rem"
        }
      },
})

export const Slider = styled(Carousel)({
  '& .slider-wrapper': {
    '& .slide': {
      '& img': {
      backgroundColor: colors.black,
      maxHeight: 207,
      }
    },
  },
  '& .carousel-status':{
    display: 'none'
  },

  '& .arrow-btn':{
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
    backgroundColor: colors.white,
    padding: "1.125rem",
    boxShadow: '0 0 0.375 #ccc',
    '& svg': {
        fontSize: "1.875rem"
    }
  }
});

export const PhotoContent = styled('div')({
    padding: '1.25rem 1rem',
    textAlign: 'left',
    '& .rating-bar': {
        marginBottom: "0.625rem",
        '& .MuiRating-iconFilled': {
            '& svg': {
              color: colors.ratingColor,
            },
          },
    },
    '& .title': {
        margin: '0.375rem 0',
        fontWeight: 'bold'
    },
    '& .time-ago': {
        margin: '0.625rem 0',
        fontWeight: '300',
        fontSize: "0.875rem"
    }
})
