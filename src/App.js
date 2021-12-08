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
import PaymentDetails from './pages/payment-details/PaymentDetails';
import store from './store';
import Header from './components/header/Header';
import theme from './theme';
import './App.css';
import Spinner from './components/loading-spinner/Spinner';
import ConfigProvider from './components/config-provider/ConfigProvider';
import StoreProvider from './components/store-provider/StoreProvider';
import Reviews from './pages/reviews/Reviews';
import PopSignin from './pages/pop-signin/PopSignin';
import CardSwipe from './pages/card-swipe/CardSwipe';
import PaymentFailure from './pages/payment-failure/PaymentFailure';
import PaymentSuccess from './pages/payment-success/PaymentSuccess';
import TransactionComplete from './pages/transaction-success/TransactionComplete';
import StoreSearch from './pages/store-search/StoreSearch';

const StyledBody = styled('div')({
  backgroundColor: '#fff',
  flexGrow: 1,
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
                    <Route exact path='/pop-signin' component={PopSignin} />
                    <Route exact path='/sku-checkout' component={SkuCheckout} />
                    <Route
                      exact
                      path='/sku-checkout/sku-details/:id'
                      component={ProductDetails}
                    />
                    <Route
                      exact
                      path='/payment-details'
                      component={PaymentDetails}
                    />
                    <Route exact path='/card-swipe' component={CardSwipe} />
                    <Route
                      exact
                      path='/payment-failure'
                      component={PaymentFailure}
                    />
                    <Route
                      exact
                      path='/payment-success'
                      component={PaymentSuccess}
                    />
                    <Route
                      exact
                      path='/transaction-success'
                      component={TransactionComplete}
                    />
                    <Route exact path='/store-search' component={StoreSearch} />
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
