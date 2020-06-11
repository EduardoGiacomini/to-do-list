import React from 'react';

import { Button } from 'baseui/button';
import { ListItem, ListItemLabel } from 'baseui/list';
import { Check, Delete } from 'baseui/icon';

import getFormattedDate from '../../utils/formatDate';

function ToDoListItem(props) {
  const { todo, onComplete, onRemove } = props;

  const formattedDate = getFormattedDate(todo.createdAt);

  return (
    <ListItem
      endEnhancer={() => (
        <React.Fragment>
          <Button onClick={() => onComplete(todo.id)} shape="round" size="compact" kind="secondary">
            <Check />
          </Button>
          <div style={{ width: '18px' }} />
          <Button onClick={() => onRemove(todo.id)} shape="round" size="compact" kind="secondary">
            <Delete />
          </Button>
        </React.Fragment>
      )}
    >
      {
        todo.completed ?
        <ListItemLabel description={`Criado em ${formattedDate}`}><strike>{todo.value}</strike></ListItemLabel>
        :
        <ListItemLabel description={`Criado em ${formattedDate}`}>{todo.value}</ListItemLabel>
      }
    </ListItem>
  );
}

export default ToDoListItem;
