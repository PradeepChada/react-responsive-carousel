import { styled } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Skeleton from '@mui/material/Skeleton';
import ClearIcon from '@mui/icons-material/Clear';
import { colors, styles, font } from '../../../utils/themeUtils';

export const Wrapper = styled(Box)({
  display: styles.display.flex,
  flexDirection: 'column',
  borderBottom: `1px solid ${colors.gray85}`,
  padding: `${styles.padding[4]} 0 ${styles.padding[3]} 0`,
  width: '100%',
  '& .options': {
    fontSize: font.size[14],
    color: colors.brandBlue,
    textDecoration: 'underline',
  },
  '& .discount-text': {
    fontSize: font.size[12],
    color: colors.selectGray,
    fontStyle: 'italic',
    marginBottom: '.75rem',
    paddingRight: '1px',
  },
  '& .plus-button': {
    cursor: 'pointer',
  },
  '& .minus-button': {
    cursor: 'pointer',
  },
  '& .image-container': {
    position: 'relative',
    height: '70px',
    width: '70px',
    marginRight: styles.margin[3],
  },
  '& .image-sale-text': {
    width: '31px',
    height: '15px',
    position: 'absolute',
    top: '0',
    left: '0',
    fontSize: font.size[12],
    fontWeight: font.weight[600],
    backgroundColor: colors.red,
    color: colors.white,
    textAlign: 'center',
    borderRadius: '0 0 0.25rem 0',
  },
  '& .quantity-error': {
    marginTop: styles.margin[2],
    fontSize: font.size[14],
    color: colors.danger,
  },
});

export const ImageSkeleton = styled(Skeleton)({
  width: '70px',
  height: '70px',
  marginRight: styles.margin[3],
  boxSizing: 'border-box',
});

export const PriceSkeleton = styled(Skeleton)({
  fontSize: font.size[16],
  marginBottom: '1.75rem',
  width: '80px',
});

export const TitleSkeleton = styled(Skeleton)({
  fontSize: font.size[14],
  marginBottom: '.125rem',
  width: '210px',
});

export const CodeSkeleton = styled(Skeleton)({
  fontSize: font.size[12],
  width: '90px',
  marginBottom: '.875rem',
});

export const Image = styled('img')({
  height: '70px',
  width: '70px',
});

export const Price = styled(Typography)({
  fontSize: font.size[16],
  color: colors.textBlack,
  fontWeight: font.weight[700],
  marginBottom: '1.75rem',
});

export const SalePriceWrapper = styled(Box)({
  display: styles.display.flex,
  alignItems: styles.align.center,
  marginBottom: '2px',
  '& .sale-price': {
    fontSize: font.size[16],
    color: colors.danger,
    fontWeight: font.weight[700],
    marginRight: '0.375rem',
    textAlign: 'center',
  },
  '& .normal-price': {
    fontSize: font.size[12],
    color: colors.selectGray,
    fontWeight: font.weight[400],
    textDecoration: 'line-through',
    textAlign: 'center',
  },
});

export const Title = styled(Typography)({
  fontSize: font.size[14],
  color: colors.textBlack,
  fontWeight: font.weight[400],
  marginBottom: '0.125rem',
  textTransform: 'capitalize',
});

export const Code = styled(Typography)({
  fontSize: font.size[12],
  color: colors.selectGray,
  fontWeight: font.weight[400],
  marginBottom: '0.875rem',
});

export const ClearIconWrapper = styled(ClearIcon)({
  width: '13px',
  height: '13px',
  marginLeft: '.75rem',
  cursor: 'pointer',
});

export const ClearIconSkeleton = styled(Skeleton)({
  width: '13px',
  height: '13px',
  marginLeft: '0.75rem',
});

export const ButtonGroupWrapper = styled(Box)({
  display: styles.display.flex,
  justifyContent: styles.justify.evenly,
  alignItems: styles.align.center,
  width: '80px',
  height: '36px',
  boxSizing: 'border-box',
  borderRadius: '4px',
  border: `1px solid ${colors.black40}`,
  '& p': {
    fontSize: font.size[16],
    flexGrow: '1',
    textAlign: 'center',
  },
});

export const ButtonGroupSkeleton = styled(Skeleton)({
  width: '80px',
  height: '36px',
});

export const InputWrapper = styled(InputBase)({
  flex: 2,
  fontSize: font.size[16],
  color: colors.textBlack,
  fontWeight: font.weight[400],
  '& input': {
    textAlign: 'center',
  },
});
