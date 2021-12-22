import React from 'react';
import HomeTile from './home-tile/HomeTile';
import { LocationTile, PageContainer } from './HomePage.styles';
import ScanIcon from './../../assets/icons/scan.svg';
import CartIcon from './../../assets/icons/cart.svg';
import FeatureFlag from '../../components/feature-flag/FeatureFlag';
import { Button, Grid, Alert, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const HomePage = ({ history }) => {
  const { storeInfo } = useSelector((state) => state.store);
  const { profile } = useSelector((state) => state.auth);
  const storeName = storeInfo ? storeInfo?.name : '';

  const handleNavigate = (path) => {
    if (storeName) {
      history.push(path);
    }
  };
  return (
    <PageContainer>
      <LocationTile>
        <Grid container justifyContent='space-between'>
          <Grid item>
            <span>Store: {storeName || '--'}</span>
          </Grid>
          <Grid item>
            <Button
              variant='text'
              onClick={() => history.push('/store-search')}
            >
              Change
            </Button>
          </Grid>
        </Grid>
        {!storeName && (
          <Alert icon={false} severity='error'>
            Please select your store location before proceeding
          </Alert>
        )}
      </LocationTile>
      <div className='home-content'>
        <Typography variant='h5' className='profile-name'>
          Hi {profile?.firstName}!<Button>Signout</Button>
        </Typography>
        <FeatureFlag>
          <HomeTile
            className='inventory-tile'
            icon={ScanIcon}
            title='Price & Inventory Check'
            handleClick={() => handleNavigate('/sku-search')}
            data-testid='price-and-inventory'
            data-feature='price_check'
          />
        </FeatureFlag>
        <FeatureFlag>
          <HomeTile
            icon={CartIcon}
            title='Take Checkout'
            handleClick={() => handleNavigate('/pop-signin')}
            data-testid='take-checkout'
            data-feature='take_checkout'
          />
        </FeatureFlag>
      </div>
    </PageContainer>
  );
};

export default HomePage;
