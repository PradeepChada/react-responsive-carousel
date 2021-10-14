import React from 'react';
import HomeTile from './home-tile/HomeTile';
import { PageContainer } from './HomePage.styles';
import ScanIcon from './../../assets/icons/scan.svg';
import HelpIcon from './../../assets/icons/help.svg';

const HomePage = ({ history }) => {
  return (
    <PageContainer>
      <HomeTile
        icon={ScanIcon}
        title='Price & Inventory Check'
        handleClick={() => history.push('/sku-search')}
      />
      <HomeTile icon={HelpIcon} title='Help' />
    </PageContainer>
  );
};

export default HomePage;
