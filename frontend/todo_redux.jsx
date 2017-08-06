import React from 'react';
import { render } from 'react-dom';

const Main = React.createClass({
  render() {
    return (
      <h1>Hello World</h1>
    )
  }
});

render(<Main/>, document.getElementById('content'));
