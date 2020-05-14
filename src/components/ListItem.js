import React from 'react';

import moment from 'moment';

import { Button } from 'baseui/button';
import { ListItem as BaseUIListItem, ListItemLabel } from 'baseui/list';
import { Check, Delete } from 'baseui/icon';

function ListItem(props) {

  function getFormattedDate(date) {
    return moment(date).format('DD/MM/YYYY, HH:mm')
  }

  const { todo } = props;
  const formattedDate = getFormattedDate(todo.createdAt);

  return (
    <BaseUIListItem
      endEnhancer={() => (
        <React.Fragment>
          <Button shape="round" size="compact" kind="secondary"><Check /></Button>
          <div style={{ width: '18px' }} />
          <Button shape="round" size="compact" kind="secondary"><Delete /></Button>
        </React.Fragment>
      )}
    >
      <ListItemLabel description={`Criado em ${formattedDate}`}>{todo.value}</ListItemLabel>
    </BaseUIListItem>
  );
}

export default ListItem;
