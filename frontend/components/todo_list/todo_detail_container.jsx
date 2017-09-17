import {connect} from 'react-redux'
import TodoDetailView from './todo_detail_view.jsx'

const mapDispatchToProps = dispatch => {
  removeTodo: todo => dispatch(removeTodo(todo))
}


const TodoDetailContainer = connect(
  null, mapDispatchToProps
)(TodoDetailView)

export default TodoDetailContainer
