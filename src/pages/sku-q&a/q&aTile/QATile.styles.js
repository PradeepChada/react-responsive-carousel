import { Typography } from '@mui/material';
import { styled } from '@mui/styles';
import { Box } from '@mui/system';
import { colors } from '../../../utils/themeUtils';

export const LoadingBoxWrapper = styled(Box)({
  padding: '24x',
  border: `1px solid ${colors.qaTileBorder}`,
  '& .asker': {
    marginBottom: '8px',
  },
  '& .question': {
    marginBottom: '16px',
  },
  '& .view-more-answerer': {
    marginTop: '16px',
  },
  marginBottom: '16px',
});

export const BoxWrapper = styled(Box)({
  padding: '23px',
  border: `1px solid ${colors.qaTileBorder}`,
  '& .view-more-answerer': {
    color: colors.primary,
    fontsize: '14px',
    lineHeight: '18px ',
    marginTop: '16px',
    textDecoration: 'underline',
  },
  marginBottom: '16px',
});

export const Asker = styled(Typography)({
  fontSize: '14px',
  color: colors.primary,
  marginBottom: '8px',
});

export const Question = styled(Typography)({
  fontSize: '18px',
  lineHeight: '22px',
  fontWeight: 'bold',
  color: colors.black,
  marginBottom: '16px',
});

export const Answer = styled(Box)({
  backgroundColor: colors.answerBackground,
  padding: '16px',
  '& .answerer': {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '400',
    color: colors.black,
    marginBottom: '8px',
  },
  '& .answerer-text': {
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: '400',
    color: colors.black,
  },
});
