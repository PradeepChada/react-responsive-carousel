import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrencyDetails } from '../../slices/currency.slice';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const CurrencyDetails = () => {
  const dispatch = useDispatch();
  const currencyList = useSelector((state) => state.currency.currencyDetails);
  useEffect(() => {
    dispatch(fetchCurrencyDetails('USD'));
  }, []);
  return (
    <div className='currency-details-container'>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2 }} variant='h6' component='div'>
            Currency Exchange Rates
          </Typography>
          <List dense>
            {currencyList.map((item) => (
              <ListItem>
                <ListItemText
                  primary={`Currency: ${item.currency}`}
                  secondary={`Exchange Rate: ${item.rate}`}
                />
              </ListItem>
            ))}
          </List>
        </Grid>
      </Grid>
    </div>
  );
};

export default CurrencyDetails;
