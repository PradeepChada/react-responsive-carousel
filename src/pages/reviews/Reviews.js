import {
  Typography,
  Box,
  LinearProgress,
  Skeleton,
  InputLabel,
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
import RatingsBar from '../../components/ratings-bar/RatingsBar';
import { getReviewsApiUrl } from '../../utils/skuHelpers';

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
        <Box sx={{ marginLeft: 1, marginTop: 3 }}>
          <Skeleton
            height={77}
            width={80}
            sx={{ marginBottom: 1, transform: 'none', display: 'inline-block' }}
          />
          <Skeleton
            height={77}
            width={80}
            sx={{
              marginBottom: 1,
              marginLeft: 1,
              transform: 'none',
              display: 'inline-block',
            }}
          />
          <Skeleton
            height={77}
            width={80}
            sx={{ marginBottom: 1, transform: 'none', display: 'inline-block' }}
          />
          <Skeleton
            height={77}
            width={80}
            sx={{
              marginBottom: 1,
              marginLeft: 1,
              transform: 'none',
              display: 'inline-block',
            }}
          />
        </Box>
      </Box>
      <ReviewSkeleton />
    </Box>
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
  const { storeId, skuData } = useSelector((state) => state.sku);

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
    const url =
      reviewsData?.paging?.next_page_url +
      '&_noconfig=true&apikey=1199d38c-7e7c-4b4f-940b-16f6080509fc';
    dispatch(fetchReviewDetails(url, true));
  };

  if (!reviewsData) return loading ? <LoadingSkeleton /> : null;
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
        rating={rollup?.average_rating}
        ratingCount={10}
      />
      <Title>Customer Reviews</Title>
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
            <RatingsBar
              className='rating-block'
              rating={rollup?.faceoff_positive?.rating}
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
            <RatingsBar
              className='rating-block'
              rating={rollup?.faceoff_negative?.rating}
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
            <RatingsBar rating={item?.metrics?.rating} />
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
              {item?.details?.bottom_line === 'Yes' ? (
                <RightIcon />
              ) : (
                <CrossIcon />
              )}
              <span>
                {item?.details?.bottom_line === 'No' ? 'Not' : ''} Recommended
                Product
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
