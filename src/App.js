import React from 'react';

import './styles/reset.css';
import './styles/utils.css';

import { Client as Styletron } from 'styletron-engine-atomic';
import { Provider as StyletronProvider } from 'styletron-react';
import { LightTheme, BaseProvider } from 'baseui';

import Main from './components/Main';

const engine = new Styletron();

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        <Main />
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
