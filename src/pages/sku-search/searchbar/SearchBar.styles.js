import { styled } from '@mui/styles';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import { colors } from '../../../utils/themeUtils';

export const ClearText = styled('span')({
  color: colors.primary,
  textDecoration: 'underline',
  cursor: 'pointer',
  fontSize: '12px',
  marginRight: '8.04px',
  lineHeight: '18px',
});

export const PaperWrapper = styled(Paper)({
  display: 'flex',
  alignItems: 'center',
  width: '100%',
  border: `1px solid ${colors.gray81}`,
  boxShadow: 'none',
  borderRadius: '4px',
  height: '35px',
});

export const IconButtonWrapper = styled(IconButton)({
  backgroundColor: colors.lightGray,
  borderRadius: '0 4px 4px 0',
  color: colors.primary,
  height: '35px',
});

export const InputBaseWrapper = styled(InputBase)({
  ml: 1,
  flex: 1,
  fontSize: '14px',
  marginLeft: '11px',
  color: colors.fontColor,
  fontWeight: '400',
  lineHeight: '18px',
});
