import { Typography } from '@mui/material';
import { styled } from '@mui/styles';
import { Box } from '@mui/system';
import { colors } from '../../../utils/themeUtils';

export const LoadingBoxWrapper = styled(Box)({
  padding: '1.5rem',
  border: `1px solid ${colors.gray90}`,
  '& .asker': {
    marginBottom: '0.5rem',
  },
  '& .question': {
    marginBottom: '1rem',
  },
  '& .view-more-answerer': {
    marginTop: '1rem',
  },
  marginBottom: '1rem',
});

export const BoxWrapper = styled(Box)({
  padding: '1.5rem',
  border: `1px solid ${colors.gray90}`,
  '& .view-more-answerer': {
    color: colors.brandBlue,
    fontSize: '0.875rem',
    marginTop: '1rem',
    textDecoration: 'underline',
  },
  marginBottom: '1rem',
});

export const Asker = styled(Typography)({
  fontSize: '0.875rem',
  color: colors.brandBlue,
  marginBottom: '0.5rem',
  textTransform: 'capitalize',
});

export const Question = styled(Typography)({
  fontSize: '1.125rem',
  fontWeight: 'bold',
  color: colors.black,
  marginBottom: '1rem',
  wordBreak: 'break-all',
});

export const Answer = styled(Box)({
  backgroundColor: colors.bgGray,
  padding: '1rem',
  '& .answerer': {
    fontSize: '1rem',
    fontWeight: '400',
    color: colors.black,
    marginBottom: '0.5rem',
    textTransform: 'capitalize',
  },
  '& .answerer-text': {
    fontSize: '1rem',
    fontWeight: '400',
    color: colors.black,
    wordBreak: 'break-all',
  },
  marginBottom: '0.5rem',
});
