import React from 'react';
import HomeTile from './home-tile/HomeTile';
import { PageContainer } from './HomePage.styles';
import ScanIcon from './../../assets/icons/scan.svg';
import CartIcon from './../../assets/icons/cart.svg';

const HomePage = ({ history }) => {
  return (
    <PageContainer>
      <HomeTile
        icon={ScanIcon}
        title='Price & Inventory Check'
        handleClick={() => history.push('/sku-search')}
      />
      <HomeTile
        icon={CartIcon}
        title='Take Checkout'
        handleClick={() => history.push('/pop-signup')}
      />
    </PageContainer>
  );
};

export default HomePage;
