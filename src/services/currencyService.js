import Axios from '../api';
import * as queries from '../constants/graphql';

export const fetchCurrencyDetails = (currency) => {
    const BASE_URL = 'https://48p1r2roz4.sse.codesandbox.io';
    return Axios.post(BASE_URL, {
        query: queries.currencyQuery,
        variables : {
            currency
        }
    })
}