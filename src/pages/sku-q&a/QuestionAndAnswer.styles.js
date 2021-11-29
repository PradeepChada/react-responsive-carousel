import { styled } from '@mui/styles';
import { Box } from '@mui/system';
import Select from '@mui/material/Select';
import { colors, styles, font } from '../../utils/themeUtils';
import Button from '@mui/material/Button';
import Skeleton from '@mui/material/Skeleton';
import { Container } from '@mui/material';
export const NotFoundQA = styled(Box)({
  display: styles.display.flex,
  justifyContent: styles.justify.center,
  flexDirection: 'column',
  marginTop: '1.625rem',
  '& p:nth-child(1)': {
    fontSize: font.size[18],
    fontWeight: font.weight['bold'],
    color: colors.textBlack,
    marginBottom: styles.margin[2],
  },
  '& p:nth-child(2)': {
    fontSize: font.size[14],
    fontWeight: font.weight['normal'],
    color: colors.textBlack,
  },
});
export const BoxWrapper = styled(Container)({
  padding: `${styles.padding[2]} ${styles.padding[3]} 0 ${styles.padding[3]}`,
  '& .text': {
    fontSize: font.size[18],
    fontWeight: font.weight[700],
    color: colors.textBlack,
    marginTop: '1.625rem',
  },
  '& .total-question': {
    fontSize: font.size[16],
    fontWeight: font.weight[400],
    color: colors.black,
    margin: `${styles.margin[3]} 0`,
  },
  '& .more-question-test': {
    fontSize: font.size[14],
    color: colors.black,
    fontWeight: font.weight['bold'],
    textAlign: 'center',
    marginTop: styles.margin[3],
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
  display: styles.display.flex,
  flexGrow: '1',
  boxSizing: 'border-box',
  border: `1px solid ${colors.black}`,
  borderRadius: '0.25rem',
  marginBottom: styles.margin[3],
  '& fieldset': {
    border: 'none',
  },
});

export const ButtonWrapper = styled(Button)({
  fontSize: font.size[14],
  height: '48px',
  marginTop: styles.margin[4],
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
  fontSize: font.size[16],
  marginBottom: '0.125rem',
});

export const QATextSkeletion = styled(Skeleton)({
  marginTop: '1.625rem',
  fontSize: font.size[18],
});

export const NoOfQuestionTextSkeletion = styled(Skeleton)({
  marginTop: styles.margin[3],
  fontSize: font.size[16],
});

export const SortBySkeletion = styled(Skeleton)({
  marginTop: `0 ${styles.margin[3]}`,
});
