import React from 'react'

class TodoListItem extends React.Component {
  constructor (props) {
    super(props);
  }

  handleDelete(){
    this.props.removeTodo(this.props.todo);
  }

  updateTodo(){
    let newTodo = Object.assign({}, this.props.todo);
    newTodo.done = !this.props.todo.done;
    this.props.removeTodo(this.props.todo);
    this.props.receiveTodo(newTodo);
  }

  render(){
    let doneText = this.props.todo.done ? 'Undo' : 'Done';

    return(
      <li>
        {this.props.todo.title}
        <button onClick={this.handleDelete.bind(this)}>Delete</button>
        <button onClick={this.updateTodo.bind(this)}>{doneText}</button>
      </li>
    )
  }
}

export default TodoListItem
