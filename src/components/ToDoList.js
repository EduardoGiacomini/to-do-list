import React, { Component } from 'react';

import Form from './Form';
import ListItem from './ListItem';

import { DisplaySmall } from 'baseui/typography';


class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };

    this.onSubmit = this.onSubmit.bind(this);
    this.addToDo = this.addToDo.bind(this);
  }

  onSubmit(todo) {
    this.addToDo(todo);
  }

  addToDo(todo) {
    this.setState({ todos: [todo, ...this.state.todos] });
  }

  render() {
    const { todos } = this.state;
    const todosToRender = todos.map((todo, index) => <ListItem key={index} todo={todo} />);

    return (
      <div>
        <DisplaySmall className="margin-bottom-3">Lista de tarefas</DisplaySmall>
        <Form onSubmit={this.onSubmit} />
        <ul>{todosToRender}</ul>
      </div>
    );
  }
}

export default ToDoList;
