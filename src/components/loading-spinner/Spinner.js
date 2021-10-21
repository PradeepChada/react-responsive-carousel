import React from 'react';
import { Wrapper, SpinnerParent, SpinnerChild } from './Spinner.styles';
import { useSelector } from 'react-redux';
const Spinner = () => {
  const { isActive } = useSelector((state) => state.spinner);
  if (!isActive) return null;
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
};

export default Spinner;
