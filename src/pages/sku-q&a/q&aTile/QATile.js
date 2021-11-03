import React from 'react';
import { Typography } from '@mui/material';
import { BoxWrapper, Asker, Question, Answer } from './QATile.styles';
function QATile() {
  return (
    <BoxWrapper>
      <Asker>
        BJ Jones &middot; <span style={{ color: 'black' }}>8 days ago</span>
      </Asker>
      <Question>
        1. Can you confirm that the measurements in the images are wrong? It
        seems like the different sides are mislabled.
      </Question>
      <Answer>
        <Typography className='answerer'>
          <span style={{ fontWeight: '700' }}>LTM &middot;</span> 3 months ago
        </Typography>
        <Typography className='answerer-text'>
          The Marie Kondo Hikidashi Bamboo Drawer Organizers only have the label
          written on one side. Thank you for your question.
        </Typography>
      </Answer>
      <Typography className='view-more-answerer'>View 4 More Answer</Typography>
    </BoxWrapper>
  );
}

export default QATile;
