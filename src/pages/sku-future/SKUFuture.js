import { Button, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { getDigitOnly } from '../../utils/skuHelpers';
import { Wrapper } from './SKUFuture.styles';
function SKUFuture() {
  const history = useHistory();
  const [skuQuantity, setSkuQuantity] = useState('');
  const inputHandler = ({ target }) => {
    const quantity = getDigitOnly(target.value);
    if (quantity < 10000) {
      setSkuQuantity(quantity);
    }
  };
  return (
    <Wrapper>
      <Box>
        <Typography>Future Availability Check</Typography>
        <Typography>
          Showing next available date for a desired quantity.
        </Typography>
        <TextField
          fullWidth
          label='Desired Quantity'
          placeholder='Desired Quantity'
          type='text'
          value={skuQuantity}
          onChange={inputHandler}
        />
        <Typography className='available'>
          45 will be available at Arlington Highlands on on 01/22/2022{' '}
        </Typography>
        <Typography className='not-available'>
          Backordered: This item may be available at other stores near you.
        </Typography>
      </Box>
      <Box display='flex' flexDirection='column' width='100%'>
        <Button className='search-button'>SEARCH</Button>
        <Button className='cancel-button' onClick={() => history.goBack()}>
          CANCEL
        </Button>
      </Box>
    </Wrapper>
  );
}

export default SKUFuture;
