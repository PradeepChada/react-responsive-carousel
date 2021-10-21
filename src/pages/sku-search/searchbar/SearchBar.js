import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {
  PaperWrapper,
  InputBaseWrapper,
  ClearText,
  IconButtonWrapper,
} from './SearchBar.styles';

const SearchBar = ({ handleSearch, handleClear }) => {
  const [SKUCode, setSKUCode] = useState('');

  const onChangeHandler = (event) => {
    let input = event.target.value;
    if (input.includes('\n')) {
      input = input.replace('\n', '');
      handleSearch(input.trim());
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
        <SearchIcon />
      </IconButtonWrapper>
    </PaperWrapper>
  );
};

export default SearchBar;

SearchBar.defaultProps = {
  handleSearch: () => {},
  handleClear: () => {},
};
