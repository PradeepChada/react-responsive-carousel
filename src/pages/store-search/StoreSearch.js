import React, { useState } from 'react';
import { Tabs, Tab, Button, Grid, Typography } from '@mui/material';
import { ContentWrapper, PageContainer, StoreList } from './StoreSearch.styles';
import { useDispatch, useSelector } from 'react-redux';
import { actions as storeActions } from '../../slices/store.slice';
import SearchByZip from './search-by-zip/SearchByZip';
import SearchByCity from './search-by-city/SearchByCity';

const Panel = (props) => (
  <Grid
    hidden={props.value !== props.index}
    sx={{ marginTop: '1rem', height: '100%' }}
  >
    {props.children}
  </Grid>
);

const PickStore = ({ stores, formValues, history }) => {
  const dispatch = useDispatch();
  const formInputStr = Object.values(formValues).join(', ');
  const handleSelectStore = (storeInfo) => {
    localStorage.setItem('storeInfo', JSON.stringify(storeInfo));
    dispatch(storeActions.setStoreInfo(storeInfo));
    history.goBack();
  };
  return (
    <StoreList container>
      <Grid item className='selected-store'>
        <Typography variant='h5'> Stores Near: {formInputStr}</Typography>
        <Typography variant='subtitle2'>within 100mi</Typography>
      </Grid>
      {stores.map((item) => {
        return (
          <Grid
            className='store-tile'
            item
            justifyContent='space-between'
            display='flex'
            xs={12}
          >
            <Typography variant='body1'>{item.name}</Typography>
            <Button variant='text' onClick={() => handleSelectStore(item)}>
              Select Store
            </Button>
          </Grid>
        );
      })}
    </StoreList>
  );
};

const StoreSearch = ({ history }) => {
  const [index, setIndex] = useState(0);
  const [pickStore, setPickStore] = useState(false);

  const { stores, storeLoading, formValues } = useSelector(
    (state) => state.store
  );

  const onTabClicked = (_, i) => {
    setIndex(i);
  };

  return (
    <PageContainer>
      {pickStore ? (
        <PickStore
          stores={stores}
          setPickStore={setPickStore}
          formValues={formValues}
          history={history}
        />
      ) : (
        <ContentWrapper>
          <Tabs value={index} variant='fullWidth' onChange={onTabClicked}>
            <Tab
              label='CITY & STATE'
              sx={{
                backgroundColor: 'white',
                fontWeight: '700',
                color: '#000000',
                letterSpacing: 2,
                border: '2px solid',
                borderColor: '#F6F6FA',
              }}
            />
            <Tab
              label='ZIP CODE'
              sx={{
                backgroundColor: 'white',
                fontWeight: '700',
                color: '#000000',
                letterSpacing: 2,
                border: '2px solid',
                borderColor: '#F6F6FA',
              }}
            />
          </Tabs>
          <Panel value={index} index={0}>
            <SearchByCity
              history={history}
              setPickStore={setPickStore}
              storeLoading={storeLoading}
            />
          </Panel>
          <Panel value={index} index={1}>
            <SearchByZip
              history={history}
              setPickStore={setPickStore}
              storeLoading={storeLoading}
            />
          </Panel>
        </ContentWrapper>
      )}
    </PageContainer>
  );
};

export default StoreSearch;
