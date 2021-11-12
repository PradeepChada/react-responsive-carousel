import { styled } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import ClearIcon from '@mui/icons-material/Clear';
import { colors } from '../../../utils/themeUtils';

export const Wrapper = styled(Box)({
  display: 'flex',
  borderBottom: `1px solid ${colors.gray85}`,
  padding: '24px 0px 16px 0px',
  width: '100%',
  '& .options': {
    fontSize: '14px',
    color: colors.primary,
    textDecoration: 'underline',
  },
  '& .discount-text': {
    fontSize: '12px',
    color: colors.abbey,
    fontStyle: 'italic',
    marginBottom: '11px',
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
    marginRight: '16px',
  },
  '& .image-sale-text': {
    width: '31px',
    height: '15px',
    position: 'absolute',
    top: '0px',
    left: '0px',
    fontSize: '12px',
    fontWeight: '600',
    backgroundColor: colors.red,
    color: colors.white,
    textAlign: 'center',
    borderRadius: '0px 0px 4px 0px',
  },
});

export const ImageSkeleton = styled(Skeleton)({
  width: '70px',
  height: '70px',
  marginRight: '16px',
});

export const PriceSkeleton = styled(Skeleton)({
  fontSize: '16px',
  marginBottom: '27px',
  width: '80px',
});

export const TitleSkeleton = styled(Skeleton)({
  fontSize: '14px',
  marginBottom: '2px',
  width: '210px',
});

export const CodeSkeleton = styled(Skeleton)({
  fontSize: '12px',
  width: '90px',
  marginBottom: '14px',
});

export const Image = styled('img')({
  height: '70px',
  width: '70px',
});

export const Price = styled(Typography)({
  fontSize: '16px',
  color: colors.fontColor,
  fontWeight: '700',
  marginBottom: '27px',
  lineHeight: '20px',
});

export const SalePriceWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '2px',
  '& .sale-price': {
    fontSize: '16px',
    lineHeight: '20px',
    color: colors.danger,
    fontWeight: '700',
    marginRight: '6px',
  },
  '& .normal-price': {
    fontSize: '12px',
    lineHeight: '14px',
    color: colors.abbey,
    fontWeight: '400',
    textDecoration: 'line-through',
  },
});

export const Title = styled(Typography)({
  fontSize: '14px',
  lineHeight: '18px',
  color: colors.fontColor,
  fontWeight: '400',
  marginBottom: '2px',
  textTransform: 'capitalize',
});

export const OutOfStock = styled(Typography)({
  fontSize: '14px',
  lineHeight: '18px',
  color: colors.red,
  fontWeight: '700',
  marginBottom: '30px',
});

export const Code = styled(Typography)({
  fontSize: '12px',
  lineHeight: '14px',
  color: colors.abbey,
  fontWeight: '400',
  marginBottom: '14px',
});

export const ClearIconWrapper = styled(ClearIcon)({
  width: '13px',
  height: '13px',
  marginLeft: '12px',
  cursor: 'pointer',
});

export const ClearIconSkeleton = styled(Skeleton)({
  width: '13px',
  height: '13px',
  marginLeft: '12px',
});

export const ButtonGroupWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  width: '80px',
  height: '36px',
  boxSizing: 'border-box',
  borderRadius: '4px',
  border: `1px solid ${colors.gray60}`,
  '& p': {
    fontSize: '16px',
    flexGrow: '1',
    textAlign: 'center',
  },
});

export const ButtonGroupSkeleton = styled(Skeleton)({
  width: '80px',
  height: '36px',
});
