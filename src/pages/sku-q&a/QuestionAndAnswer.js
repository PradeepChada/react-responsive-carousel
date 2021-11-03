import React, { useState } from 'react';
import ProductTitle from '../../components/product-title/ProductTitle';
import QATile from './q&aTile/QATile';

import { MenuItem, Typography } from '@mui/material';
import {
  BoxWrapper,
  SelectWrapper,
  ButtonWrapper,
} from './QuestionAndAnswer.styles';
// import QATileLoadingSkeletion from './q&aTile/QATileLoadingSkeletion';
const options = ['Newest', 'Oldest', 'Most Answer'];
function QuestionAndAnswer() {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  return (
    <BoxWrapper>
      <ProductTitle
        title={'Mercer Entryway Storage Bench Rustic Driftwood'}
        skuId={10069202}
      />
      <Typography className='text'>Q&A</Typography>
      <Typography className='total-question'>1-3 of 15 Question</Typography>
      <SelectWrapper
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
      >
        {options.map((option) => (
          <MenuItem className='select' key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </SelectWrapper>
      <QATile />
      <QATile />
      <QATile />
      <Typography className='more-question-test'>15 More Questions</Typography>
      <ButtonWrapper>VIEW NEXT 10 QUESTIONS</ButtonWrapper>
      <hr />
    </BoxWrapper>
  );
}

export default QuestionAndAnswer;
