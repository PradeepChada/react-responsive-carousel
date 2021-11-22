import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import {
  ThemeProvider,
  styled,
  StyledEngineProvider,
} from '@mui/material/styles';
import HomeContainer from './pages/home/HomePage';
import ProductDetails from './pages/product-details/ProductDetails';
import SearchContainer from './pages/sku-search/SearchPage';
import ProductInfo from './pages/product-info/ProductInfo';
import QuestionAndAnswer from './pages/sku-q&a/QuestionAndAnswer';
import ProductVariants from './pages/product-variants/ProductVariants';
import SkuCheckout from './pages/sku-checkout/SKUCheckout';
import store from './store';
import Header from './components/header/Header';
import theme from './theme';
import './App.css';
import Spinner from './components/loading-spinner/Spinner';
import ConfigProvider from './components/config-provider/ConfigProvider';
import StoreProvider from './components/store-provider/StoreProvider';
import Reviews from './pages/reviews/Reviews';

const StyledBody = styled('div')({
  backgroundColor: '#fff',
});

const App = () => {
  const screenOrientation = window?.screen?.orientation;
  if (screenOrientation?.lock) {
    screenOrientation?.lock('portrait');
  }
  return (
    <Provider store={store}>
      <ConfigProvider>
        <StyledEngineProvider injectFirst>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <StoreProvider>
                <Spinner />
                <Header />
                <StyledBody>
                  <Switch>
                    <Route exact path='/' component={HomeContainer} />
                    <Route
                      exact
                      path='/sku-search'
                      component={SearchContainer}
                    />
                    <Route
                      exact
                      path='/product-details/:id'
                      component={ProductDetails}
                    />
                    <Route
                      exact
                      path='/product-info/:id'
                      component={ProductInfo}
                    />
                    <Route
                      exact
                      path='/product-variants/:id/:defaultProduct'
                      component={ProductVariants}
                    />
                    <Route
                      exact
                      path='/sku-info/q&a/:id'
                      component={QuestionAndAnswer}
                    />
                    <Route exact path='/reviews/:id' component={Reviews} />
                    <Route exact path='/sku-checkout' component={SkuCheckout} />
                    <Route
                      exact
                      path='/sku-checkout/sku-details/:id'
                      component={ProductDetails}
                    />
                  </Switch>
                </StyledBody>
              </StoreProvider>
            </BrowserRouter>
          </ThemeProvider>
        </StyledEngineProvider>
      </ConfigProvider>
    </Provider>
  );
};

export default App;
