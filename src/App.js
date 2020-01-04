import React from 'react';
import logo from './assets/logo.jpg';
import './App.css';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { Image } from 'office-ui-fabric-react/lib/Image';
import { Separator } from 'office-ui-fabric-react/lib/Separator';
import { Text } from 'office-ui-fabric-react/lib/Text';
import Iframe from 'react-iframe'


function App() {
  return (
    <div>
    <div className="App">
    <header className="App-header">
        <Image className='logo' imageFit={1} src={logo}/>
        610 N. Cunningham Urbana, IL. 61802 <br/>
        Phone: 217-344-2020  <br/>
        Fax: 217-344-2022
    </header>
    </div>
    <Separator className='App-header'>Current Inventory</Separator>

      <Stack horizontal horizontalAlign='center' wrap>
          <Stack className='tile'>
                <Image className='tile-pic' imageFit={1} src={logo}/>
                <Text block>2004 Ford Explorer</Text>
                <Text block>106k Miles</Text>
                <Text block>Tune Up and Oil Change done</Text>
                <Text block>Super Clean</Text>
                <Text block>$2590</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={logo}/>
            Car 1
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={logo}/>
            Car 1
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={logo}/>
            Car 1
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={logo}/>
            Car 1
          </Stack>
      </Stack>

      <Separator className='App-header'>Our Location</Separator>

      <Stack horizontal horizontalAlign='center' wrap>
          <Stack>
          <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.0649338166468!2d-88.20565628435764!3d40.11855638164319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880cd79c8a9ba8bb%3A0xbe55a6bc792bdab1!2sBBA%20Auto%20Sales%20LLC!5e0!3m2!1sen!2sus!4v1578122642967!5m2!1sen!2sus"
            width="500px"
            height="350px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"/>
          </Stack>
      </Stack>
      <footer className="App-footer">
        Copyright @ 2020 BBA Auto Sales
      </footer>
    </div>
  );
}

export default App;
