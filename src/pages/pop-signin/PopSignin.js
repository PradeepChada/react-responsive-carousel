import React, { useEffect, useState } from 'react';
import { PageContainer, BoxWrapper } from './PopSignin.styles';
import TextField from '@mui/material/TextField';
import {
  Button,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Skeleton,
  Typography,
  Box,
} from '@mui/material';
import {
  fetchPOPAccountDetailsByEmail,
  fetchPOPAccountDetailsByPhone,
  setMainPOPAccount,
  actions,
} from '../../slices/pop.slice';
import {
  capitalizeFirstLetter,
  getDigitOnly,
  getFirstPOPMemeber,
  getPOPAccountFullName,
  reFormPhone,
  validateEmail,
} from '../../utils/skuHelpers';
import { popAccountNotFound } from '../../constants/errorMessages';
import { useDispatch, useSelector } from 'react-redux';
const PopSignin = ({ history }) => {
  const [form, setShowForm] = useState(true);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [popAccount, setPOPAccount] = useState(null);
  const dispatch = useDispatch();
  const { accountDetails, loading, error, mainAccount } = useSelector(
    (state) => state.popAccount
  );
  const nextButtonHandler = () => {
    if (email.trim() !== '') {
      if (validateEmail(email.trim())) {
        setShowForm((prevState) => !prevState);
        dispatch(fetchPOPAccountDetailsByEmail(email.trim(), history));
      } else {
        dispatch(actions.failure(popAccountNotFound.email));
      }
    }
    if (phone.trim() !== '') {
      dispatch(
        fetchPOPAccountDetailsByPhone(getDigitOnly(phone.trim()), history)
      );
      setShowForm((prevState) => !prevState);
    }
  };
  const phoneInputChangeHandler = (e) => {
    const phoneValue = e.target.value;
    if (e.nativeEvent.inputType !== 'deleteContentBackward') {
      setPhone(reFormPhone(phoneValue));
    } else {
      setPhone(phoneValue);
    }
  };
  const confirmButtonHandler = () => {
    dispatch(setMainPOPAccount(popAccount));
    history.push('/sku-checkout');
  };
  useEffect(() => {
    if (accountDetails.length > 0) {
      setShowForm(false);
      setPOPAccount(getFirstPOPMemeber(accountDetails).emailAddress);
    }
  }, [accountDetails]);

  useEffect(() => {
    if (error != null) {
      setShowForm(true);
    }
  }, [error]);

  useEffect(() => {
    dispatch(actions.setErrorNull());
  }, [dispatch]);

  const showLoading = () => {
    return (
      <BoxWrapper>
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
      </BoxWrapper>
    );
  };
  const showForm = () => {
    return (
      <BoxWrapper>
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
              type='text'
              onChange={phoneInputChangeHandler}
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
      </BoxWrapper>
    );
  };
  const showPOPAccount = () => {
    if (loading) {
      return showLoading();
    } else {
      return (
        <BoxWrapper>
          <Box>
            <FormLabel component='legend'>
              Please confirm the customer’s email address.
            </FormLabel>
            <RadioGroup
              aria-label='accounts'
              name='radio-buttons-group'
              defaultValue={
                mainAccount
                  ? mainAccount
                  : getFirstPOPMemeber(accountDetails)?.emailAddress
              }
              onChange={(e) => setPOPAccount(e.target.value)}
            >
              {accountDetails.map((data) => {
                if (data.popMember === true) {
                  return (
                    <FormControlLabel
                      key={data.evId}
                      value={data.emailAddress}
                      control={<Radio />}
                      label={
                        <Typography>
                          {getPOPAccountFullName(
                            accountDetails,
                            data.emailAddress
                          )}
                          : {capitalizeFirstLetter(data.emailAddress)}
                        </Typography>
                      }
                    />
                  );
                } else {
                  return null;
                }
              })}
            </RadioGroup>
          </Box>
          <Box>
            <Button className='next-button' onClick={confirmButtonHandler}>
              CONFIRM
            </Button>
            <Button
              className='signup-button'
              onClick={() => setShowForm((prevState) => !prevState)}
            >
              BACK
            </Button>
          </Box>
        </BoxWrapper>
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
