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
import { Divider, List, ListItem, ListItemText } from '@mui/material';

const NetworkInventory = ({ toggleDrawer, inventoryData }) => {
  const inventory = [
    { outlet: 'Staten Island', stock: 10 },
    { outlet: 'Paramus', stock: 0 },
    { outlet: 'Livingston', stock: 2 },
  ];
  return (
    <InventoryBox>
      <Title>Availability in Other Stores</Title>
      <span onClick={() => toggleDrawer(false)} className='close'>
        <CloseIcon />
      </span>
      <List className='list-block'>
        {inventory.map((outlet, index) => (
          <ListWrapper>
            <Divider className='divider-line' />
            <ListItem button key={index}>
              <ListItemText primary={outlet.outlet} className='outlet-info' />
              {outlet.stock > 0 ? (
                <ValueInStock>{outlet.stock} in Stock</ValueInStock>
              ) : (
                <ValueOutOfStock>Out of Stock</ValueOutOfStock>
              )}
            </ListItem>
          </ListWrapper>
        ))}
      </List>
    </InventoryBox>
  );
};

export default NetworkInventory;

NetworkInventory.prototypes = {
    toggleDrawer: PropTypes.func.isRequired,
    inventoryData: PropTypes.array
}

NetworkInventory.defaultProps = {
    inventoryData: []
}
