import React from 'react'
import TodoDetailView from './todo_detail_view'

class TodoListItem extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      detail: false
    }
    this.toggleDetail = this.toggleDetail.bind(this);
  }

  updateTodo(){
    let newTodo = Object.assign({}, this.props.todo);
    newTodo.done = !this.props.todo.done;
    this.props.removeTodo(this.props.todo);
    this.props.receiveTodo(newTodo);
  }

  toggleDetail(e){
    e.preventDefault();
    this.setState({
      detail: !this.state.detail
    });

  }

  render(){
    let doneText = this.props.todo.done ? 'Undo' : 'Done';
    let detail;
    if(this.state.detail){
      detail = <TodoDetailView todo={this.props.todo} removeTodo={this.props.removeTodo} />;
    }

    return(
      <li>
        <h3><a onClick={this.toggleDetail}>{this.props.todo.title}</a></h3>
        <button onClick={this.updateTodo.bind(this)}>{doneText}</button>
        {detail}
      </li>
    )
  }
}

export default TodoListItem
