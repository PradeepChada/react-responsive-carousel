import { styled } from '@mui/styles';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { colors, font, styles } from '../../utils/themeUtils';

export const ClearText = styled('span')({
  color: colors.brandBlue,
  textDecoration: 'underline',
  cursor: 'pointer',
  fontSize: font.size[12],
  marginRight: styles.margin[2],
});

export const PaperWrapper = styled(Paper)({
  display: styles.display.flex,
  alignItems: styles.align.center,
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
  fontSize: font.size[14],
  marginLeft: '0.75rem',
  color: colors.textBlack,
  fontWeight: font.weight[400],
});
