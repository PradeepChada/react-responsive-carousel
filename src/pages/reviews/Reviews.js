import {
  Typography,
  Box,
  LinearProgress,
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Rating,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReviewDetails } from '../../slices/reviews.slice';
import { fetchSkuDetails } from '../../slices/sku.slice';
import {
  PageContainer,
  RatingContainer,
  Title,
  StyledRating,
  GalleryBox,
  ReviewTitle,
  ReviewFeature,
  ReviewName,
  ReviewDetails,
  ReviewContent,
  RightIcon,
  CrossIcon,
  RecommendedContent,
  ReviewCount,
  SubmittedReview,
  ResponseDuration,
  ResponseContent,
  ViewNextBtn,
  Dropdown,
} from './Reviews.styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import PhotoGallery from './photo-gallery/PhotoGallery';
import ProductTitle from '../../components/product-title/ProductTitle';
import PhotoCarousel from './photo-carousel/PhotoCarousel';
import ReadMore from '../../components/read-more/ReadMore';
import moment from 'moment';

const Reviews = ({ match }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(1);
  const [sort, setSort] = useState('MostHelpful');

  const handleClickPhoto = (index) => {
    setPhotoIndex(index);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const getUrl = () => {
    return `/m/1093761574/l/en_US/product/${11006558}/reviews?sort=MostHelpful&_noconfig=true&apikey=1199d38c-7e7c-4b4f-940b-16f6080509fc`;
  };

  const { reviewsData } = useSelector((state) => state.reviews);
  const { storeId, skuData } = useSelector((state) => state.sku);

  useEffect(() => {
    const url = getUrl();
    dispatch(fetchReviewDetails(url));
  }, []);

  console.log('Reviews =>', reviewsData);

  useEffect(() => {
    if (skuData?.id !== Number(match?.params?.id)) {
      dispatch(fetchSkuDetails(match?.params?.id, storeId));
    }
  }, [dispatch, match?.params?.id, skuData, storeId]);

  const onChangeSort = (e) => {
    setSort(e.target.value);
  };

  const onClickNextPage = () => {
    const url = reviewsData?.paging?.next_page_url+"&_noconfig=true&apikey=1199d38c-7e7c-4b4f-940b-16f6080509fc";
    dispatch(fetchReviewDetails(url));
  };

  if (!reviewsData) return 'loading';
  const { reviews, rollup } = reviewsData?.results?.[0];
  const ratings = ([...rollup?.rating_histogram] || []).reverse();
  const reviewsRemainig =
    reviewsData?.paging?.total_results -
    reviewsData?.paging?.current_page_number * reviewsData?.paging?.page_size;
  return (
    <PageContainer>
      <PhotoCarousel
        showModal={showModal}
        data={reviewsData?.results?.[0]?.rollup?.media}
        photoIndex={photoIndex}
        handleClose={handleClose}
      />
      <ProductTitle
        title={skuData?.name}
        skuId={skuData?.id}
        rating={4}
        ratingCount={10}
      />
      <Title>Customer Reviews</Title>
      <RatingContainer>
        <Typography variant='h4'>
          {rollup?.average_rating?.toFixed(1)}
        </Typography>
        <StyledRating
          name='read-only'
          value={rollup?.average_rating}
          size={'small'}
          readOnly
        />
        <div className='review-count'>
          out of {rollup?.review_count} reviews
        </div>
        <div className='recomm'>
          <CheckCircleIcon />
          <span className='percentage'>{rollup?.recommended_ratio * 100}%</span>
          <span className='recomm-txt'>
            Recommend <br /> this product
          </span>
        </div>
        <Box className='rating-bars-container'>
          {ratings?.map((val, i) => (
            <Box className='rating-bar'>
              <span className='rating-type'>{5 - i}</span>
              <StarIcon />
              <LinearProgress
                variant='determinate'
                value={(val / rollup?.review_count) * 100}
              />
              <span className='user-count'>{val}</span>
            </Box>
          ))}
        </Box>
      </RatingContainer>
      {reviewsData?.results?.[0]?.rollup?.media?.length > 0 && (
        <GalleryBox>
          <Typography fontWeight='bold'>Customer Images</Typography>
          <PhotoGallery
            data={reviewsData?.results?.[0]?.rollup?.media}
            handleClick={handleClickPhoto}
          />
        </GalleryBox>
      )}
      {rollup?.faceoff_positive && (
        <>
          <ReviewTitle>Most Recommended Review</ReviewTitle>
          <ReviewDetails>
            <ReviewName>
              Jessikida, <span>12 days ago</span>
            </ReviewName>
            <Rating
              className='rating-block'
              value={rollup?.faceoff_positive?.rating}
              precision={0.5}
              readOnly
              size='small'
              emptyIcon={
                <StarIcon className='empty-rating' fontSize='inherit' />
              }
            />
            <ReviewFeature>{rollup?.faceoff_positive?.headline}</ReviewFeature>
            <ReviewContent>
              <ReadMore text={rollup?.faceoff_positive?.comments} />
            </ReviewContent>
            <RecommendedContent>
              <RightIcon />
              <span>Recommended Product</span>
            </RecommendedContent>
          </ReviewDetails>
        </>
      )}

      {rollup?.faceoff_negative && (
        <>
          <ReviewTitle>Most Helpful Critical Review</ReviewTitle>

          <ReviewDetails>
            <ReviewName>
              Jessikida, <span>12 days ago</span>
            </ReviewName>
            <Rating
              className='rating-block'
              value={rollup?.faceoff_negative?.rating}
              precision={0.5}
              readOnly
              size='small'
              emptyIcon={
                <StarIcon className='empty-rating' fontSize='inherit' />
              }
            />
            <ReviewFeature>{rollup?.faceoff_negative?.headline}</ReviewFeature>
            <ReviewContent>
              <ReadMore text={rollup?.faceoff_negative?.comments} />
            </ReviewContent>
            <RecommendedContent>
              <RightIcon />
              <span>Recommended Product</span>
            </RecommendedContent>
          </ReviewDetails>
        </>
      )}

      <ReviewCount>Reviewed by 80 customers</ReviewCount>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Most Relevant</InputLabel>
        <Dropdown label='Most Relevant' value={sort} onChange={onChangeSort}>
          <MenuItem value='Newest'>Most Recent</MenuItem>
          <MenuItem value='MostHelpful'>Most Recommended</MenuItem>
        </Dropdown>
      </FormControl>

      {reviews?.map((item) => {
        return (
          <ReviewDetails key={item?.internal_review_id}>
            <Rating
              className='rating-block'
              value={item?.metrics?.rating}
              precision={0.5}
              readOnly
              size='small'
              emptyIcon={
                <StarIcon className='empty-rating' fontSize='inherit' />
              }
            />
            <ReviewFeature>{item?.details?.headline}</ReviewFeature>
            <SubmittedReview>
              {' '}
              Submitted{' '}
              <span className='duration'>
                {moment(item?.details?.updated_date).fromNow()}{' '}
              </span>
              By
              <span className='submitted-by'>{item?.details?.nickname} </span>
            </SubmittedReview>
            <ReviewContent>
              <ReadMore text={item?.details?.comments} />
            </ReviewContent>
            <RecommendedContent>
              <RightIcon />
              <span>Recommended Product</span>
            </RecommendedContent>
          </ReviewDetails>
        );
      })}
      {/* <ReviewDetails>
        <Rating
          className='rating-block'
          defaultValue={4.5}
          precision={0.5}
          readOnly
          size='small'
          emptyIcon={<StarIcon className='empty-rating' fontSize='inherit' />}
        />

        <ReviewFeature>Super cute and keeps food fresh!</ReviewFeature>
        <SubmittedReview>
          {' '}
          Submitted <span className='duration'>12 days ago </span>By
          <span className='submitted-by'>Berrtpatch Bunch</span>
        </SubmittedReview>
        <ReviewContent>
          I bought one of these about 6 years ago, lid cracked after my kiddo
          climbed on it. We looked for a replacement for a long time...{' '}
          <span>Read More</span>
        </ReviewContent>
        <RecommendedContent>
          <CrossIcon />
          <span>NoT Recommended Product</span>
        </RecommendedContent>
        <ResponseDuration>22 days ago </ResponseDuration>
        <ResponseContent>
          We are sorry to disappoint you. While the retail marketplace is ever
          fluctuating, we always strive to provide our customers quality
          products that will last at a competitive price.
        </ResponseContent>
      </ReviewDetails> */}
      <ReviewTitle className='review-count'>
        {reviewsRemainig} Reviews more
      </ReviewTitle>
      {reviewsRemainig && (
        <ViewNextBtn variant='outlined' fullWidth onClick={onClickNextPage}>
          View next 10 Reviews
        </ViewNextBtn>
      )}
    </PageContainer>
  );
};

export default Reviews;
