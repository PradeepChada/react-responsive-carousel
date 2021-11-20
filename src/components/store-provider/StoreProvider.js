import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { actions } from '../../slices/sku.slice';

const StoreProvider = ({ children }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const queryParams = {};
  location.search
    .replace('?', '')
    ?.split('&')
    .forEach((val) => {
      const [key, value] = val.split('=');
      queryParams[key] = value;
    });
  const storeId = queryParams?.storeId;

  useEffect(() => {
    storeId && dispatch(actions.updateStoreId(Number(storeId)));
  }, [storeId, dispatch]);
  return <div className='page-container'>{children}</div>;
};

export default StoreProvider;
