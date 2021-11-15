import { render, screen, fireEvent } from '../../../test-utils/testUtils';
import SKUCheckout from '../../../pages/sku-checkout/SKUCheckout';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { skuDetailsResponse } from '../../../utils/MockData';
const handlers = [
  //   rest.get('/v1/sku', (req, res, ctx) => {
  //     console.log('req', req);
  //     return res(ctx.json(skuDetailsResponse), ctx.delay(150));
  //   }),
];

// const server = setupServer(...handlers);

describe('Testing SKU Checkout Page', () => {
  test('inital Condition', () => {
    render(<SKUCheckout />);

    const searchBarComponent = screen.getByTestId('search-bar-component');
    expect(searchBarComponent).toBeInTheDocument();

    const scanText = screen.getByText(/Scan Barcode or Type SKU/i);
    expect(scanText).toBeInTheDocument();

    const orderDiscountsOption = screen.getByText(/Order Discounts/i);
    expect(orderDiscountsOption).toBeInTheDocument();

    const upArrow = screen.getByTestId('total-up-arrow');
    expect(upArrow).toBeInTheDocument();

    const finishPayButton = screen.getByText('PAY', { exact: false });
    expect(finishPayButton).toBeInTheDocument();
  });

  test('SKU Tile should be displayed when sku will scanned', async () => {
    render(<SKUCheckout />);

    const skuInput = screen.getByLabelText('sku-input');
    expect(skuInput).toBeInTheDocument();

    const searchButton = screen.getByTestId('search-button');
    expect(searchButton).toBeInTheDocument();

    fireEvent.change(skuInput, { target: { value: '10069202' } });

    fireEvent.click(searchButton);
  });
});
