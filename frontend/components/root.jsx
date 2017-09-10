import React from 'react'
import { Provider } from 'react-redux'
import { render } from 'react-dom';
import App from './app'
import configureStore from '../store/store'

window.store = configureStore();

const Root = ({ store }) => (
  <Provider store={ store }>
    <App />
  </Provider>
);

render(<Root/>, document.getElementById('content'));

export default Root;
