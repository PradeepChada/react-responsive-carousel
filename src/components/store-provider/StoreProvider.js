import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../slices/sku.slice';
import { actions as storeActions } from '../../slices/store.slice';

const StoreProvider = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    let storeInfo = localStorage.getItem('storeInfo');
    storeInfo = storeInfo ? JSON.parse(storeInfo) : null;
    if (storeInfo) {
      dispatch(storeActions.setStoreInfo(storeInfo));
      dispatch(actions.updateStoreId(Number(storeInfo.id)));
    }
  }, [dispatch]);

  return <div className='page-container'>{children}</div>;
};

export default StoreProvider;
