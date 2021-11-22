import { render, screen } from '@testing-library/react';
import SKUTile from '../../../../pages/sku-checkout/sku-tile/SKUTile';
import { getSKUTileInfo } from '../../../../utils/skuHelpers';
import { skuDetailsResponse } from '../../../../utils/MockData';
const skuInfo = skuDetailsResponse;
describe('Testing SKU tile component', () => {
  test('loading skeletion should be displayed when loading will be true', () => {
    render(<SKUTile skuInfo={skuInfo} loading={true} skuQuantity={0} />);

    const imageSkeleton = screen.getByTestId('image-skeleton');
    expect(imageSkeleton).toBeInTheDocument();

    const titleSkeleton = screen.getByTestId('title-skeleton');
    expect(titleSkeleton).toBeInTheDocument();

    const clearTextSkeleton = screen.getByTestId('clear-icon-skeleton');
    expect(clearTextSkeleton).toBeInTheDocument();

    const codeSkeleton = screen.getByTestId('code-skeleton');
    expect(codeSkeleton).toBeInTheDocument();

    const priceSkeleton = screen.getByTestId('price-skeleton');
    expect(priceSkeleton).toBeInTheDocument();

    const optionTextSkeleton = screen.getByTestId('option-text-skeleton');
    expect(optionTextSkeleton).toBeInTheDocument();
  });

  test('when SKU Tile Data should be displayed when sku data will be available', () => {
    render(
      <SKUTile
        skuInfo={getSKUTileInfo(skuInfo)}
        loading={false}
        skuQuantity={1}
      />
    );

    const skuTitle = screen.getByTestId('sku-title');
    expect(skuTitle).toBeInTheDocument();

    const skuCode = screen.getByText(skuInfo.id, { exact: false });
    expect(skuCode).toBeInTheDocument();

    const plusButton = screen.getByText('+');
    expect(plusButton).toBeInTheDocument();

    const skuQuantity = screen.getByText('1');
    expect(skuQuantity).toBeInTheDocument();

    const minusButton = screen.getByText('-');
    expect(minusButton).toBeInTheDocument();

    const skuPrice = screen.getByText(
      `$${skuInfo.skuPrices.maxSalePrice.amount}/ea`,
      {
        exact: false,
      }
    );
    expect(skuPrice).toBeInTheDocument();

    const optionText = screen.getByText('Options');
    expect(optionText).toBeInTheDocument();
  });
});
