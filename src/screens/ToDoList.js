import React, { Component } from 'react';

import { DisplaySmall, Paragraph1 } from 'baseui/typography';
import { Input } from 'baseui/input';
import { Button } from 'baseui/button';
import { ListItem, ListItemLabel } from 'baseui/list';
import { Check, Delete } from 'baseui/icon';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      todos: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.addToDo = this.addToDo.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.addToDo();
    this.clearForm();
  }

  addToDo() {
    this.setState({ todos: [...this.state.todos, this.state.value] });
  }

  clearForm() {
    this.setState({ value: '' });
  }

  render() {
    const { value, todos } = this.state;

    return (
      <div>
        <DisplaySmall className="margin-bottom-3">Lista de tarefas</DisplaySmall>
        
        <form onSubmit={this.handleSubmit}>
          <Paragraph1>Tarefa</Paragraph1>
          <div className="flex-row margin-bottom-3">
            <Input value={value} onChange={this.handleChange} placeholder="Descrição da tarefa" />
            <Button type="submit">Criar</Button>
          </div>
        </form>

        {
          todos.map((todo, index) => (
            <ListItem
              key={index}
              endEnhancer={() => (
                <React.Fragment>
                  <Button shape="round" size="compact" kind="secondary">
                    <Check />
                  </Button>
                  <div style={{ width: '18px' }} />
                  <Button shape="round" size="compact" kind="secondary">
                    <Delete />
                  </Button>
                </React.Fragment>
              )}
            >
              <ListItemLabel description="10 de maio - 21:56">{todo}</ListItemLabel>
            </ListItem>
          ))
        }

      </div>
    );
  }
}

export default ToDoList;
