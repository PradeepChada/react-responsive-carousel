import { render, screen, fireEvent } from '@testing-library/react';
import HomeTile from '../../pages/home/home-tile/HomeTile';

const props = {
  title: 'Price & Inventory Check',
  handleClick: jest.fn(),
};

describe('Testing HomePage', () => {
  test('should render a snapshot', () => {
    const { container } = render(<HomeTile {...props} />);
    expect(container).toMatchSnapshot();
  });

  test('should render Title', () => {
    render(<HomeTile {...props} />);
    const scanBarcodeButton = screen.getByText('Price & Inventory Check');
    expect(scanBarcodeButton).toBeInTheDocument();
  });

  test('should invoke handleClick prop', () => {
    render(<HomeTile {...props} />);
    fireEvent.click(screen.getByText('Price & Inventory Check'));
    expect(props.handleClick).toHaveBeenCalledTimes(1);
  });
});
