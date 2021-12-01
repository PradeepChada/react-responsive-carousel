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
  fetchPOPAccountDetailsByPhone,
  setMainPOPAccount,
} from '../../slices/pop.slice';
import { getFirstPOPMemeber } from '../../utils/skuHelpers';
import { popAccountNotFound } from '../../constants/errorMessages';
import { useDispatch, useSelector } from 'react-redux';
const PopSignin = ({ history }) => {
  const [form, setShowForm] = useState(true);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [popAccount, setPOPAccount] = useState(null);
  const dispatch = useDispatch();
  const { accountDetails, loading, error } = useSelector(
    (state) => state.popAccount
  );

  const nextButtonHandler = () => {
    if (email.trim() !== '') {
      dispatch(fetchPOPAccountDetailsByEmail(email.trim()));
      setShowForm((prevState) => !prevState);
    }
    if (phone.trim() !== '') {
      dispatch(fetchPOPAccountDetailsByPhone(phone.trim()));
      setShowForm((prevState) => !prevState);
    }
  };

  const confirmButtonHandler = () => {
    dispatch(setMainPOPAccount(popAccount));
    history.push('/sku-checkout');
  };
  useEffect(() => {
    if (accountDetails.length > 0) {
      setShowForm(false);
    }
  }, [accountDetails]);
  useEffect(() => {
    if (error != null) {
      setShowForm(true);
    }
  }, [error]);
  useEffect(() => {
    if (accountDetails.length !== 0) {
      setPOPAccount(getFirstPOPMemeber(accountDetails).emailAddress);
    }
  }, [accountDetails]);
  const showLoading = () => {
    return (
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        height='100%'
      >
        <Box>
          <FormLabel component='legend'>
            <Skeleton variant='text' height={16} />
          </FormLabel>
          <Skeleton variant='text' height={16} />
          <Skeleton variant='text' height={16} />
        </Box>
        <Box>
          <Box className='next-button'>CONFIRM</Box>
          <Box className='signup-button'>BACK</Box>
        </Box>
      </Box>
    );
  };
  const showForm = () => {
    return (
      <Box
        display='flex'
        flexDirection='column'
        justifyContent='space-between'
        height='100%'
      >
        <Box>
          <Box>
            <TextField
              className={
                error === popAccountNotFound.email ? 'errorInput' : null
              }
              fullWidth
              label='Customer Email'
              placeholder='Customer Email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setPhone('')}
            />
            {error === popAccountNotFound.email && (
              <Typography className='error'>
                {popAccountNotFound.email}
              </Typography>
            )}
          </Box>
          <Typography className='or-text'>OR</Typography>
          <Box>
            <TextField
              className={
                error === popAccountNotFound.phone ? 'errorInput' : null
              }
              label='Customer Phone Number'
              fullWidth
              placeholder='Customer Phone Number'
              value={phone}
              type='number'
              onChange={(e) => setPhone(e.target.value)}
              onFocus={() => setEmail('')}
            />
            {error === popAccountNotFound.phone && (
              <Typography className='error'>
                {popAccountNotFound.phone}
              </Typography>
            )}
          </Box>
        </Box>
        <Box>
          <Box className='next-button' onClick={nextButtonHandler}>
            NEXT
          </Box>
          <Box className='signup-button'>SIGNUP</Box>
        </Box>
      </Box>
    );
  };
  const showPOPAccount = () => {
    if (loading) {
      return showLoading();
    } else {
      return (
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
          height='100%'
        >
          <Box>
            <FormLabel component='legend'>
              Please confirm the customer’s email address.
            </FormLabel>
            <RadioGroup
              aria-label='accounts'
              name='radio-buttons-group'
              defaultValue={getFirstPOPMemeber(accountDetails)?.emailAddress}
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
                } else {
                  return null;
                }
              })}
            </RadioGroup>
          </Box>
          <Box>
            <Box className='next-button' onClick={confirmButtonHandler}>
              CONFIRM
            </Box>
            <Box
              className='signup-button'
              onClick={() => setShowForm((prevState) => !prevState)}
            >
              BACK
            </Box>
          </Box>
        </Box>
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
