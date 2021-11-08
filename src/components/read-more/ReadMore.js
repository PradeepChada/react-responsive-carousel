import React, { useState } from 'react';
import { ToggleLink } from './ReadMore.styles';

const ReadMore = ({ text, maxLength }) => {
  const [expanded, setExpanded] = useState(false);

  return expanded ? (
    <>
      {text}
      <ToggleLink onClick={() => setExpanded(false)}>Read less</ToggleLink>
    </>
  ) : text?.length > maxLength ? (
    <>
      {text?.substring(0, maxLength)}...
      <ToggleLink onClick={() => setExpanded(true)}>Read more</ToggleLink>
    </>
  ) : (
    text
  );
};

export default ReadMore;


ReadMore.defaultProps = {
    text: '',
    maxLength: 178
}
