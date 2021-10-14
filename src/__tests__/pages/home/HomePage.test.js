import { render, screen } from '@testing-library/react';
import HomePage from '../../pages/home/HomePage';

const props = {
  history: {
    push: jest.mock(),
  },
};

describe('Testing HomePage', () => {
  test('should render a snapshot', () => {
    const { container } = render(<HomePage {...props} />);
    expect(container).toMatchSnapshot();
  });

  test('should render Header and menu items', () => {
    render(<HomePage {...props} />);
    const scanBarcodeButton = screen.getByText('Price & Inventory Check');
    expect(scanBarcodeButton).toBeInTheDocument();
    const helpButton = screen.getByText('Help');
    expect(helpButton).toBeInTheDocument();
  });
});
