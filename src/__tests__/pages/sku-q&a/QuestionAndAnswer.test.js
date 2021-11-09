import { render, screen, fireEvent } from '@testing-library/react';
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
        text: 'These bags can be cleaned using a dishwasher or by hand-washing.',
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
      ugc_id: 380510586,
      answer_id: '7169236',
      details: {
        nickname: 'beneel',
        location: 'USA',
        text: 'These bags can be cleaned using a dishwasher or by hand-washing.',
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
      ugc_id: 380510586,
      answer_id: '7169237',
      details: {
        nickname: 'beneel',
        location: 'USA',
        text: 'These bags can be cleaned using a dishwasher or by hand-washing.',
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
  ],
  answer_count: 1,
};

describe('Testing Search Bar component', () => {
  test('inital Render Condition', () => {
    render(<QATile questionInfo={mockData} i={0} />);

    const askerNameText = screen.getByText(mockData.details.nickname, {
      exact: false,
    });
    expect(askerNameText).toHaveTextContent(mockData.details.nickname);

    const questionTimeText = screen.getByText(
      moment(mockData.details.created_date).fromNow()
    );
    expect(questionTimeText).toHaveTextContent(
      moment(mockData.details.created_date).fromNow()
    );

    const questionText = screen.getByText(mockData.details.text, {
      exact: false,
    });
    expect(questionText).toHaveTextContent(mockData.details.text);

    const answererNameText = screen.getByText(
      mockData.answer[0].details.nickname,
      {
        exact: false,
      }
    );
    expect(answererNameText).toHaveTextContent(
      mockData.answer[0].details.nickname
    );

    const answerTimeText = screen.getByText(
      moment(mockData.answer[0].details.created_date).fromNow()
    );
    expect(answerTimeText).toHaveTextContent(
      moment(mockData.answer[0].details.created_date).fromNow()
    );

    const answerText = screen.getByText(mockData.answer[0].details.text, {
      exact: false,
    });
    expect(answerText).toHaveTextContent(mockData.answer[0].details.text);
  });

  test('view more answer text should be displayed when multiple answer will be available', () => {
    render(<QATile questionInfo={mockData} i={0} />);

    const askerNameText = screen.getByText(mockData.details.nickname, {
      exact: false,
    });
    expect(askerNameText).toHaveTextContent(mockData.details.nickname);

    const questionTimeText = screen.getByText(
      moment(mockData.details.created_date).fromNow()
    );
    expect(questionTimeText).toHaveTextContent(
      moment(mockData.details.created_date).fromNow()
    );

    const questionText = screen.getByText(mockData.details.text, {
      exact: false,
    });
    expect(questionText).toHaveTextContent(mockData.details.text);

    const answererNameText = screen.getByText(
      mockData.answer[0].details.nickname,
      {
        exact: false,
      }
    );
    expect(answererNameText).toHaveTextContent(
      mockData.answer[0].details.nickname
    );

    const answerTimeText = screen.getByText(
      moment(mockData.answer[0].details.created_date).fromNow()
    );
    expect(answerTimeText).toHaveTextContent(
      moment(mockData.answer[0].details.created_date).fromNow()
    );

    const answerText = screen.getByText(mockData.answer[0].details.text, {
      exact: false,
    });
    expect(answerText).toHaveTextContent(mockData.answer[0].details.text);

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
