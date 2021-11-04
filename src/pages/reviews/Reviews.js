import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { fetchReviewDetails } from '../../slices/reviews.slice';
import { PageContainer } from './Reviews.styles';

const Reviews = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchReviewDetails())
    },  [])
    return(
        <PageContainer>

        </PageContainer>
    )
}

export default Reviews;