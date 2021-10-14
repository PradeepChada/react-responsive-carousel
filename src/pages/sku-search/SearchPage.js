import React from 'react';
import SearchBar from '../sku-search/searchbar/SearchBar';
import {
  Wrapper,
  TextWrapper,
  Title,
  Description,
  SKUMalfunctionWrapper,
  ErrorIconWrapper,
  SKUMalfunctionText,
  SKUMalfunctionDescription,
  UnknownErrorWrapper,
  UnknownErrorText,
  UnknownErrorDescription,
} from './SearchPage.styles';

const SKUMalfunction = () => {
  return (
    <SKUMalfunctionWrapper
      display='flex'
      flexDirection='column'
      alignItems='center'
    >
      <ErrorIconWrapper />
      <SKUMalfunctionText>Search Malfunction</SKUMalfunctionText>
      <SKUMalfunctionDescription>
        Please enter SKU manually or check barcode
      </SKUMalfunctionDescription>
    </SKUMalfunctionWrapper>
  );
};

const UnKnownError = () => {
  return (
    <UnknownErrorWrapper
      display='flex'
      flexDirection='column'
      alignItems='center'
    >
      <ErrorIconWrapper />
      <UnknownErrorText>Unknown Error</UnknownErrorText>
      <UnknownErrorDescription>
        There was a technical error. Please try again.
      </UnknownErrorDescription>
    </UnknownErrorWrapper>
  );
};

const SearchPageText = () => {
  return (
    <TextWrapper display='flex' flexDirection='column' alignItems='center'>
      <Title>Scan Barcode or Type SKU</Title>
      <Description>
        Use the trigger on the device to scan a barcode or enter a SKU in the
        search field
      </Description>
    </TextWrapper>
  );
};

function SearchPage() {
  return (
    <Wrapper display='flex' flexDirection='column' alignItems='center'>
      <SearchBar />
      <SearchPageText />
      {/* <SKUMalfunction /> */}
      {/* <UnKnownError/> */}
      {/* <SkuTile skuInfo={null} skuQuantity={null} error={null} /> */}
    </Wrapper>
  );
}

export default SearchPage;
