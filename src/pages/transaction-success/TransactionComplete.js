import React from 'react';
import {
  Content,
  Title,
  PageContainer,
  ButtonDone,
} from './TransactionComplete.styles';
import { Box } from '@mui/system';
import { Button, Grid } from '@mui/material';
import SuccessIcon from './../../assets/icons/success.svg';
import { useDispatch } from 'react-redux';
import { actions } from './../../slices/cart.slice';

const Transaction = () => {
  return (
    <Content display='flex' flexDirection='column' alignItems='center'>
      <img src={SuccessIcon} alt='Success' />
      <Box textAlign='center'>
        <Title>Transaction Complete</Title>
      </Box>
    </Content>
  );
};

const TransactionComplete = ({ history }) => {
  const dispatch = useDispatch();

  const onClickNewCheckout = () => {
    dispatch(actions.clearCart());
    history.push('/pop-signin');
  };

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
              onClick={onClickNewCheckout}
            >
              {' '}
              NEW TAKE CHECKOUT
            </Button>
          </Grid>
          <Grid item xs={12} align='center'>
            <ButtonDone variant='text' onClick={() => history.push('/')}>
              DONE
            </ButtonDone>
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default TransactionComplete;
