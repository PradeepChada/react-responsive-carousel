import { styled } from '@mui/styles';
import { Carousel } from 'react-responsive-carousel';
import { colors, styles } from './../../../utils/themeUtils';

export const Slider = styled(Carousel)(({ theme }) => ({
  marginTop: '0.625rem',
  minHeight: 270,
  '& .slider': {
    // transform: props => {
    //   console.log("PROPS =>", props);
    //   const x = 208 * props.currentIndex;
    //   const property = `translate3d(${-x}px, 0px, 0px) !important`;
    //   return property
    // }
  },
  '& .slider-wrapper': {
    '& .slide': {
      minWidth: '208px !important',
      width: '208px !important',
      marginRight: '1.25rem',
      minHeight: 207,
    },
  },
  '& .thumbs-wrapper': {
    margin: `${styles.margin[2]} 0 0 0`,
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
  '& .control-arrow': {
    '&.control-next': {
      opacity: 1,
      '&:before': {
        borderLeft: `8px solid ${colors.brandBlue}`,
      },
    },
    '&.control-prev': {
      opacity: 1,
      '&:before': {
        borderRight: `8px solid ${colors.brandBlue}`,
      },
    },
  },
  '& .carousel-status': {
    display: 'none',
  },
}));
