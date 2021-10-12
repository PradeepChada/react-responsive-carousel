import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import {styled} from '@mui/styles';

export const Logo = styled('img')({
    height: 21
});

export const IconWrapper = styled(IconButton)({
    position: 'absolute',
    margin: 'auto'
});

export const StyledAppBar = styled(AppBar)({
    backgroundColor: "#fff",
    boxShadow: 'none',
    marginBottom: 4
})