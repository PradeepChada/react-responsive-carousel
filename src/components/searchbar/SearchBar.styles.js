import { styled } from '@mui/styles';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { colors } from '../../utils/themeUtils';

export const ClearText = styled('span')({
  color: colors.brandBlue,
  textDecoration: 'underline',
  cursor: 'pointer',
  fontSize: '0.75rem',
  marginRight: '0.5rem',
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
  color: colors.brandBlue,
  height: '35px',
  '&:enabled': {
    backgroundColor: colors.lightGray,
  },
});

export const SearchIconWraper = styled(SearchIcon)({
  height: '15.36px',
  width: '14.66px',
});

export const InputBaseWrapper = styled(InputBase)({
  ml: 1,
  flex: 1,
  fontSize: '0.875rem',
  marginLeft: '0.75rem',
  color: colors.textBlack,
  fontWeight: '400',
});
