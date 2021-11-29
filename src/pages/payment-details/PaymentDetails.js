import React from 'react';
import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import {
  PageContainer,
  PaymentInfo,
  OrderSummary,
} from './PaymentDetails.styles';

function PaymentDetails({ history }) {
  return (
    <PageContainer>
      <PaymentInfo>
        <Box>
          <Typography>Finish / Pay</Typography>
          <Box>
            <Typography>Total</Typography>
            <Typography>$12.90</Typography>
          </Box>
        </Box>
        <Box>
          <Typography>POP! Member</Typography>
          <Typography onClick={() => history.push('/pop-signup')}>
            Carol Smith
          </Typography>
        </Box>
        <Box>
          <Typography>Order Discounts</Typography>
          <Typography>1 Applied</Typography>
        </Box>
        <Box>
          <FormLabel component='legend'>Payment</FormLabel>
          <RadioGroup
            aria-label='payment'
            defaultValue='credit/debitCard'
            name='radio-buttons-group'
          >
            <FormControlLabel
              value='credit/debitCard'
              control={<Radio />}
              label='Credit/Debit Card'
            />
            <FormControlLabel
              value='giftCard'
              control={<Radio />}
              label='Gift Card'
            />
          </RadioGroup>
        </Box>
      </PaymentInfo>
      <OrderSummary>
        <Typography>Order Summary</Typography>
        <Box className='subtotal-text'>
          <Typography>Subtotal</Typography>
          <Typography>$12.00</Typography>
        </Box>
        <Box className='discounts-text'>
          <Typography>Discounts</Typography>
          <Typography>-$0.71</Typography>
        </Box>
        <Box className='tax-text'>
          <Typography>Tax</Typography>
          <Typography>$0.90</Typography>
        </Box>
        <Box className='total-price-text'>
          <Typography>Total</Typography>
          <Typography>$12.90</Typography>
        </Box>
        <Button
          fullWidth
          variant='contained'
          onClick={() => history.push('/card-swipe')}
        >
          PAY NOW
        </Button>
      </OrderSummary>
    </PageContainer>
  );
}

export default PaymentDetails;
