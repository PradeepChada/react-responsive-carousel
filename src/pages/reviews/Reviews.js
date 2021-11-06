import { Typography, Box, LinearProgress, TextField,
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
  ResponseContent,ViewNextBtn, Dropdown

} from './Reviews.styles';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import PhotoGallery from './photo-gallery/PhotoGallery';
import ProductTitle from '../../components/product-title/ProductTitle';
import PhotoCarousel from './photo-carousel/PhotoCarousel';

const Reviews = ({ match }) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(1);

  const handleClickPhoto = (index) => {
    setPhotoIndex(index);
    setShowModal(true)
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const { reviewsData } = useSelector((state) => state.reviews);
  const { storeId, skuData } = useSelector((state) => state.sku);

  useEffect(() => {
    dispatch(fetchReviewDetails());
  }, []);
  console.log('Reviews =>', reviewsData);
  useEffect(() => {
    if (skuData?.id !== Number(match?.params?.id)) {
      dispatch(fetchSkuDetails(match?.params?.id, storeId));
    }
  }, [dispatch, match?.params?.id, skuData, storeId]);

  if (!reviewsData) return 'loading';
  return (
    <PageContainer>
        <PhotoCarousel data={reviewsData?.results?.[0]?.rollup?.media} handleClose={handleClose} />
      <ProductTitle
        title={skuData?.name}
        skuId={skuData?.id}
        rating={4}
        ratingCount={10}
      />
      <Title>Customer Reviews</Title>
      <RatingContainer>
        <Typography variant='h4'>4.6</Typography>
        <StyledRating name='read-only' value={4.6} size={'small'} readOnly />
        <div className='review-count'>out of 80 reviews</div>
        <div className='recomm'>
          <CheckCircleIcon />
          <span className='percentage'>96%</span>
          <span className='recomm-txt'>Recommend <br/> this product</span>
        </div>
        <Box className='rating-bars-container'>
          {Array(5)
            .fill(null)
            .map((_, i) => (
              <Box className='rating-bar'>
                <span className='rating-type'>{5 - i}</span>
                <StarIcon />
                <LinearProgress variant='determinate' value={(i + 1) * 16} />
                <span className='user-count'>{(i + 1) * 16}</span>
              </Box>
            ))}
        </Box>
      </RatingContainer>
      <GalleryBox>
        <Typography fontWeight='bold'>Customer Images</Typography>
        <PhotoGallery data={reviewsData?.results?.[0]?.rollup?.media} handleClick={handleClickPhoto} />
      </GalleryBox>

      <ReviewTitle>Most Recommended Review</ReviewTitle>

      <ReviewDetails>
        <ReviewName>
          Jessikida, <span>12 days ago</span>
        </ReviewName>

        <Rating
          className='rating-block'
          defaultValue={4.5}
          precision={0.5}
          readOnly
          size='small'
          emptyIcon={<StarIcon className='empty-rating' fontSize='inherit' />}
        />

        <ReviewFeature>Nice multi-functional organizers!</ReviewFeature>
        <ReviewContent>
          These are good quality wood boxes that are sanded down so as not to
          catch on clothing. I've used them in my closet...{' '}
          <span>Read More</span>
        </ReviewContent>
        <RecommendedContent>
          <RightIcon />
          <span>Recommended Product</span>
        </RecommendedContent>
      </ReviewDetails>
      <ReviewTitle>Most Helpful Critical Review</ReviewTitle>

      <ReviewDetails>
        <ReviewName>
          Jessikida, <span>12 days ago</span>
        </ReviewName>

        <Rating
          className='rating-block'
          defaultValue={1}
          precision={0.5}
          readOnly
          size='small'
          emptyIcon={<StarIcon className='empty-rating' fontSize='inherit' />}
        />

        <ReviewFeature>Didn't fit together</ReviewFeature>
        <ReviewContent>
          I thought this item was really nice looking and an affordable price.
          Got home, put it together half way and then found out that...{' '}
          <span>Read More</span>
        </ReviewContent>
        <RecommendedContent>
          <RightIcon />
          <span>Recommended Product</span>
        </RecommendedContent>
      </ReviewDetails>

      <ReviewCount>Reviewed by 80 customers</ReviewCount>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Most Relevant</InputLabel>
        <Dropdown label='Most Relevant'>
          <MenuItem value=''>Most Relevant</MenuItem>
        </Dropdown>
      </FormControl>
      <ReviewDetails>
        <Rating
          className='rating-block'
          defaultValue={1}
          precision={0.5}
          readOnly
          size='small'
          emptyIcon={<StarIcon className='empty-rating' fontSize='inherit' />}
        />

        <ReviewFeature>Think outside the (jewelry) box!</ReviewFeature>
        <SubmittedReview>
          {' '}
          Submitted <span className='duration'>12 days ago </span>By
          <span className='submitted-by'>Jessikida </span>
        </SubmittedReview>
        <ReviewContent>
          I just recently moved into my new office and wanted to deck out my
          space with creative ways of bringing texture, patterns...{' '}
          <span>Read More</span>
        </ReviewContent>
        <RecommendedContent>
          <RightIcon />
          <span>Recommended Product</span>
        </RecommendedContent>
      </ReviewDetails>
      <ReviewDetails>
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

      </ReviewDetails>
      <ReviewTitle className="review-count" >10 Reviews more</ReviewTitle>
      <ViewNextBtn variant="outlined" fullWidth>View next 10 Reviews</ViewNextBtn>
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
    </PageContainer>
  );
};

export default Reviews;
