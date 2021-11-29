import { styled } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { colors, font, styles } from '../../utils/themeUtils';

export const Wrapper = styled(Box)({
  display: styles.display.flex,
  marginTop: '2rem',
  borderBottom: `1px solid ${colors.gray85}`,
  paddingBottom: styles.padding[4],
  width: '100%',
});

export const ImageSkeleton = styled(Skeleton)({
  width: '116px',
  height: '116px',
  marginRight: styles.margin[3],
});

export const PriceSkeleton = styled(Skeleton)({
  fontSize: font.size[16],
  marginBottom: '0.375rem',
  width: '80px',
});

export const TitleSkeleton = styled(Skeleton)({
  fontSize: font.size[14],
  marginBottom: '0.75rem',
  width: '210px',
});

export const StockSkeleton = styled(Skeleton)({
  fontSize: font.size[14],
  marginBottom: '1.875rem',
  width: '90px',
});

export const CodeSkeleton = styled(Skeleton)({
  fontSize: font.size[12],
  width: '90px',
});

export const Image = styled('img')({
  height: '116px',
  width: '116px',
  marginRight: styles.margin[3],
});

export const Price = styled(Typography)({
  fontSize: font.size[16],
  color: colors.textBlack,
  fontWeight: font.weight[700],
  marginBottom: styles.margin[1],
});

export const SalePriceWrapper = styled(Box)({
  display: styles.display.flex,
  alignItems: styles.align.center,
  marginBottom: styles.margin[1],
  '& .sale-price': {
    fontSize: font.size[16],
    color: colors.danger,
    fontWeight: font.weight[700],
    marginRight: '0.375rem',
  },
  '& .normal-price': {
    fontSize: font.size[12],
    color: colors.selectGray,
    fontWeight: font.weight[400],
    textDecoration: 'line-through',
  },
});

export const Title = styled(Typography)({
  fontSize: font.size[14],
  color: colors.textBlack,
  fontWeight: font.weight[400],
  marginBottom: '0.75rem',
  textTransform: 'capitalize',
});

export const Stock = styled(Typography)({
  fontSize: font.size[14],
  color: colors.green,
  fontWeight: font.weight[700],
  marginBottom: '1.875rem',
});

export const StockError = styled(Box)({
  boxSizing: 'border-box',
  backgroundColor: colors.bgDanger,
  fontSize: font.size[14],
  color: colors.danger,
  border: `1px solid ${colors.dangerBorder}`,
  borderRadius: '0.25rem',
  fontWeight: font.weight[400],
  marginTop: -Number(styles.margin[1]),
  marginBottom: '0.625rem',
  padding: '0.625rem',
});

export const OutOfStock = styled(Typography)({
  fontSize: font.size[14],
  color: colors.red,
  fontWeight: font.weight[700],
  marginBottom: '1.875rem',
});

export const Code = styled(Typography)({
  fontSize: font.size[12],
  color: colors.selectGray,
  fontWeight: font.weight[400],
});
