//DEMO PURPOSE ONLY
export const currencyQuery = `query($currency: String!){
  rates(currency: $currency) {
    currency
    rate
  }
}
`;
