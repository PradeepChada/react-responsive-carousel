import * as React from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DialogPopup } from './CancelOrderPopup.styles';

const CancelOrderPopup = ({ showModal, handleClose }) => {
  const history = useHistory();
  const handleConfirm = () => {
    handleClose();
    history.push('/sku-checkout');
  };
  return (
    <DialogPopup
      fullWidth
      open={showModal}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    >
      <DialogTitle id='alert-dialog-title'>CANCEL ORDER?</DialogTitle>
      <DialogContent>
        <DialogContentText id='alert-dialog-description'>
          Your changes will not be saved.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button
          size='small'
          variant='contained'
          fullWidth
          onClick={handleConfirm}
        >
          YES
        </Button>
        <Button size='small' variant='outlined' fullWidth onClick={handleClose}>
          NO
        </Button>
      </DialogActions>
    </DialogPopup>
  );
};

export default CancelOrderPopup;
