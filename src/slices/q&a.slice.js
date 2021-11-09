import * as questionService from '../services/q&a.service';
import { createSlice } from '@reduxjs/toolkit';
  
const INITIAL_STATE = {
  loading: false,
  questionsData: null,
  error: null,
};

const questionSlice = createSlice({
  name: 'questions',
  initialState: INITIAL_STATE,
  reducers: {
    questionsLoading: (state) => {
      state.loading = true;
    },
    questionsSuccess: (state, action) => {
      state.loading = false;
      state.questionsData = action.payload;
    },
    questionsPageSuccess: (state, action) => {
      state.loading = false;
      state.questionsData = action.payload;
    },
    questionsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

const actions = questionSlice.actions;

export const fetchQuestionDetails = (productID) => (dispatch) => {
  dispatch(actions.questionsLoading());
  questionService
    .getQuestionsData(productID)
    .then((res) => {
      dispatch(actions.questionsSuccess(res?.data));
    })
    .catch((err) => {
      dispatch(actions.questionsFailure(err));
    });
};

export const fetchQuestionSortByDetails = (productID, sortBy) => (dispatch) => {
  dispatch(actions.questionsLoading());
  questionService
    .getQuestionsDataSortBy(productID, sortBy)
    .then((res) => {
      dispatch(actions.questionsSuccess(res?.data));
    })
    .catch((err) => {
      dispatch(actions.questionsFailure(err));
    });
};

export const fetchQuestionByPage = (nextPageURL, results) => (dispatch) => {
  dispatch(actions.questionsLoading());
  questionService
    .getQuestionDataByPage(nextPageURL)
    .then((res) => {
      dispatch(
        actions.questionsPageSuccess({
          ...res?.data,
          results: [...results, ...res?.data.results],
        })
      );
    })
    .catch((err) => {
      dispatch(actions.questionsFailure(err));
    });
};

export default questionSlice;
