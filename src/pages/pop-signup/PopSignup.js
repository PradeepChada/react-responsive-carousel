import React from 'react';
import { PageContainer } from './PopSignup.styles';
import TextField from '@mui/material/TextField';
import { Button, Grid, Typography } from '@mui/material';

const PopSignup = () => {
  return (
    <PageContainer>
      <Grid
        height='100%'
        container
        flexDirection='column'
        justifyContent='space-between'
        flex={1}
      >
        <Grid item>
          <Grid container alignItems='center' justifyContent='space-between'>
            <Grid item>
              <Typography>POP Account</Typography>
            </Grid>
            <Grid item>
              <Button variant='text'> SKIP</Button>
            </Grid>
          </Grid>

          <Grid container rowSpacing={1}>
            <Grid item xs={12}>
              <TextField fullWidth label='Email Address' />
            </Grid>
            <Grid item xs={12}>
              <Typography textAlign='center'>OR</Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label='Phone Number' />
            </Grid>
          </Grid>
        </Grid>

        <Grid item>
          <Grid container rowSpacing={1} alignSelf='flex-end'>
            <Grid item xs={12}>
              <Button size='large' fullWidth variant='contained'>
                {' '}
                NEXT
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth variant='outlined'>
                {' '}
                SIGNUP
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </PageContainer>
  );
};

export default PopSignup;
