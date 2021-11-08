import * as reviewService from '../services/reviews.service';
import { createSlice } from '@reduxjs/toolkit';
import MOCK_DATA from './../utils/ReviewsMock.json';

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
      // if(state.reviewsData){
      //   state.reviewsData = {...ac}
      // }
    },
    reviewsSuccess: (state, action) => {
      state.loading = false;
  
      state.reviewsData = action.payload;
    },
    reviewsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const actions = reviewSlice.actions;

export const fetchReviewDetails = (url) => (dispatch, getState) => {
  // return dispatch(actions.reviewsSuccess(MOCK_DATA));

  dispatch(actions.reviewsLoading());
  reviewService
    .getReviewsData(url)
    .then((res) => {
      const {reviews} = getState();
      if(reviews?.reviewsData){
        res.data.results[0].reviews =  [
          ...(reviews?.reviewsData?.results?.[0]?.reviews || []),
          ...res.data?.results?.[0]?.reviews,
        ];
        res.data.results[0].rollup = reviews?.reviewsData?.results?.[0]?.rollup
      }
      dispatch(actions.reviewsSuccess(res?.data));
    })
    .catch((err) => {
      dispatch(actions.reviewsFailure(err));
    });
};

export default reviewSlice;
