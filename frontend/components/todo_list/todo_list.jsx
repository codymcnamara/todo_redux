import React from 'react';
import TodoListItem from './todo_list_item'

const TodoList = ({todos}) => {
  const todosTitles = todos.map( (todo, index) =>
      <TodoListItem todo={todo} key={index} />
  )

  return(
    <ul>
      {todosTitles}
    </ul>
  );
}

export default TodoList
