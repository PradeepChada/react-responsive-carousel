import { render, screen, fireEvent } from '@testing-library/react';
import SkuTile from '../../../components/sku-tile/SkuTile';
import SKUImg from '../../../assets/images/SKUImage.png';
import { skuErrorMessages } from '../../../constants/errorMessages';
const skuInfo = {
  SKUImg: SKUImg,
  price: 6.99,
  skuTitle: 'OXO 0.2 qt. Mini Square POP Container',
  skuCode: 10075031,
};

describe('Testing SKU tile component', () => {
  test('inital Render Condition', () => {
    render(<SkuTile skuInfo={null} skuQuantity={null} error={null} />);

    const imageSkeleton = screen.getByTestId('image-skeleton');
    expect(imageSkeleton).toBeInTheDocument();

    const priceSkeleton = screen.getByTestId('price-skeleton');
    expect(priceSkeleton).toBeInTheDocument();

    const titleSkeleton = screen.getByTestId('title-skeleton');
    expect(titleSkeleton).toBeInTheDocument();

    const stockSkeleton = screen.getByTestId('stock-skeleton');
    expect(stockSkeleton).toBeInTheDocument();

    const codeSkeleton = screen.getByTestId('code-skeleton');
    expect(codeSkeleton).toBeInTheDocument();
  });

  test('stock skeleton should be displayed when stock will getting from server', () => {
    render(<SkuTile skuInfo={skuInfo} skuQuantity={null} error={null} />);

    const skuImage = screen.getByAltText(/SKUImage/i);
    expect(skuImage).toBeInTheDocument();

    const skuPriceText = screen.getByText(/ea/i);
    expect(skuPriceText).toHaveTextContent(`${skuInfo.price}/ea`);
    expect(skuPriceText).toBeInTheDocument();

    const skuTitleText = screen.getByTestId('sku-title');
    expect(skuTitleText).toHaveTextContent(skuInfo.skuTitle);
    expect(skuTitleText).toBeInTheDocument();

    const stockSkeleton = screen.getByTestId('stock-skeleton');
    expect(stockSkeleton).toBeInTheDocument();

    const skuCodeText = screen.getByText(/SKU: #/i);
    expect(skuCodeText).toHaveTextContent(`SKU: #${skuInfo.skuCode}`);
    expect(skuCodeText).toBeInTheDocument();
  });

  test('stock error message should be displayed when stock data will not available ', () => {
    render(
      <SkuTile
        skuInfo={skuInfo}
        skuQuantity={null}
        error={skuErrorMessages.inventory}
      />
    );

    const skuImage = screen.getByAltText(/SKUImage/i);
    expect(skuImage).toBeInTheDocument();

    const skuPriceText = screen.getByText(/\/ea/i);
    expect(skuPriceText).toHaveTextContent(`${skuInfo.price}/ea`);
    expect(skuPriceText).toBeInTheDocument();

    const skuTitleText = screen.getByTestId('sku-title');
    expect(skuTitleText).toHaveTextContent(skuInfo.skuTitle);
    expect(skuTitleText).toBeInTheDocument();

    const stockErrorMessage = screen.getByText(/Availability information is /i);
    expect(stockErrorMessage).toBeInTheDocument();

    const skuCodeText = screen.getByText(/SKU: #/i);
    expect(skuCodeText).toHaveTextContent(`SKU: #${skuInfo.skuCode}`);
    expect(skuCodeText).toBeInTheDocument();
  });

  test('all skeleton should be displayed when sku details will not available and sku quanitity will available  ', () => {
    render(<SkuTile skuInfo={null} skuQuantity={9} error={null} />);

    const imageSkeleton = screen.getByTestId('image-skeleton');
    expect(imageSkeleton).toBeInTheDocument();

    const priceSkeleton = screen.getByTestId('price-skeleton');
    expect(priceSkeleton).toBeInTheDocument();

    const titleSkeleton = screen.getByTestId('title-skeleton');
    expect(titleSkeleton).toBeInTheDocument();

    const stockSkeleton = screen.getByTestId('stock-skeleton');
    expect(stockSkeleton).toBeInTheDocument();

    const codeSkeleton = screen.getByTestId('code-skeleton');
    expect(codeSkeleton).toBeInTheDocument();
  });

  test('all sku tile data  should be displayed when sku details will  available and sku quanitity will available  ', () => {
    render(<SkuTile skuInfo={skuInfo} skuQuantity={10} error={null} />);

    const skuImage = screen.getByAltText(/SKUImage/i);
    expect(skuImage).toBeInTheDocument();

    const skuPriceText = screen.getByText(/ea/i);
    expect(skuPriceText).toHaveTextContent(`${skuInfo.price}/ea`);
    expect(skuPriceText).toBeInTheDocument();

    const skuTitleText = screen.getByTestId('sku-title');
    expect(skuTitleText).toHaveTextContent(skuInfo.skuTitle);
    expect(skuTitleText).toBeInTheDocument();

    const currentStockText = screen.getByText(/Stock/i);
    expect(currentStockText).toHaveTextContent(`10 in Stock`);
    expect(currentStockText).toBeInTheDocument();

    const skuCodeText = screen.getByText(/SKU: #/i);
    expect(skuCodeText).toHaveTextContent(`SKU: #${skuInfo.skuCode}`);
    expect(skuCodeText).toBeInTheDocument();
  });
});
