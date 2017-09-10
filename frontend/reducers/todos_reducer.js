import {RECEIVE_TODOS} from '../action/todo_actions'
import {RECEIVE_TODO} from '../action/todo_actions'
// import {receiveTodos} from '../action/todo_actions'
// import {receiveTodo} from '../action/todo_actions'

const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with shampoo',
    done: true
  }
};

const todosReducer = (state = initialState, action) => {
  let nextState;
  switch(action.type) {
    case RECEIVE_TODOS:
      nextState = {};
      action.todos.forEach( todo => nextState[todo.id] = todo);
      return nextState;
    case RECEIVE_TODO:
      // Object.entries(action.todos).forEach(([key, value]) => {
      //     newState[key] = value;
      // });
      // newState[action.todo.id] = action.todo;
      // const newTodo = Hash.new()

      return Object.assign({}, state, {[action.todo.id]: action.todo});
    default:
      return state;
  }
};

export default todosReducer;
