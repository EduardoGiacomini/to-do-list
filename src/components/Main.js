import React, { Component } from 'react';

import Form from './Form';
import ListItem from './ListItem';

import { DisplaySmall } from 'baseui/typography';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { todos: [] };

    this.onSubmit = this.onSubmit.bind(this);
    this.addToDo = this.addToDo.bind(this);
    this.onComplete = this.onComplete.bind(this);
    this.markToDoAsCompleted = this.markToDoAsCompleted.bind(this);
  }

  onSubmit(todo) {
    this.addToDo(todo);
  }

  onComplete(todoId) {
    this.markToDoAsCompleted(todoId);
  }

  addToDo(todo) {
    this.setState({ todos: [todo, ...this.state.todos] });
  }

  // Notação Big-O: O(n) 😕
  markToDoAsCompleted(todoId) {
    const todos = this.state.todos.map(todo => {
      if (todo.id === todoId) {
        todo.completed = !todo.completed;
      }
      return todo
    });
    this.setState({ todos });
  }

  render() {
    const { todos } = this.state;
    const todosToRender = todos.map(todo => <ListItem key={todo.id} todo={todo} onComplete={this.onComplete} />);

    return (
      <div>
        <DisplaySmall className="margin-bottom-3">Lista de tarefas</DisplaySmall>
        <Form onSubmit={this.onSubmit} />
        <ul>{todosToRender}</ul>
      </div>
    );
  }
}

export default Main;
