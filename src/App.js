import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import CurrencyDetails from './pages/currency-details/CurrencyDetails';
import { ThemeProvider, styled } from '@mui/material/styles';
import HomeContainer from './pages/home/HomePage';
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
              <Route
                exact
                path='/currency/details'
                component={CurrencyDetails}
              />
              <Route exact path='/' component={HomeContainer} />
              {/* <Redirect from="/" to="/currency/details" /> */}
            </Switch>
          </StyledBody>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
