import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import {
  PaperWrapper,
  InputBaseWrapper,
  ClearText,
  IconButtonWrapper,
} from './SearchBar.styles';

function SearchBar() {
  const [SKUCode, setSKUCode] = useState('');
  const handleSearchButtonClick = (event) => {
    event.preventDefault();
  };

  const onChangeHandler = (event) => {
    let input = event.target.value;
    if (input.includes('\n')) {
      input = input.replace('\n', '');
    }
    setSKUCode(event.target.value);
  };

  const handleClearButtonClick = () => {
    setSKUCode('');
  };
  return (
    <PaperWrapper component='form'>
      <InputBaseWrapper
        placeholder='Scan barcode or enter SKU'
        inputProps={{ 'aria-label': 'sku-input' }}
        value={SKUCode}
        onChange={onChangeHandler}
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
}

export default SearchBar;
