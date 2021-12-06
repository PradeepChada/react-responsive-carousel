import { styled } from '@mui/styles';
import { Carousel } from 'react-responsive-carousel';
import Dialog from '@mui/material/Dialog';
import { colors, styles, font } from '../../../utils/themeUtils';
import ReactPlayer from 'react-player';

export const Modal = styled(Dialog)({
  '& .MuiBackdrop-root': {
    backgroundColor: '#ffffffee',
  },
  '& .MuiPaper-root': {
    position: 'unset',
    backgroundColor: 'transparent',
    boxShadow: 'none',
    margin: styles.margin[3],
    width: '100%',
  },
  '& .close-btn': {
    position: 'absolute',
    right: 10,
    top: 10,
    color: colors.lightBlue,
    zIndex: 9,
    padding: styles.padding[1],
  },
});

export const Slider = styled(Carousel)({
  '& .carousel-slider': {
    display: styles.display.flex,
    flexDirection: 'column-reverse',
    '& .control-dots': {
      position: 'relative',
      '& .dot': {
        marginTop: styles.margin[3],
        boxShadow: 'none',
        margin: '0 4px',
        padding: styles.padding[1],
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
  '& .arrow-btn': {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 35px)',
    width: 30,
    height: 30,
    cursor: 'pointer',
    backgroundColor: colors.white,
    padding: '1.125rem',
    boxShadow: '0 0 0.375 #ccc',
    '& svg': {
      fontSize: font.size[30],
    },
  },
  '& .carousel-status': {
    display: 'none',
  },
});

export const Player = styled(ReactPlayer)({
  '& .w-big-play-button': {
    '& div': {
      backgroundColor: `${colors.brandBlue} !important`,
    },
  },
});
