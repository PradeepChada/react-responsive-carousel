import React, { useState } from 'react';
import {
  PaperWrapper,
  InputBaseWrapper,
  ClearText,
  IconButtonWrapper,
  SearchIconWraper,
} from './SearchBar.styles';

const SearchBar = ({ handleSearch, handleClear }) => {
  const [SKUCode, setSKUCode] = useState('');

  const onChangeHandler = (event) => {
    let input = event.target.value;
    if (input.includes('\n')) {
      input = input.replace('\n', '');
      handleSearch(input.trim());
      setSKUCode('');
    }
    setSKUCode(input);
  };

  const handleClearButtonClick = () => {
    setSKUCode('');
    handleClear();
  };

  const handleSearchButtonClick = (e) => {
    e.preventDefault();
    handleSearch(SKUCode.trim());
    setSKUCode('');
  };

  const onBlurInput = ({ target }) => {
    target.focus();
  };

  return (
    <PaperWrapper component='form'>
      <InputBaseWrapper
        placeholder='Scan barcode or enter SKU'
        inputProps={{ 'aria-label': 'sku-input' }}
        type='text'
        pattern='\d*'
        value={SKUCode}
        onChange={onChangeHandler}
        onBlur={onBlurInput}
        autoFocus
      />
      <ClearText onClick={handleClearButtonClick}>Clear</ClearText>
      <IconButtonWrapper
        type='submit'
        aria-label='search'
        data-testid='search-button'
        onClick={handleSearchButtonClick}
      >
        <SearchIconWraper />
      </IconButtonWrapper>
    </PaperWrapper>
  );
};

export default SearchBar;

SearchBar.defaultProps = {
  handleSearch: () => {},
  handleClear: () => {},
};
