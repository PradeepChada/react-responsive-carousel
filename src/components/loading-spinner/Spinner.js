import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, SpinnerParent, SpinnerChild } from './Spinner.styles';
const Spinner = ({ isActive }) => {
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

Spinner.propTypes = {
  isActive: PropTypes.bool.isRequired,
};
