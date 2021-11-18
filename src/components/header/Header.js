import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { useHistory } from 'react-router-dom';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import AppLogo from './../../assets/images/logo.svg';
import HomeIcon from './../../assets/icons/home.svg';
import { Logo, StyledAppBar, TakeCheckout } from './Header.styles';
import { showCheckoutHeader } from '../../utils/skuHelpers';
import PropTypes from 'prop-types';

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const Header = () => {
  const history = useHistory();
  return (
    <ElevationScroll>
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
            {showCheckoutHeader(history.location.pathname) ? (
              <TakeCheckout>Take Checkout</TakeCheckout>
            ) : (
              <Logo src={AppLogo} alt='The Container Store' />
            )}
          </Box>
        </Toolbar>
      </StyledAppBar>
    </ElevationScroll>
  );
};

export default Header;
