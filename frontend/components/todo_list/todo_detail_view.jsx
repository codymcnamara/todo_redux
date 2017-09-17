import React from 'react'

class TodoDetailView extends React.Component{
  constructor (props) {
    super(props);
  }

  handleDelete(){
    this.props.removeTodo(this.props.todo);
  }

  render(){

    return(
      <div>
        <button onClick={this.handleDelete.bind(this)}>Delete</button>
        <div>{this.props.todo.body}</div>
      </div>
    )
  }
}

export default TodoDetailView
