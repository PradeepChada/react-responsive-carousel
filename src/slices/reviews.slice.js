import * as reviewService from '../services/reviews.service';
import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  loading: false,
  reviewsData: null,
  error: null,
};

const reviewSlice = createSlice({
  name: 'reviews',
  initialState: INITIAL_STATE,
  reducers: {
    reviewsLoading: (state) => {
      state.loading = true;
    },
    reviewsSuccess: (state, action) => {
      state.loading = false;
      state.reviewDetails = action.payload;
    },
    reviewsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const actions = reviewSlice.actions;

export const fetchReviewDetails = (review) => (dispatch) => {
  dispatch(actions.reviewsLoading());
  reviewService
    .getReviewsData(review)
    .then((res) => {
      dispatch(actions.reviewsSuccess(res?.data));
    })
    .catch((err) => {
      dispatch(actions.reviewsFailure(err));
    });
};

export default reviewSlice;
