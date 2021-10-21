import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  isActive: false,
};

const spinnerSlice = createSlice({
  name: 'spinner',
  initialState: INITIAL_STATE,
  reducers: {
    onSpinner: (state) => {
      state.isActive = true;
    },
    offSpinner: (state) => {
      state.isActive = false;
    },
  },
});

const actions = spinnerSlice.actions;

export const setSpinnerOn = () => (dispatch) => {
  dispatch(actions.onSpinner());
};

export const setSpinnerOff = () => (dispatch) => {
  dispatch(actions.offSpinner());
};

export default spinnerSlice;
