import { render, screen } from '@testing-library/react';
import QATile from '../../../../pages/sku-q&a/q&aTile/QATile';
import moment from 'moment';
const mockData = {
  ugc_id: 380507831,
  question_id: '8123156',
  details: {
    nickname: 'migb',
    created_date: 1629812604000,
    text: 'How do you clean these before reusing?',
    location: 'Ashtabula, OH',
    product_page_id: '11014345',
    is_seeded: false,
  },
  answer: [
    {
      ugc_id: 380510586,
      answer_id: '7169235',
      details: {
        nickname: 'beneel',
        location: 'USA',
        text: 'These bags can hand-washing.',
        is_verified: true,
        is_expert: false,
        author_type: 'COMMUNITY',
        created_date: 1631382272000,
      },
      metrics: {
        helpful_votes: 0,
        not_helpful_votes: 0,
      },
    },
    {
      ugc_id: 380510587,
      answer_id: '7169236',
      details: {
        nickname: 'ceneel',
        location: 'USA',
        text: 'These bags dishwasher or by hand-washing.',
        is_verified: true,
        is_expert: false,
        author_type: 'COMMUNITY',
        created_date: 1631382272450,
      },
      metrics: {
        helpful_votes: 1,
        not_helpful_votes: 2,
      },
    },
  ],
  answer_count: 2,
};
const askerName = mockData.details.nickname;
const askerTime = moment(mockData.details.created_date).fromNow();
const question = mockData.details.text;
const answererName = mockData.answer[0].details.nickname;
const answererTime = moment(mockData.answer[0].details.created_date).fromNow();
const answer = mockData.answer[0].details.text;
describe('Testing Search Bar component', () => {
  test('inital Render Condition', () => {
    render(<QATile questionInfo={mockData} i={0} />);

    const askerNameText = screen.getByText(askerName, {
      exact: false,
    });
    expect(askerNameText).toHaveTextContent(askerName);

    const questionTimeText = screen.getByText(askerTime);
    expect(questionTimeText).toHaveTextContent(askerTime);

    const questionText = screen.getByText(question, {
      exact: false,
    });
    expect(questionText).toHaveTextContent(question);

    const answererNameText = screen.getByText(answererName, {
      exact: false,
    });
    expect(answererNameText).toHaveTextContent(answererName);

    const answerTimeText = screen.getByText(answererTime);
    expect(answerTimeText).toHaveTextContent(answererTime);

    const answerText = screen.getByText(answer, {
      exact: false,
    });
    expect(answerText).toHaveTextContent(answer);
  });

  test('view more answer text should be displayed when multiple answer will be available', () => {
    render(<QATile questionInfo={mockData} i={0} />);

    const askerNameText = screen.getByText(askerName, {
      exact: false,
    });
    expect(askerNameText).toHaveTextContent(askerName);

    const questionTimeText = screen.getByText(askerTime);
    expect(questionTimeText).toHaveTextContent(askerTime);

    const questionText = screen.getByText(question, {
      exact: false,
    });
    expect(questionText).toHaveTextContent(question);

    const answererNameText = screen.getByText(answererName, {
      exact: false,
    });
    expect(answererNameText).toHaveTextContent(answererName);

    const answerTimeText = screen.getByText(answererTime);
    expect(answerTimeText).toHaveTextContent(answererTime);

    const answerText = screen.getByText(answer, {
      exact: false,
    });
    expect(answerText).toHaveTextContent(answer);

    const viewMoreAnswerText = screen.getByText(
      `View ${parseInt(mockData.answer.length - 1)} More Answers`,
      {
        exact: false,
      }
    );
    expect(viewMoreAnswerText).toHaveTextContent(
      `View ${parseInt(mockData.answer.length - 1)} More Answers`
    );
  });
});
