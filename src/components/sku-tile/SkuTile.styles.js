import { styled } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { colors } from '../../utils/themeUtils';

export const Wrapper = styled(Box)({
  display: 'flex',
  marginTop: '32px',
  borderBottom: `1px solid ${colors.gray85}`,
  paddingBottom: '24px',
  width: '100%',
});

export const ImageSkeleton = styled(Skeleton)({
  width: '116px',
  height: '116px',
  marginRight: '16px',
});

export const PriceSkeleton = styled(Skeleton)({
  fontSize: '16px',
  marginBottom: '5px',
  width: '80px',
});

export const TitleSkeleton = styled(Skeleton)({
  fontSize: '14px',
  marginBottom: '12px',
  width: '210px',
});

export const StockSkeleton = styled(Skeleton)({
  fontSize: '14px',
  marginBottom: '30px',
  width: '90px',
});

export const CodeSkeleton = styled(Skeleton)({
  fontSize: '12px',
  width: '90px',
});

export const Image = styled('img')({
  height: '116px',
  width: '116px',
  marginRight: '16px',
});

export const Price = styled(Typography)({
  fontSize: '16px',
  color: colors.fontColor,
  fontWeight: '700',
  marginBottom: '4px',
});

export const Title = styled(Typography)({
  fontSize: '14px',
  color: colors.fontColor,
  fontWeight: '400',
  marginBottom: '12px',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
});

export const Stock = styled(Typography)({
  fontSize: '14px',
  color: colors.green,
  fontWeight: '700',
  marginBottom: '30px',
});

export const StockError = styled(Box)({
  width: '198px',
  height: '86px',
  boxSizing: 'border-box',
  backgroundColor: colors.dangerBackground,
  fontSize: '14px',
  color: colors.danger,
  border: `1px solid ${colors.dangerBorder}`,
  borderRadius: '4px',
  fontWeight: '400',
  marginTop: '-3px',
  marginBottom: '9px',
  padding: '7px 10px 0px',
});

export const OutOfStock = styled(Typography)({
  fontSize: '14px',
  color: colors.red,
  fontWeight: '700',
  marginBottom: '30px',
});

export const Code = styled(Typography)({
  fontSize: '12px',
  color: colors.abbey,
  fontWeight: '400',
});
