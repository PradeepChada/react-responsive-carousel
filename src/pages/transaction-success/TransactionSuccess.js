import React from 'react';
import {
  TextWrapper,
  Title,
  PageContainer,
  ButtonDone,
} from './TransactionSuccess.styles';
import { Box } from '@mui/system';
import { Button, Grid } from '@mui/material';
import SuccessIcon from './../../assets/icons/success.svg';

const Transaction = () => {
  return (
    <TextWrapper display='flex' flexDirection='column' alignItems='center'>
      <img src={SuccessIcon} alt='Success' />
      <Box textAlign='center'>
        <Title>Transaction Complete</Title>
      </Box>
    </TextWrapper>
  );
};

const TransactionComplete = ({ history }) => {
  return (
    <PageContainer>
      <Grid
        height='100%'
        container
        flexDirection='column'
        justifyContent='space-between'
        flex={1}
      >
        <Transaction />

        <Grid container rowSpacing={2} alignSelf='flex-end'>
          <Grid item xs={12}>
            <Button
              size='large'
              fullWidth
              variant='contained'
              onClick={() => history.pushState('/sku-checkout')}
            >
              {' '}
              NEW TAKE CHECKOUT
            </Button>
          </Grid>
          <Grid item xs={12} align='center'>
            <ButtonDone variant='text'>DONE</ButtonDone>
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default TransactionComplete;
