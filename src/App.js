import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, styled } from '@mui/material/styles';
import HomeContainer from './pages/home/HomePage';
import ProductDetails from './pages/product-details/ProductDetails';
import SearchContainer from './pages/sku-search/SearchPage';
import ProductInfo from './pages/product-info/ProductInfo';
import ProductVariants from './pages/product-variants/ProductVariants';
import store from './store';
import Header from './components/header/Header';
import theme from './theme';
import './App.css';
import Spinner from './components/loading-spinner/Spinner';
import StoreProvider from './components/store-provider/StoreProvider';

const StyledBody = styled('div')({
  backgroundColor: '#fff',
  minHeight: 'calc(100vh - 60px)',
});

const App = () => {
  var screenOrientation = window?.screen?.orientation;
  if (screenOrientation) {
    screenOrientation.lock('portrait');
  }
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
        <StoreProvider>
          <Spinner />
          <Header />
          <StyledBody>
            <Switch>
              <Route exact path='/' component={HomeContainer} />
              <Route exact path='/sku-search' component={SearchContainer} />
              <Route
                exact
                path='/product-details/:id'
                component={ProductDetails}
              />
              <Route exact path='/product-info/:id' component={ProductInfo} />
              <Route
                exact
                path='/product-variants/:id/:defaultProduct'
                component={ProductVariants}
              />
            </Switch>
          </StyledBody>
          </StoreProvider>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
