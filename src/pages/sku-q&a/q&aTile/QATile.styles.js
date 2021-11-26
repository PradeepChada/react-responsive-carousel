import { Typography } from '@mui/material';
import { styled } from '@mui/styles';
import { Box } from '@mui/system';
import { colors, styles, font } from '../../../utils/themeUtils';

export const LoadingBoxWrapper = styled(Box)({
  padding: styles.padding[4],
  border: `1px solid ${colors.gray90}`,
  '& .asker': {
    marginBottom: styles.margin[2],
  },
  '& .question': {
    marginBottom: styles.margin[3],
  },
  '& .view-more-answerer': {
    marginTop: styles.margin[3],
  },
  marginBottom: styles.margin[3],
});

export const BoxWrapper = styled(Box)({
  padding: styles.padding[4],
  border: `1px solid ${colors.gray90}`,
  '& .view-more-answerer': {
    color: colors.brandBlue,
    fontSize: font.size[14],
    marginTop: styles.margin[3],
    textDecoration: 'underline',
  },
  marginBottom: styles.margin[3],
});

export const Asker = styled(Typography)({
  fontSize: font.size[14],
  color: colors.brandBlue,
  marginBottom: styles.margin[2],
  textTransform: 'capitalize',
});

export const Question = styled(Typography)({
  fontSize: font.size[18],
  fontWeight: font.weight['bold'],
  color: colors.black,
  marginBottom: styles.margin[3],
  wordBreak: 'break-all',
});

export const Answer = styled(Box)({
  backgroundColor: colors.bgGray,
  padding: styles.padding[3],
  '& .answerer': {
    fontSize: font.size[16],
    fontWeight: font.weight[400],
    color: colors.black,
    marginBottom: styles.margin[2],
    textTransform: 'capitalize',
  },
  '& .answerer-text': {
    fontSize: font.size[16],
    fontWeight: font.weight[400],
    color: colors.black,
    wordBreak: 'break-all',
  },
  marginBottom: styles.margin[2],
});
