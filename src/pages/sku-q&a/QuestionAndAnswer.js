import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchQuestionDetails,
  fetchQuestionSortByDetails,
  fetchQuestionByPage,
} from '../../slices/q&a.slice';
import { fetchSkuDetails } from '../../slices/sku.slice';
import SkuError from '../../components/sku-error/SkuError';
import ProductTitle from '../../components/product-title/ProductTitle';
import QATile from './q&aTile/QATile';
import { MenuItem, Typography } from '@mui/material';
import {
  BoxWrapper,
  SelectWrapper,
  ButtonWrapper,
  ErrorWrapper,
  SKUNameSkeletion,
  QATextSkeletion,
  NoOfQuestionTextSkeletion,
  SortBySkeletion,
} from './QuestionAndAnswer.styles';
import QATileLoadingSkeletion from './q&aTile/QATileLoadingSkeletion';
import { Box } from '@mui/system';
import Skeleton from '@mui/material/Skeleton';
import { skuErrorMessages } from '../../constants/errorMessages';
const options = [
  {
    name: 'Newest',
    value: 'Newest',
  },
  {
    name: 'Oldest',
    value: 'Oldest',
  },
  {
    name: 'Most Answers',
    value: 'MostAnswers',
  },
];
const getRemainingQuestions = (remainingQuestions) => {
  return remainingQuestions > 10 ? 10 : remainingQuestions;
};
const LoadingSkeleton = () => {
  return (
    <BoxWrapper>
      <SKUNameSkeletion />
      <Box display='flex' justifyContent='space-between'>
        <Skeleton width={60} />
        <Skeleton width={34} />
      </Box>
      <QATextSkeletion width={32} />
      <NoOfQuestionTextSkeletion width={84} />
      <SortBySkeletion height={56} width={330} />
      <QATileLoadingSkeletion />
      <QATileLoadingSkeletion />
      <QATileLoadingSkeletion />
    </BoxWrapper>
  );
};
function QuestionAndAnswer({ match }) {
  const dispatch = useDispatch();
  const {
    skuData,
    error: skuError,
    storeId,
    loading: skuLoading,
  } = useSelector((state) => state.sku);
  const { loading, questionsData, error } = useSelector(
    (state) => state.skuQuestions
  );
  const { reviewsData } = useSelector((state) => state.reviews);
  const [selectedOption, setSelectedOption] = useState(options[0].name);
  const [showingQuestions, setShowingQuestions] = useState(3);
  const [remainingQuestions, setRemainingQuestions] = useState(0);

  useEffect(() => {
    if (skuData?.id !== Number(match?.params?.id)) {
      dispatch(fetchSkuDetails(match?.params?.id, storeId));
    }
  }, [dispatch, match?.params?.id, skuData, storeId]);

  useEffect(() => {
    if (skuData != null) {
      dispatch(fetchQuestionDetails(skuData?.defaultProductId));
    }
  }, [dispatch, skuData]);

  useEffect(() => {
    if (questionsData != null) {
      setRemainingQuestions(
        questionsData?.paging.total_results -
          questionsData?.results.slice(0, showingQuestions).length
      );
    }
  }, [showingQuestions, questionsData]);

  const moreQuestionClickHandler = () => {
    if (questionsData?.paging?.next_page_url != null) {
      dispatch(
        fetchQuestionByPage(
          questionsData?.paging?.next_page_url,
          questionsData?.results
        )
      );
    }
    setShowingQuestions((prevState) => prevState + 10);
  };
  const sortByClickHandler = (e) => {
    setSelectedOption(e.target.value);
    dispatch(
      fetchQuestionSortByDetails(skuData?.defaultProductId, e.target.value)
    );
  };

  if (error || skuError) {
    return (
      <ErrorWrapper alignItems='center'>
        {error ? (
          <SkuError {...skuErrorMessages.unknown} />
        ) : (
          <SkuError {...skuError} />
        )}
      </ErrorWrapper>
    );
  }
  if (skuLoading) {
    return <LoadingSkeleton />;
  }
  return (
    <BoxWrapper>
      <ProductTitle
        title={skuData?.name}
        skuId={skuData?.id}
        rating={reviewsData?.results?.[0]?.rollup?.average_rating}
        ratingCount={reviewsData?.results?.[0]?.rollup?.review_count}
      />
      <Typography className='text'>Q&A</Typography>
      <Typography className='total-question'>
        {loading ? (
          <NoOfQuestionTextSkeletion width={84} />
        ) : (
          `1-${questionsData?.results.slice(0, showingQuestions).length} of 
          ${questionsData?.paging.total_results} Question`
        )}
      </Typography>
      <SelectWrapper value={selectedOption} onChange={sortByClickHandler}>
        {options.map((option) => (
          <MenuItem className='select' key={option.value} value={option.value}>
            {option.name}
          </MenuItem>
        ))}
      </SelectWrapper>
      {loading && (
        <>
          <QATileLoadingSkeletion />
          <QATileLoadingSkeletion />
          <QATileLoadingSkeletion />
        </>
      )}
      {questionsData?.results
        .slice(0, showingQuestions)
        .map((questionInfo, index) => (
          <QATile
            key={questionInfo.question_id}
            questionInfo={questionInfo}
            i={index}
          />
        ))}
      {loading && <QATileLoadingSkeletion />}
      {remainingQuestions > 0 ? (
        <>
          <Typography className='more-question-test'>
            {remainingQuestions} More Questions
          </Typography>
          <ButtonWrapper onClick={moreQuestionClickHandler}>
            VIEW NEXT {getRemainingQuestions(remainingQuestions)} QUESTIONS
          </ButtonWrapper>
        </>
      ) : null}

      <hr />
    </BoxWrapper>
  );
}

export default QuestionAndAnswer;
