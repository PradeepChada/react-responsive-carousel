import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, styled } from '@mui/material/styles';
import HomeContainer from './pages/home/HomePage';
import ProductDetails from './pages/product-details/ProductDetails';
import store from './store';
import Header from './components/header/Header';
import theme from './theme';
import './App.css';

const StyledBody = styled('div')({
  backgroundColor: '#fff',
  minHeight: 'calc(100vh - 60px)',
});

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Header />
          <StyledBody>
            <Switch>
              <Route exact path='/' component={HomeContainer} />
              <Route
                exact
                path='/product-details/:id'
                component={ProductDetails}
              />
            </Switch>
          </StyledBody>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
