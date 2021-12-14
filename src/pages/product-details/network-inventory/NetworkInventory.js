import React from 'react';
import PropTypes from 'prop-types';
import {
  InventoryBox,
  ListWrapper,
  Title,
  ValueInStock,
  ValueOutOfStock,
} from './NetworkInventory.styles';
import CloseIcon from '@mui/icons-material/Close';
import {
  List,
  ListItem,
  ListItemText,
  Skeleton,
  Typography,
} from '@mui/material';

const showLoading = () => {
  return (
    <ListWrapper>
      <Skeleton sx={{ marginTop: 2 }} height={30} />
      {Array(5)
        .fill('1')
        .map((v, i) => (
          <Skeleton height={20} key={i} sx={{ marginTop: 2 }} />
        ))}
    </ListWrapper>
  );
};
const showError = () => {
  return <Typography>Inventory details not available</Typography>;
};

const NetworkInventory = ({ toggleDrawer, data, loading, error }) => {
  return (
    <InventoryBox>
      <Title>
        Availability in Other Stores{' '}
        <span onClick={() => toggleDrawer(false)} className='close'>
          <CloseIcon />
        </span>
      </Title>

      <List className='list-block'>
        {loading && !error && showLoading()}
        {error && !loading && showError()}
        {!error &&
          !loading &&
          (data.length ? (
            data?.map((outlet, index) => (
              <ListItem button key={index} className='list-item'>
                <ListItemText
                  primary={outlet.storeName}
                  className='outlet-info'
                />
                {outlet.quantity ? (
                  <ValueInStock>{outlet.quantity} Available</ValueInStock>
                ) : (
                  <ValueOutOfStock>Out of Stock</ValueOutOfStock>
                )}
              </ListItem>
            ))
          ) : (
            <Typography variant='h2'>
              Product is not available in other stores
            </Typography>
          ))}
      </List>
    </InventoryBox>
  );
};

export default NetworkInventory;

NetworkInventory.prototypes = {
  toggleDrawer: PropTypes.func.isRequired,
  data: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.object,
};

NetworkInventory.defaultProps = {
  inventoryData: [],
};
