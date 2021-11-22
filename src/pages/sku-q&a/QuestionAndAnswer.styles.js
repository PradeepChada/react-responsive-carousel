import { styled } from '@mui/styles';
import { Box } from '@mui/system';
import Select from '@mui/material/Select';
import { colors } from '../../utils/themeUtils';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
export const NotFoundQA = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  marginTop: '1.625rem',
  '& p:nth-child(1)': {
    fontSize: '1.125rem',
    fontWeight: 'bold',
    color: colors.textBlack,
    marginBottom: '0.5rem',
  },
  '& p:nth-child(2)': {
    fontSize: '0.875rem',
    fontWeight: 'normal',
    color: colors.textBlack,
  },
});
export const BoxWrapper = styled(Box)({
  padding: '0.5rem 1rem 0 1rem',
  '& .text': {
    fontSize: '1.125rem',
    fontWeight: '700',
    color: colors.textBlack,
    marginTop: '1.625rem',
  },
  '& .total-question': {
    fontSize: '1rem',
    fontWeight: '400',
    color: colors.black,
    margin: '1rem 0',
  },
  '& .more-question-test': {
    fontSize: '0.875rem',
    color: colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '1rem',
  },
  '& .select': {
    border: `1px solid ${colors.red}`,
  },
  '& hr': {
    border: `1px solid ${colors.gray85}`,
  },
});

export const SelectWrapper = styled(Select)({
  height: '42px',
  display: 'flex',
  flexGrow: '1',
  boxSizing: 'border-box',
  border: `1px solid ${colors.black}`,
  borderRadius: '0.25rem',
  marginBottom: '1rem',
  '& fieldset': {
    border: 'none',
  },
});

export const ButtonWrapper = styled(Button)({
  fontSize: '0.875rem',
  height: '48px',
  marginTop: '1.5rem',
  color: colors.lightBlue,
  border: `2px solid ${colors.lightBlue}`,
  textTransform: 'capitalize',
  width: '100%',
  marginBottom: '2.125rem',
});

export const ErrorWrapper = styled(Box)({
  padding: '1.875rem 0',
});

export const SKUNameSkeletion = styled(Skeleton)({
  fontSize: '1rem',
  marginBottom: '0.125rem',
});

export const QATextSkeletion = styled(Skeleton)({
  marginTop: '1.625rem',
  fontSize: '1.125rem',
});

export const NoOfQuestionTextSkeletion = styled(Skeleton)({
  marginTop: '1rem',
  fontSize: '1rem',
});

export const SortBySkeletion = styled(Skeleton)({
  marginTop: '0 1rem',
});
