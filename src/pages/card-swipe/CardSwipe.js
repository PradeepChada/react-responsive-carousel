import React, { useEffect } from 'react';
import {
  PaymentWrapper,
  Description,
  Wrapper,
  Title,
  Amount,
  TextWrapper,
  Decoration,
} from './CardSwipe.styles';

const flag = true;
const PaymentTotal = () => {
  return (
    <PaymentWrapper display='flex' flexDirection='column' alignItems='center'>
      <Title>Total</Title>
      <Amount>$12.90</Amount>
    </PaymentWrapper>
  );
};

const PaymentPageText = ({ handleClick, history }) => {
  return (
    <TextWrapper display='flex' flexDirection='column' alignItems='center'>
      {!flag ? (
        <Description>
          Please swipe the
          <br />
          Gift Card
        </Description>
      ) : (
        <Description onClick={() => history.push('/payment-failure')}>
          Please swipe the
          <br />
          Credit/Debit Card
        </Description>
      )}
      {!flag && (
        <Decoration onClick={handleClick}>Manually Enter Gift Card</Decoration>
      )}
    </TextWrapper>
  );
};

const CardSwipe = ({ history }) => {
  useEffect(() => {
    setTimeout(() => {
      history.push('/payment-success');
    }, 5000);
  }, [history]);
  return (
    <Wrapper display='flex' flexDirection='column' alignItems='center'>
      <PaymentTotal />
      <PaymentPageText
        handleClick={() => history.push('/')}
        history={history}
      />
    </Wrapper>
  );
};

export default CardSwipe;
