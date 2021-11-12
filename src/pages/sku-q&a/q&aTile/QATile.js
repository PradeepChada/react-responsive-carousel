import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { BoxWrapper, Asker, Question, Answer } from './QATile.styles';
import moment from 'moment';
function QATile({ questionInfo, i }) {
  const { answer, details } = questionInfo;
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    setAnswers(answer?.slice(0, 1));
  }, [answer]);
  const viewMoreClick = () => {
    setAnswers(answer);
  };
  return (
    <BoxWrapper>
      <Asker>
        {details?.nickname} &middot;&nbsp;
        <span style={{ color: 'black' }}>
          {moment(details?.created_date).fromNow()}
        </span>
      </Asker>
      <Question>
        {i + 1}. {details?.text}
      </Question>
      {answers?.map((data) => (
        <Answer key={data.answer_id}>
          <Typography className='answerer'>
            <span style={{ fontWeight: '700' }}>
              {data?.details?.nickname} &middot;
            </span>&nbsp;
            {moment(data?.details?.created_date).fromNow()}
          </Typography>
          <Typography className='answerer-text'>
            {data?.details?.text}
          </Typography>
        </Answer>
      ))}

      {answer.length === answers.length ? null : (
        <Typography className='view-more-answerer' onClick={viewMoreClick}>
          View {answer?.length - answers?.length} More Answers
        </Typography>
      )}
    </BoxWrapper>
  );
}

export default QATile;
