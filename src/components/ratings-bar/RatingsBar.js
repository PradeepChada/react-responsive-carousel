import React from 'react';
import PropTypes from 'prop-types';
import StarIcon from '@mui/icons-material/Star';
import { StyledRating } from './RatingsBar.styles';

const RatingsBar = ({ rating, rest }) => {
  return (
    <StyledRating
      name='read-only'
      value={rating}
      size={'small'}
      precision={0.5}
      emptyIcon={<StarIcon className='empty-rating' fontSize='inherit' />}
      readOnly
      {...rest}
    />
  );
};

export default RatingsBar;

RatingsBar.propTypes = {
  rating: PropTypes.number.isRequired,
};

RatingsBar.defaultProps = {
  rating: 0,
};
