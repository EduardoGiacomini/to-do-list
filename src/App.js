import React from 'react';

import './styles/reset.css';
import './styles/utils.css';

import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';

import ToDoList from './screens/ToDoList';

const engine = new Styletron();

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <ToDoList />
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
