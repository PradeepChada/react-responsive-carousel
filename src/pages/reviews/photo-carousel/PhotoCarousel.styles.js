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
            fontSize: 20
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
    padding: 18,
    boxShadow: '0 0 5px #ccc',
    '& svg': {
        fontSize: 30
    }
  }
});

export const PhotoContent = styled('div')({
    padding: '20px 15px',
    textAlign: 'left',
    '& .rating-bar': {
        marginBottom: 10,
        '& .MuiRating-iconFilled': {
            '& svg': {
              color: colors.ratingColor,
            },
          },
    },
    '& .title': {
        margin: '5px 0',
        fontWeight: 'bold'
    },
    '& .time-ago': {
        margin: '10px 0',
        fontWeight: '300',
        fontSize: 14
    }
})
