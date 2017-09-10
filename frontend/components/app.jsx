import React from 'react';
import { render } from 'react-dom';
import TodoListContainer from './todo_list/todo_list_container';

const App = React.createClass({
  render(){
    return(
      <div>
        <h1>App title</h1>
        <TodoListContainer />
      </div>
    )
  }
});

export default App;
