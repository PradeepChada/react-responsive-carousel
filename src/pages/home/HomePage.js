import React from 'react';
import HomeTile from './home-tile/HomeTile';
import { PageContainer } from './HomePage.styles';
import ScanIcon from './../../assets/icons/scan.svg';
import CartIcon from './../../assets/icons/cart.svg';

const HomePage = ({ history }) => {
  return (
    <PageContainer>
      <HomeTile
        className='inventory-tile'
        icon={ScanIcon}
        title='Price & Inventory Check'
        handleClick={() => history.push('/sku-search')}
        data-testId='price-and-inventory'
      />
      <HomeTile
        icon={CartIcon}
        title='Take Checkout'
        handleClick={() => history.push('/take-checkout')}
        data-testId='take-checkout'
      />
    </PageContainer>
  );
};

export default HomePage;
