import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom';
import App from './app'
import configureStore from '../store/store'


const Root = ({ store }) => (
  <Provider store={ store }>
    <App />
  </Provider>
);

let store = configureStore();
window.store = store;
render(<Root store={store}/>, document.getElementById('content'));

export default Root;
