import React, { useState } from 'react';
import { Tabs, Tab, Button, Grid, Typography } from '@mui/material';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import SuccessIcon from './../../assets/icons/success.svg';

import {
  PaymentWrapper,
  Wrapper,
  Title,
  ContentWrapper,
  Price,
  Image,
} from './PaymentSuccess.styles';

const Panel = (props) => (
  <Grid
    hidden={props.value !== props.index}
    sx={{ marginTop: '1.5rem', height: '100%' }}
  >
    {props.children}
  </Grid>
);

const PaymentTotal = () => {
  return (
    <PaymentWrapper display='flex' flexDirection='column' alignItems='center'>
      <Image src={SuccessIcon} alt='Success' />
      <Title>Payment Successful</Title>
      <Price>$12.90</Price>
    </PaymentWrapper>
  );
};

const PaymentPageText = ({ history }) => {
  const [index, setIndex] = useState(0);
  const onTabClicked = (_, i) => {
    setIndex(i);
  };
  return (
    <ContentWrapper>
      <Typography sx={{ letterSpacing: '0.2', marginBottom: '4px' }}>
        Receipt
      </Typography>
      {/* <AppBar position='static' color='default'> */}
      <Tabs value={index} variant='fullWidth' onChange={onTabClicked}>
        <Tab
          label='EMAIL'
          sx={{
            backgroundColor: 'white',
            fontWeight: '700',
            color: '#000000',
            letterSpacing: 2,
            border: '2px solid',
            borderColor: '#F6F6FA',
          }}
        />
        <Tab
          label='PRINT'
          sx={{
            backgroundColor: 'white',
            fontWeight: '700',
            color: '#000000',
            letterSpacing: 2,
            border: '2px solid',
            borderColor: '#F6F6FA',
          }}
        />
      </Tabs>
      {/* </AppBar> */}
      <Panel value={index} index={0}>
        <Grid
          className='tab-content'
          container
          rowSpacing={1}
          justifyContent='space-between'
        >
          <Grid item xs={12}>
            <TextField
              fullWidth
              label='Customer Email'
              value='csmith@gmail.com'
            />
          </Grid>
          <Grid item xs={12} alignItems='flex-end'>
            <Button
              size='large'
              fullWidth
              variant='contained'
              onClick={() => history.push('/transaction-success')}
            >
              EMAIL RECEIPT
            </Button>
          </Grid>
        </Grid>
      </Panel>
      <Panel value={index} index={1}>
        <Grid className='tab-content' container>
          <Grid item xs={12}>
            <FormLabel component='legend'>Available Printer(s)</FormLabel>
            <RadioGroup
              aria-label='payment'
              defaultValue='DeskJet 2700e'
              name='radio-buttons-group'
            >
              <FormControlLabel
                value='HP OfficeJet Pro 8000e'
                control={<Radio />}
                label='HP OfficeJet Pro 8000e'
              />
              <FormControlLabel
                value='DeskJet 2700e'
                control={<Radio />}
                label='DeskJet 2700e'
              />
            </RadioGroup>
          </Grid>
          <Grid item xs={12}>
            <Button
              size='large'
              fullWidth
              variant='contained'
              onClick={() => history.push('/transaction-success')}
            >
              PRINT RECEIPT
            </Button>
          </Grid>
        </Grid>
      </Panel>
    </ContentWrapper>
  );
};

function PaymentSuccess({ history }) {
  return (
    <Wrapper display='flex' flexDirection='column'>
      <PaymentTotal />
      <PaymentPageText history={history} />
    </Wrapper>
  );
}

export default PaymentSuccess;
