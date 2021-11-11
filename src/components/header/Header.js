import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useHistory } from 'react-router-dom';
import AppLogo from './../../assets/images/logo.svg';
import HomeIcon from './../../assets/icons/home.svg';
import {
  Logo,
  StyledAppBar,
  IconWrapper,
  TakeCheckout,
  CancelOrderButton,
} from './Header.styles';
import {
  showCheckoutHeader,
  showCancelOrderButton,
} from '../../utils/skuHelpers';

const Header = () => {
  const history = useHistory();
  console.log(history, showCheckoutHeader(history.location.pathname));
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position='static'>
        <Toolbar sx={{ alignItems: 'center' }}>
          <IconWrapper
            size='large'
            edge='start'
            color='inherit'
            aria-label='open drawer'
            sx={{ ml: 2 }}
            onClick={() => history.push('/')}
            data-testid='home-icon'
          >
            <img src={HomeIcon} alt='Home' />
          </IconWrapper>
          <Box sx={{ flexGrow: 1, justifyContent: 'center', display: 'flex' }}>
            {showCheckoutHeader(history.location.pathname) ? (
              <TakeCheckout>Take Checkout</TakeCheckout>
            ) : (
              <Logo src={AppLogo} alt='The Container Store' />
            )}
          </Box>
          {showCancelOrderButton(history.location.pathname) && (
            <CancelOrderButton>Cancel Order</CancelOrderButton>
          )}
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
};

export default Header;
