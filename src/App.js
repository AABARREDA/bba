import React from 'react';
import logo from './assets/logo.jpg';
import './App.css';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { Image } from 'office-ui-fabric-react/lib/Image';

function App() {
  return (
    <div className="App">
    <header className="App-header">
        <Image className='logo' imageFit={1} src={logo}/>
        610 N. Cunningham Urbana, IL. 61802 <br/>
        Phone: 217-344-2020  <br/>
        Fax: 217-344-2022
    </header>
      <Stack horizontal horizontalAlign='center' wrap>
        <div>text</div>
        <div>text</div>
        <div>text</div>
        <div>text</div>
        <div>text</div>
        <div>text</div>
        <div>text</div>
        <span>Item One</span>
        <span>Item Two</span>
        <span>Item Three</span>
        <span>Item One</span>
        <span>Item Two</span>
        <span>Item Three</span>
        <span>Item One</span>
        <span>Item Two</span>
        <span>Item Three</span>
        <span>Item One</span>
        <span>Item Two</span>
        <span>Item Three</span>
        <span>Item One</span>
        <span>Item Two</span>
        <span>Item Three</span>
        <span>Item One</span>
        <span>Item Two</span>
        <span>Item Three</span>
      </Stack>
      <Stack horizontal horizontalAlign='center' wrap>
          <Stack>
            Our Location
          </Stack>
          <Stack>
            Contact Us
          </Stack>
      </Stack>
      <footer className="App-header">
        Copyright @ 2020 BBA Auto Sales
      </footer>
    </div>
  );
}

export default App;
