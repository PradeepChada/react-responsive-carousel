import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import ConfigProvider from '../components/config-provider/ConfigProvider';
import StoreProvider from '../components/store-provider/StoreProvider';
import { BrowserRouter } from 'react-router-dom';
import store from '../store';
import theme from '../theme';
function Wrapper({ children }) {
  return (
    <Provider store={store}>
    
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <StoreProvider>{children}</StoreProvider>
          </BrowserRouter>
        </ThemeProvider>
     
    </Provider>
  );
}

const renderWithContext = (ui, options) =>
  render(ui, { wrapper: Wrapper, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { renderWithContext as render };
