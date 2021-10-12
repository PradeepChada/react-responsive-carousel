import { render, screen } from '@testing-library/react';
import Header from '../../components/header/Header';

describe('Testing Header component', () => {
  test('should render Home Icon and Logo', () => {
    render(<Header />);
    const logo = screen.getByAltText('The Container Store');
    expect(logo).toBeInTheDocument();
    const homeIcon = screen.getByTestId('home-icon');
    expect(homeIcon).toBeInTheDocument();
  });
});
