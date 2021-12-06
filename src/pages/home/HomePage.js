import React from 'react';
import HomeTile from './home-tile/HomeTile';
import { LocationTile, PageContainer } from './HomePage.styles';
import ScanIcon from './../../assets/icons/scan.svg';
import CartIcon from './../../assets/icons/cart.svg';
import FeatureFlag from '../../components/feature-flag/FeatureFlag';
import { Button } from '@mui/material';

const HomePage = ({ history }) => {
  return (
    <PageContainer>
      <LocationTile>
        <span>Store: Arlington Highlands</span>
        <Button variant='text' onClick={() => history.push('/store-search')}>
          Change
        </Button>
      </LocationTile>
      <div className='home-content'>
        <FeatureFlag>
          <HomeTile
            className='inventory-tile'
            icon={ScanIcon}
            title='Price & Inventory Check'
            handleClick={() => history.push('/sku-search')}
            data-testid='price-and-inventory'
            data-feature='price_check'
          />
        </FeatureFlag>
        <FeatureFlag>
          <HomeTile
            icon={CartIcon}
            title='Take Checkout'
            handleClick={() => history.push('/pop-signin')}
            data-testid='take-checkout'
            data-feature='take_checkout'
          />
        </FeatureFlag>
      </div>
    </PageContainer>
  );
};

export default HomePage;
