import React, { useEffect, useState } from 'react';
import { PageContainer } from './PopSignin.styles';
import TextField from '@mui/material/TextField';
import {
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Skeleton,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import {
  fetchPOPAccountDetailsByEmail,
  setMainPOPAccount,
} from '../../slices/pop.slice';
import { getFirstPOPMemeber } from '../../utils/skuHelpers';
import { useDispatch, useSelector } from 'react-redux';
const PopSignin = ({ history }) => {
  const [form, setShowForm] = useState(true);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [popAccount, setPOPAccount] = useState(null);
  const dispatch = useDispatch();
  const { accountDetails, loading} = useSelector(
    (state) => state.popAccount
  );

  const nextButtonHandler = () => {
    dispatch(fetchPOPAccountDetailsByEmail(email));
    setShowForm((prevState) => !prevState);
  };

  const confirmButtonHandler = () => {
    dispatch(setMainPOPAccount(popAccount));
    history.push('/sku-checkout');
  };
  useEffect(() => {
    if (accountDetails.length > 0) {
      setShowForm(false);
    }
  }, []);
  useEffect(() => {
    if (accountDetails.length !== 0) {
      setPOPAccount(getFirstPOPMemeber(accountDetails).emailAddress);
    }
  }, [accountDetails]);
  const showLoading = () => {
    return (
      <>
        <FormLabel component='legend'>
          Please confirm the customer’s email address.
        </FormLabel>
        <Skeleton variant='text' height={16} />
        <Skeleton variant='text' height={16} />
        <Box className='next-button'>CONFIRM</Box>
        <Box className='signup-button'>BACK</Box>
      </>
    );
  };
  const showForm = () => {
    return (
      <>
        <Box>
          <TextField
            fullWidth
            placeholder='Customer Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <Typography className='or-text'>OR</Typography>
        <Box>
          <TextField
            fullWidth
            placeholder='Customer Phone Number'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Box>
        <Box className='next-button' onClick={nextButtonHandler}>
          NEXT
        </Box>
        <Box className='signup-button'>SIGNUP</Box>
      </>
    );
  };
  const showPOPAccount = () => {
    if (loading) {
      return showLoading();
    } else {
      return (
        <>
          <FormLabel component='legend'>
            Please confirm the customer’s email address.
          </FormLabel>
          <RadioGroup
            aria-label='accounts'
            name='radio-buttons-group'
            defaultValue={getFirstPOPMemeber(accountDetails).emailAddress}
            onChange={(e) => setPOPAccount(e.target.value)}
          >
            {accountDetails.map((data) => {
              if (data.popMember === true) {
                return (
                  <FormControlLabel
                    key={data.evId}
                    value={data.emailAddress}
                    control={<Radio />}
                    label={data.emailAddress}
                  />
                );
              }
            })}
          </RadioGroup>
          <Box className='next-button' onClick={confirmButtonHandler}>
            CONFIRM
          </Box>
          <Box
            className='signup-button'
            onClick={() => setShowForm((prevState) => !prevState)}
          >
            BACK
          </Box>
        </>
      );
    }
  };

  return (
    <PageContainer>
      <Box display='flex' justifyContent='space-between'>
        <Typography className='pop-account-text'>POP Account</Typography>
        <Typography
          className='skip-text'
          onClick={() => history.push('/sku-checkout')}
        >
          SKIP
        </Typography>
      </Box>
      {form ? showForm() : showPOPAccount()}
    </PageContainer>
  );
};

export default PopSignin;
