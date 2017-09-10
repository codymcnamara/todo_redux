export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';

function receiveTodos(todos){
  return({
    type: RECEIVE_TODOS,
    todos
  })
}
function receiveTodo(todos, todo){
  return({
    type: RECEIVE_TODOS,
    todos,
    todo
  })
}
