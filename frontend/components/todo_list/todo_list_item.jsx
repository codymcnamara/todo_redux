import React from 'react'

class TodoListItem extends React.Component {
  constructor (props) {
    super(props);

  }

  handleDelete(){
    this.props.removeTodo(this.props.todo)
  }

  render(){
    return(
      <li>{this.props.todo.title} <button onClick={this.handleDelete.bind(this)}>Delete</button></li>
    )
  }
}

export default TodoListItem
