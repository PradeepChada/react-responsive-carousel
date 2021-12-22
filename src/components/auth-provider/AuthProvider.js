import React from 'react';
import { useSelector } from 'react-redux';
import Login from '../../pages/login/Login';

const AuthProvider = ({ children }) => {
  const { authenticated } = useSelector((state) => state.auth);
  return authenticated ? children : <Login />;
};

export default AuthProvider;
