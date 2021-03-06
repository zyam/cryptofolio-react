/* eslint-disable */
import axios from 'axios';

export function fetchTopCurrencies() {
  return (fetchTopCurrenciesDispatch) => {
    fetchTopCurrenciesDispatch(fetchTopCurrenciesResults());
    axios.get(`https://api.coinmarketcap.com/v1/ticker/?limit=20`)
      .then(response => {
        if (response.status != 200) {
          fetchTopCurrenciesDispatch(fetchTopCurrenciesError(response));
          //return Promise.reject(user);
        } else {
          //localStorage.setItem('id_token', user.access_token);
          // convert array of objects to one objects
          let result = {};
          for (let i=0; i < (response.data).length; ++i) {
            result[i] = response.data[i];
          }
          fetchTopCurrenciesDispatch(fetchTopCurrenciesSuccess(result));
        }
      }).catch(err => console.log("Error: ", err))
    }
}

function fetchTopCurrenciesResults() {
  return {
    type: 'FETCH_TOP_RESULTS',
    isFetching: true,
  }
}

function fetchTopCurrenciesSuccess(list) {
  return {
    type: 'FETCH_TOP_SUCCESS',
    isFetching: false,
    list: list
  }
}

function fetchTopCurrenciesError(message) {
  return {
    type: 'FETCH_TOP_ERROR',
    isFetching: false,
    message: message
  }
}
