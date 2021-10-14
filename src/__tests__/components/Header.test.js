import { render, screen, fireEvent } from '@testing-library/react';
import Header from '../../components/header/Header';

jest.mock('react-router-dom', () => ({
  useHistory: () => ({
    push: jest.fn(),
  }),
}));

describe('Testing Header component', () => {
  test('should render a snapshot', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });

  test('should render Home Icon and Logo', () => {
    render(<Header />);
    const logo = screen.getByAltText('The Container Store');
    expect(logo).toBeInTheDocument();
    const homeIcon = screen.getByTestId('home-icon');
    expect(homeIcon).toBeInTheDocument();
  });

  test('should navidate to homepage when click on logo', () => {
    render(<Header />);
    const homeIcon = screen.getByTestId('home-icon');
    fireEvent.click(homeIcon);
  });
});
