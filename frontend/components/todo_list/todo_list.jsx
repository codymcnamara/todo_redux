import React from 'react';
import TodoListItem from './todo_list_item'
import TodoForm from './todo_form'


const TodoList = ({todos, receiveTodo, removeTodo}) => {
  const todosTitles = todos.map( (todo, index) =>
      <TodoListItem
        todo={todo} key={todo.id} removeTodo={removeTodo} receiveTodo={receiveTodo}
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
