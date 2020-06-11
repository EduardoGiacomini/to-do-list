import React from 'react';

import moment from 'moment';

import { Button } from 'baseui/button';
import { ListItem as BaseUIListItem, ListItemLabel } from 'baseui/list';
import { Check, Delete } from 'baseui/icon';

function ListItem(props) {
  const { todo, onComplete, onRemove } = props;

  function getFormattedDate(date) {
    return moment(date).format('DD/MM/YYYY, HH:mm')
  }

  const formattedDate = getFormattedDate(todo.createdAt);

  return (
    <BaseUIListItem
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
    </BaseUIListItem>
  );
}

export default ListItem;
