import React from 'react';

import './styles/reset.css'

import {Client as Styletron} from 'styletron-engine-atomic';
import {Provider as StyletronProvider} from 'styletron-react';
import {LightTheme, BaseProvider} from 'baseui';

const engine = new Styletron();

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={LightTheme}>
        {/* Code here */}
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
