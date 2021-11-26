import React from 'react';
import { PageContainer, Buttoncancel } from './PaymentFailure.styles';
import { Button, Grid } from '@mui/material';
import SkuError from '../../components/sku-error/SkuError';

const PaymentFailure = ({ history }) => {
  return (
    <PageContainer>
      <Grid
        height='100%'
        container
        flexDirection='column'
        justifyContent='space-between'
        flex={1}
      >
        <Grid
          className='error-wrapper'
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexGrow={1}
        >
          <SkuError size='large' title='Card Declined' />
        </Grid>

        <Grid container rowSpacing={2} alignSelf='flex-end'>
          <Grid item xs={12}>
            <Button
              size='large'
              fullWidth
              variant='contained'
              onClick={() => history.goBack()}
            >
              {' '}
              SWIPE AGAIN
            </Button>
          </Grid>
          <Grid marginTop={0} item xs={12} align='center'>
            <Buttoncancel fullWidth variant='text'>
              CANCEL ORDER
            </Buttoncancel>
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default PaymentFailure;
