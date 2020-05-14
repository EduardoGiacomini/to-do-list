import React, { Component } from 'react';

import { Paragraph1 } from 'baseui/typography';
import { Input } from 'baseui/input';
import { Button } from 'baseui/button';

import ToDo from '../models/ToDo';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.clearForm = this.clearForm.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const todo = new ToDo(this.state.value);
    this.props.onSubmit(todo);
    this.clearForm();
  }

  clearForm() {
    this.setState({ value: '' });
  }

  render() {
    const { value } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <Paragraph1>Tarefa</Paragraph1>
        <div className="flex-row margin-bottom-3">
          <Input value={value} onChange={this.handleChange} placeholder="Descrição da tarefa" />
          <Button type="submit">Criar</Button>
        </div>
      </form>
    );
  }
}

export default Form;