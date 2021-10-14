import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from "../../../../pages/sku-search/searchbar/SearchBar"

describe('Testing Search Bar component', () => {
  test('inital Render Condition', () => {
    render(<SearchBar />);

    const SKUInput = screen.getByLabelText('sku-input');
    expect(SKUInput.value).toBe('');

    const searchButton = screen.getByTestId('search-button');
    expect(searchButton).toBeInTheDocument();

    const clearButton = screen.getByText('Clear');
    expect(clearButton).toBeInTheDocument();
  });

  test('input value should be change ', () => {
    render(<SearchBar />);

    const val = '1234';
    const SKUInput = screen.getByLabelText('sku-input');

    fireEvent.change(SKUInput, { target: { value: val } });
    expect(SKUInput.value).toBe(val);
  });

  test('input should be empty when clear button/text is clicked', () => {
    render(<SearchBar />);

    const SKUInput = screen.getByLabelText('sku-input');
    const clearButton = screen.getByText('Clear');

    fireEvent.change(SKUInput, { target: { value: '1234' } });
    expect(SKUInput.value).toBe('1234');

    fireEvent.click(clearButton);
    expect(SKUInput.value).toBe('');
  });
});
