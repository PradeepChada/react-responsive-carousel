import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { useHistory } from 'react-router-dom';
import AppLogo from './../../assets/images/logo.svg';
import HomeIcon from './../../assets/icons/home.svg';
import { Logo, StyledAppBar } from './Header.styles';

const Header = () => {
  const history = useHistory();
  return (
    <StyledAppBar position='sticky' color='inherit'>
      <Toolbar sx={{ alignItems: 'center' }}>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='open drawer'
          className='home-icon'
          sx={{ ml: 2 }}
          onClick={() => history.push('/')}
          data-testid='home-icon'
        >
          <img src={HomeIcon} alt='Home' />
        </IconButton>
        <Box sx={{ flexGrow: 1, justifyContent: 'center', display: 'flex' }}>
          <Logo src={AppLogo} alt='The Container Store' />
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default Header;
