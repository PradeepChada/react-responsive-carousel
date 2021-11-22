import { styled } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { colors } from '../../utils/themeUtils';

export const Wrapper = styled(Box)({
  display: 'flex',
  marginTop: '2rem',
  borderBottom: `1px solid ${colors.gray85}`,
  paddingBottom: '1.5rem',
  width: '100%',
});

export const ImageSkeleton = styled(Skeleton)({
  width: '116px',
  height: '116px',
  marginRight: '1rem',
});

export const PriceSkeleton = styled(Skeleton)({
  fontSize: '1rem',
  marginBottom: '0.375rem',
  width: '80px',
});

export const TitleSkeleton = styled(Skeleton)({
  fontSize: '0.875rem',
  marginBottom: '0.75rem',
  width: '210px',
});

export const StockSkeleton = styled(Skeleton)({
  fontSize: '0.875rem',
  marginBottom: '1.875rem',
  width: '90px',
});

export const CodeSkeleton = styled(Skeleton)({
  fontSize: '0.75rem',
  width: '90px',
});

export const Image = styled('img')({
  height: '116px',
  width: '116px',
  marginRight: '1rem',
});

export const Price = styled(Typography)({
  fontSize: '1rem',
  color: colors.textBlack,
  fontWeight: '700',
  marginBottom: '0.25rem',
});

export const SalePriceWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginBottom: '0.25rem',
  '& .sale-price': {
    fontSize: '1rem',
    color: colors.danger,
    fontWeight: '700',
    marginRight: '0.375rem',
  },
  '& .normal-price': {
    fontSize: '0.75rem',
    color: colors.selectGray,
    fontWeight: '400',
    textDecoration: 'line-through',
  },
});

export const Title = styled(Typography)({
  fontSize: '0.875rem',
  color: colors.textBlack,
  fontWeight: '400',
  marginBottom: '0.75rem',
  textTransform: 'capitalize',
});

export const Stock = styled(Typography)({
  fontSize: '0.875rem',
  color: colors.green,
  fontWeight: '700',
  marginBottom: '1.875rem',
});

export const StockError = styled(Box)({
  boxSizing: 'border-box',
  backgroundColor: colors.bgDanger,
  fontSize: '0.875rem',
  color: colors.danger,
  border: `1px solid ${colors.dangerBorder}`,
  borderRadius: '0.25rem',
  fontWeight: '400',
  marginTop: '-0.25rem',
  marginBottom: '0.625rem',
  padding: '0.625rem',
});

export const OutOfStock = styled(Typography)({
  fontSize: '0.875rem',
  color: colors.red,
  fontWeight: '700',
  marginBottom: '1.875rem',
});

export const Code = styled(Typography)({
  fontSize: '0.75rem',
  color: colors.selectGray,
  fontWeight: '400',
});
