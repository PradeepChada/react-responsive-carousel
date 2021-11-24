import React from 'react';
import HomeTile from './home-tile/HomeTile';
import { PageContainer } from './HomePage.styles';
import ScanIcon from './../../assets/icons/scan.svg';
import CartIcon from './../../assets/icons/cart.svg';
import FeatureFlag from '../../components/feature-flag/FeatureFlag';

const HomePage = ({ history }) => {
  return (
    <PageContainer>
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
          handleClick={() => history.push('/pop-signup')}
          data-testid='take-checkout'
          data-feature='take_checkout'
        />
      </FeatureFlag>
    </PageContainer>
  );
};

export default HomePage;
