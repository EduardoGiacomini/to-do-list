import React, { Component } from 'react';

import { DisplaySmall, Paragraph1 } from 'baseui/typography';
import { Input } from 'baseui/input';
import { Button } from 'baseui/button';
import { ListItem, ListItemLabel } from 'baseui/list';
import { Check, Delete } from 'baseui/icon';

class ToDoList extends Component {
  render() {
    return (
      <div>
        <DisplaySmall className="margin-bottom-3">Lista de tarefas</DisplaySmall>
        <Paragraph1>Tarefa</Paragraph1>
        <div className="flex-row margin-bottom-3">
          <Input placeholder="Descrição da tarefa" />
          <Button>Criar</Button>
        </div>
        <ListItem
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
          <ListItemLabel description="10 de maio - 21:56">Comprar pão</ListItemLabel>
        </ListItem>
      </div>
    );
  }
}

export default ToDoList;
