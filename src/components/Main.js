import React, { Component } from 'react';

import Form from './Form';
import ListItem from './ListItem';
import Modal from './Modal';

import { DisplaySmall } from 'baseui/typography';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todoIdToRemove: null,
      openRemoveModal: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onComplete = this.onComplete.bind(this);
    this.onRemove = this.onRemove.bind(this);
    this.addToDo = this.addToDo.bind(this);
    this.markToDoAsCompleted = this.markToDoAsCompleted.bind(this);
    this.removeToDoFromToDoList = this.removeToDoFromToDoList.bind(this);
    this.changeRemoveModalStatus = this.changeRemoveModalStatus.bind(this);
    this.setTodoIdToRemove = this.setTodoIdToRemove.bind(this);
  }

  onSubmit(todo) {
    this.addToDo(todo);
  }

  onComplete(todoId) {
    this.markToDoAsCompleted(todoId);
  }

  onRemove(todoId) {
    this.changeRemoveModalStatus();
    this.setTodoIdToRemove(todoId);
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

  removeToDoFromToDoList() {
    const todos = this.state.todos.filter(todo => todo.id !== this.state.todoIdToRemove);
    this.setState({ todos });
    this.setTodoIdToRemove();
  }

  changeRemoveModalStatus() {
    const { openRemoveModal } = this.state
    this.setState({ openRemoveModal: !openRemoveModal })
  }

  setTodoIdToRemove(todoId = null) {
    this.setState({ todoIdToRemove: todoId });
  }

  render() {
    const { todos, openRemoveModal } = this.state;
    const todosToRender = todos.map(todo => 
      <ListItem key={todo.id} todo={todo} onComplete={this.onComplete} onRemove={this.onRemove} />
    );

    return (
      <div>
        <DisplaySmall className="margin-bottom-3">Lista de tarefas</DisplaySmall>
        <Form onSubmit={this.onSubmit} />
        <ul>{todosToRender}</ul>
        <Modal
          isOpen={openRemoveModal} changeOpenStatus={this.changeRemoveModalStatus}
          remove={this.removeToDoFromToDoList}
        />
      </div>
    );
  }
}

export default Main;
