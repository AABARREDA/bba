import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Stack } from 'office-ui-fabric-react/lib/Stack';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          testing
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Stack>
        <span>Item One</span>
        <span>Item Two</span>
        <span>Item Thredde</span>
      </Stack>
    </div>
  );
}

export default App;
