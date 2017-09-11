import React from 'react'
import uniqueId from '../../util/id_generator'

class TodoForm extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };
  }

  linkState(key){
    return (event => this.setState({[key]: event.currentTarget.value}));
  }

  handleSubmit(event){
    event.preventDefault();
    let id = uniqueId();
    this.props.receiveTodo({
      id: id,
      title: this.state.title,
      body: this.state.body,
      done: false
    })
    this.setState({
      title: '',
      body: ''
    });
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" ref="title" value={this.state.title} onChange={this.linkState('title')}/>
        <input type="text" ref="body" value={this.state.body} onChange={this.linkState('body')}/>
        <input type="submit" value="Submit"/>
      </form>
    )
  }

}

export default TodoForm
