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
import { List, ListItem, ListItemText, Skeleton } from '@mui/material';

const NetworkInventory = ({ toggleDrawer, data, loading }) => {
  return (
    <InventoryBox>
      <Title>
        Availability in Other Stores{' '}
        <span onClick={() => toggleDrawer(false)} className='close'>
          <CloseIcon />
        </span>
      </Title>

      <List className='list-block'>
        {loading ? (
          <ListWrapper>
            <Skeleton sx={{ marginTop: 2 }} height={30} />
            <Skeleton height={30} />
          </ListWrapper>
        ) : (
          data?.map((outlet, index) => (
            <ListItem button key={index} className='list-item'>
              <ListItemText
                primary={outlet.storeName}
                className='outlet-info'
              />
              {outlet.quantity ? (
                <ValueInStock>{outlet.quantity} in Stock</ValueInStock>
              ) : (
                <ValueOutOfStock>Out of Stock</ValueOutOfStock>
              )}
            </ListItem>
          ))
        )}
      </List>
    </InventoryBox>
  );
};

export default NetworkInventory;

NetworkInventory.prototypes = {
  toggleDrawer: PropTypes.func.isRequired,
  data: PropTypes.array,
};

NetworkInventory.defaultProps = {
  inventoryData: [],
};
