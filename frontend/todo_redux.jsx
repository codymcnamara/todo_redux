import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/store'

const Main = React.createClass({
  render() {
    return (
      <h1>Hello World</h1>
    )
  }
});

// const store = configureStore();
// window.store = store;


render(<Main/>, document.getElementById('content'));
