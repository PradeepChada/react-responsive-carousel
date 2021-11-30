import { styled } from '@mui/styles';
import { Carousel } from 'react-responsive-carousel';
import Dialog from '@mui/material/Dialog';
import { colors, styles } from '../../../utils/themeUtils';

export const Modal = styled(Dialog)({
  '& .MuiBackdrop-root': {
    backgroundColor: '#ffffffee',
  },
  '& .MuiPaper-root': {
    position: 'unset',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    margin: '1rem',
    width: '100%',
  },
  '& .close-btn': {
    position: 'absolute',
    right: 5,
    top: 5,
    color: colors.lightBlue,
    zIndex: 9,
    padding: styles.padding[1],
    '& svg': {
      fontSize: '1.75rem',
    },
  },
});

export const Slider = styled(Carousel)({
  '& .carousel-slider': {
    display: styles.display.flex,
    flexDirection: 'column-reverse',
    '& .control-dots': {
      position: 'relative',
      '& .dot': {
        marginTop: '1rem',
        boxShadow: 'none',
        margin: '0 4px',
        padding: 5,
        backgroundColor: colors.gray81,
        '&.selected': {
          backgroundColor: colors.selectGray,
        },
      },
    },
  },
  '& .slider-wrapper': {
    '& .slide': {
      '& iframe': {
        width: '100%',
        margin: 0,
        minHeight: '13rem',
      },
    },
  },
  '& .carousel-status': {
    display: 'none',
  },

  '& .arrow-btn': {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
    backgroundColor: colors.white,
    padding: '1.125rem',
    boxShadow: '0 0 0.375 #ccc',
    '& svg': {
      fontSize: '1.875rem',
    },
  },
});
