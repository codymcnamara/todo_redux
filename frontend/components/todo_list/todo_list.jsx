import React from 'react';
import TodoListItem from './todo_list_item'
import TodoForm from './todo_form'
// import { receiveTodo } from '../../action/todo_actions'

const TodoList = ({todos, receiveTodo, removeTodo}) => {
  const todosTitles = todos.map( (todo, index) =>
      <TodoListItem
        todo={todo} key={index} removeTodo={removeTodo} receiveTodo={receiveTodo}
      />
  )

  return(
    <div>
      <ul>
        {todosTitles}
      </ul>
      <TodoForm receiveTodo={receiveTodo}/>
    </div>
  );
}

export default TodoList
