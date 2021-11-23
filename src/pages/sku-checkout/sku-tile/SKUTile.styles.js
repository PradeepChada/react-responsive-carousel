import { styled } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import Skeleton from '@mui/material/Skeleton';
import ClearIcon from '@mui/icons-material/Clear';
import { colors } from '../../../utils/themeUtils';

export const Wrapper = styled(Box)({
  display: 'flex',
  borderBottom: `1px solid ${colors.gray85}`,
  padding: '1.5rem 0 1rem 0',
  width: '100%',
  '& .options': {
    fontSize: '0.875rem',
    color: colors.brandBlue,
    textDecoration: 'underline',
  },
  '& .discount-text': {
    fontSize: '0.75rem',
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
    marginRight: '1rem',
  },
  '& .image-sale-text': {
    width: '31px',
    height: '15px',
    position: 'absolute',
    top: '0',
    left: '0',
    fontSize: '0.75rem',
    fontWeight: '600',
    backgroundColor: colors.red,
    color: colors.white,
    textAlign: 'center',
    borderRadius: '0 0 0.25rem 0',
  },
});

export const ImageSkeleton = styled(Skeleton)({
  width: '70px',
  height: '70px',
  marginRight: '1rem',
  boxSizing: 'border-box',
});

export const PriceSkeleton = styled(Skeleton)({
  fontSize: '1rem',
  marginBottom: '1.75rem',
  width: '80px',
});

export const TitleSkeleton = styled(Skeleton)({
  fontSize: '0.875rem',
  marginBottom: '.125rem',
  width: '210px',
});

export const CodeSkeleton = styled(Skeleton)({
  fontSize: '0.75rem',
  width: '90px',
  marginBottom: '.875rem',
});

export const Image = styled('img')({
  height: '70px',
  width: '70px',
});

export const Price = styled(Typography)({
  fontSize: '1rem',
  color: colors.textBlack,
  fontWeight: '700',
  marginBottom: '1.75rem',
});

export const SalePriceWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1rem',
  '& .sale-price': {
    fontSize: '1rem',
    color: colors.danger,
    fontWeight: '700',
    marginRight: '0.375rem',
    textAlign: 'center',
  },
  '& .normal-price': {
    fontSize: '0.75rem',
    color: colors.selectGray,
    fontWeight: '400',
    textDecoration: 'line-through',
    textAlign: 'center',
  },
});

export const Title = styled(Typography)({
  fontSize: '0.875rem',
  color: colors.textBlack,
  fontWeight: '400',
  marginBottom: '0.125rem',
  textTransform: 'capitalize',
});

export const Code = styled(Typography)({
  fontSize: '0.75rem',
  color: colors.selectGray,
  fontWeight: '400',
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
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  width: '80px',
  height: '36px',
  boxSizing: 'border-box',
  borderRadius: '4px',
  border: `1px solid ${colors.black40}`,
  '& p': {
    fontSize: '1rem',
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
  fontSize: '1rem',
  color: colors.textBlack,
  fontWeight: '400',
  '& input': {
    textAlign: 'center',
  },
});
