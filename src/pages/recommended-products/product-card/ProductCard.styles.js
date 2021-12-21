import { styled } from '@mui/styles';
import { Grid } from '@mui/material';
import { colors, styles, font } from '../../../utils/themeUtils';

export const Wrapper = styled(Grid)({
  width: '9.375rem',
  padding: `${styles.padding[1]}`,
  minHeight: 'min-content',
  marginRight: styles.margin[2],
  position: 'relative',
  '& img': {
    width: '100%',
    minHeight: 142,
  },
  '& .badge': {
    position: 'absolute',
    left: '.25rem',
    padding: '2px 6px',
    color: colors.white,
    fontSize: font.size[14],
    borderRadius: '0px 0px 4px 0px',
  },
  '& .content': {
    padding: `${styles.padding[1]} 0`,
    paddingBottom: styles.padding[4],
    '& .colors-available': {
      '& .more-text': {
        color: colors.selectGray,
        fontWeight: font.weight[600],
      },
      display: styles.display.flex,
      alignItems: styles.align.center,
      minHeight: 22,
      '& .color-tile': {
        padding: 2,
        marginRight: styles.margin[1],
        width: '1rem',
        height: '1rem',
        outline: `1px solid ${colors.gray85}`,
        border: `2px solid ${colors.white}`,
      },
    },
    '& .price': {
      fontWeight: font.weight[600],
      marginTop: styles.margin[2],
      '&.danger': {
        color: colors.red,
      },
    },
    '& .original-price': {
      fontSize: font.size[12],
      margin: '2px 0',
      minHeight: '1rem',
    },
    '& .title': {
      fontSize: font.size[14],
      marginTop: styles.margin[1],
      '-webkit-line-clamp': 2,
      display: '-webkit-box',
      overflow: 'hidden',
      '-webkit-box-orient': 'vertical',
    },
    '& .ratings-wrapper': {
      marginTop: styles.margin[1],
    },
    '& .stock': {
      marginTop: styles.margin[3],
      fontSize: font.size[14],
      fontWeight: font.weight[600],
      '&.green': {
        color: colors.green,
      },
      '&.red': {
        color: colors.danger,
      },
    },
  },
});

export const RatingCount = styled('span')({
  color: colors.black40,
  fontSize: font.size[12],
  marginLeft: styles.margin[2],
});
