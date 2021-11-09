import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import { LoadingBoxWrapper, Answer } from './QATile.styles';
function QATileLoadingSkeletion() {
  return (
    <LoadingBoxWrapper>
      <Skeleton className='asker' variant='text' width={154} />
      <Skeleton variant='text' width={280} />
      <Skeleton variant='text' width={280} />
      <Skeleton variant='text' width={280} />
      <Skeleton className='question' variant='text' width={280} />
      <Answer>
        <Skeleton className="answerer" variant='text' width={190} />
        <Skeleton variant='text' />
        <Skeleton variant='text' />
        <Skeleton variant='text' />
      </Answer>

      <Skeleton className='view-more-answerer' variant='text' width={150} />
    </LoadingBoxWrapper>
  );
}

export default QATileLoadingSkeletion;
