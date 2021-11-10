import {
  Typography,
  Box,
  LinearProgress,
  Skeleton,
  MenuItem,
  FormControl,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchReviewDetails } from '../../slices/reviews.slice';
import { fetchSkuDetails } from '../../slices/sku.slice';
import {
  PageContainer,
  RatingContainer,
  Title,
  GalleryBox,
  ReviewTitle,
  ReviewFeature,
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
import RatingsBar from '../../components/ratings-bar/RatingsBar';
import { getReviewsApiUrl } from '../../utils/skuHelpers';
import config from './../../config';

const ReviewSkeleton = () => {
  return (
    <Box padding={1}>
      <Skeleton height={15} width={150} sx={{ marginTop: 1 }} />
      <Skeleton height={20} width={80} sx={{ marginTop: 1 }} />
      <Skeleton height={10} sx={{ marginTop: 1 }} />
      <Skeleton height={10} sx={{ marginTop: 1 }} />
      <Skeleton height={10} sx={{ marginTop: 1 }} />
      <Skeleton height={10} sx={{ marginTop: 1 }} />
    </Box>
  );
};

const LoadingSkeleton = () => {
  return (
    <Box padding={1}>
      <Skeleton variant='rectangular' height={16} />
      <Box
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        marginTop={'5px'}
        marginBottom={1}
      >
        <div />
        <Skeleton variant='rectangular' width={60} height={10} />
      </Box>
      <Skeleton height={10} sx={{ marginTop: 3, transform: 'none' }} />
      <Box display='flex' alignItems='center' flexDirection='column'>
        <Skeleton
          height={30}
          width={80}
          sx={{ marginTop: 5, transform: 'none', textAlign: 'center' }}
        />
        <Skeleton height={20} width={130} sx={{ marginTop: 1 }} />
        <Skeleton height={10} width={180} sx={{ marginTop: 1 }} />
        <Skeleton height={10} width={180} sx={{ marginTop: 1 }} />
        <Skeleton height={10} width={180} sx={{ marginTop: 1 }} />
        <Skeleton height={10} width={180} sx={{ marginTop: 1 }} />
        <Skeleton height={10} width={180} sx={{ marginTop: 1 }} />
      </Box>

      <Box display='flex'>
        <Skeleton
          height={160}
          width={280}
          sx={{ marginTop: 3, transform: 'none' }}
        />
        <Box
          sx={{
            marginLeft: 1,
            marginTop: 3,
            flexWrap: 'wrap',
            display: 'flex',
          }}
        >
          <Skeleton
            height={77}
            width={80}
            sx={{ marginBottom: 1, transform: 'none' }}
          />
          <Skeleton
            height={77}
            width={80}
            sx={{
              marginBottom: 1,
              marginLeft: 1,
              transform: 'none',
            }}
          />
          <Skeleton
            height={77}
            width={80}
            sx={{ marginBottom: 1, transform: 'none' }}
          />
          <Skeleton
            height={77}
            width={80}
            sx={{
              marginBottom: 1,
              marginLeft: 1,
              transform: 'none',
            }}
          />
        </Box>
      </Box>
      <ReviewSkeleton />
    </Box>
  );
};

const ReviewCard = ({ item }) => {
  return (
    <ReviewDetails>
      <RatingsBar rating={item?.metrics?.rating} />
      <ReviewFeature>{item?.details?.headline}</ReviewFeature>
      <SubmittedReview>
        {' '}
        Submitted{' '}
        <span className='duration'>
          {moment(item?.details?.created_date).fromNow()}{' '}
        </span>
        By
        <span className='submitted-by'>{item?.details?.nickname} </span>
      </SubmittedReview>
      <ReviewContent>
        <ReadMore text={item?.details?.comments} />
      </ReviewContent>
      <Box className='review-images'>
        {item?.media?.map((obj) => (
          <img src={obj.uri} alt={obj.caption} />
        ))}
      </Box>
      <RecommendedContent>
        {item?.details?.bottom_line === 'Yes' ? <RightIcon /> : <CrossIcon />}
        <span>
          {item?.details?.bottom_line === 'No' ? 'Not' : ''} Recommended Product
        </span>
      </RecommendedContent>
      {item?.details?.merchant_response && (
        <>
          <ResponseDuration>
            {moment(item?.details?.merchant_response_date).fromNow()}
          </ResponseDuration>
          <ResponseContent>
            <ReadMore text={item?.details?.merchant_response} />
          </ResponseContent>
        </>
      )}
    </ReviewDetails>
  );
};

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

  const { reviewsData, loading } = useSelector((state) => state.reviews);
  const {
    storeId,
    skuData,
    loading: skuLoading,
  } = useSelector((state) => state.sku);

  useEffect(() => {
    if (skuData?.id !== Number(match?.params?.id)) {
      dispatch(fetchSkuDetails(match?.params?.id, storeId));
    }
  }, [dispatch, match?.params?.id, skuData, storeId]);

  const onChangeSort = (e) => {
    setSort(e.target.value);
    const url = getReviewsApiUrl(skuData?.defaultProductId, e.target.value);
    dispatch(fetchReviewDetails(url));
  };

  const onClickNextPage = () => {
    const url = `${reviewsData?.paging?.next_page_url}
      &_noconfig=true&apikey=${config.appConfig.power_review_api_key}`;
    dispatch(fetchReviewDetails(url, true));
  };

  if (loading || skuLoading) {
    return <LoadingSkeleton />;
  }
  const { reviews, rollup } = reviewsData?.results?.[0] || {};
  const ratings = [...(rollup?.rating_histogram || [])].reverse();
  const reviewsRemainig =
    reviewsData?.paging?.total_results -
    reviewsData?.paging?.current_page_number * reviewsData?.paging?.page_size;

  const nextReviewsLength = reviewsRemainig < 10 ? reviewsRemainig : 10;
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
        rating={rollup?.average_rating}
        ratingCount={rollup?.review_count}
      />
      <Title>Customer Reviews</Title>
      {reviewsData ? (
        <>
          <RatingContainer>
            <Typography variant='h4'>
              {rollup?.average_rating?.toFixed(1)}
            </Typography>
            <RatingsBar rating={rollup?.average_rating} />
            <div className='review-count'>
              out of {rollup?.review_count} reviews
            </div>
            <div className='recomm'>
              <CheckCircleIcon />
              <span className='percentage'>
                {rollup?.recommended_ratio * 100}%
              </span>
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
                <RatingsBar
                  className='rating-block'
                  rating={rollup?.faceoff_positive?.rating}
                />
                <ReviewFeature>
                  {rollup?.faceoff_positive?.headline}
                </ReviewFeature>
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
                <RatingsBar
                  className='rating-block'
                  rating={rollup?.faceoff_negative?.rating}
                />
                <ReviewFeature>
                  {rollup?.faceoff_negative?.headline}
                </ReviewFeature>
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
            <Dropdown value={sort} onChange={onChangeSort}>
              <MenuItem value='Newest'>Most Recent</MenuItem>
              <MenuItem value='MostHelpful'>Most Recommended</MenuItem>
            </Dropdown>
          </FormControl>
          {reviews?.map((item) => (
            <ReviewCard key={item?.internal_review_id} item={item} />
          ))}
          {reviewsData?.paging?.next_page_url && (
            <ReviewTitle className='review-count'>
              {reviewsRemainig} Reviews more
            </ReviewTitle>
          )}
          {reviewsData?.paging?.next_page_url && (
            <ViewNextBtn variant='outlined' fullWidth onClick={onClickNextPage}>
              View next {nextReviewsLength} Reviews
            </ViewNextBtn>
          )}
        </>
      ) : (
        <Typography>
          Reviews and Ratings are not available for the Sku
        </Typography>
      )}
    </PageContainer>
  );
};

export default Reviews;
