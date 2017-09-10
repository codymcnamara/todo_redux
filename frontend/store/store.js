import {createStore} from 'redux'
import rootReducer from '../reducers/root_reducer'
// import {receiveTodos} from '../action/todo_actions'
// import {receiveTodo} from '../action/todo_actions'

const configureStore = function () {
  return(createStore(rootReducer));
}

export default configureStore
