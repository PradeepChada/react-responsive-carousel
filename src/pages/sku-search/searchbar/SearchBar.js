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
  const handleSearchButtonClick = (event) => {
    event.preventDefault();
  };

  const onChangeHandler = (event) => {
    let input = event.target.value;
    setSKUCode(input.trim());
  };

  const handleClearButtonClick = () => {
    setSKUCode('');
    handleClear();
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
        <SearchIcon onClick={() => handleSearch(SKUCode)} />
      </IconButtonWrapper>
    </PaperWrapper>
  );
}

export default SearchBar;

SearchBar.defaultProps = {
  handleSearch: () => { },
  handleClear: () => { }
}
