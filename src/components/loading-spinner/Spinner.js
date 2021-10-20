import React from 'react';
import './Spinner.css';
import { Wrapper, SpinnerParent, SpinnerChild } from './Spinner.styles';
function Spinner() {
  return (
    <Wrapper>
      <SpinnerParent>
        <SpinnerChild>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </SpinnerChild>
      </SpinnerParent>
    </Wrapper>
  );
}

export default Spinner;
