import { styled } from '@mui/styles';
import { Box } from '@mui/system';
import Select from '@mui/material/Select';
import { colors } from '../../utils/themeUtils';
import Button from '@mui/material/Button';

export const BoxWrapper = styled(Box)({
  padding: '8px 15px 0px 15px',
  '& .text': {
    fontSize: '18px',
    lineHeight: '22px',
    fontWeight: '700',
    color: colors.fontColor,
    marginTop: '25px',
  },
  '& .total-question': {
    fontSize: '16px',
    fontWeight: '400',
    color: colors.black,
    margin: '16px 0px',
  },
  '& .more-question-test': {
    fontsize: '14px',
    lineHeight: '17px',
    color: colors.black,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '16px',
  },
  '& .select': {
    border: '1px solid red',
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
  borderRadius: '4px',
  marginBottom: '16px',
  '& fieldset': {
    border: 'none',
  },
});

export const ButtonWrapper = styled(Button)({
  height: '48px',
  marginTop: '24px',
  color: colors['primary-blue'],
  border: `2px solid ${colors['primary-blue']}`,
  textTransform: 'capitalize',
  width: '100%',
  marginBottom: '33px',
});
