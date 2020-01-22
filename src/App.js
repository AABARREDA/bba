import React from 'react';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Stack, Separator, Text } from 'office-ui-fabric-react/lib/';
import Iframe from 'react-iframe'

import Cars from './Cars';
import Other from './Other';
import Suvs from './Suvs';
import Vans from './Vans';

function App() {
  return (
    <div>
        <div className="App">
        <div className="hero-image">
          <header className="App-header-2">
            <br/>
            BBA Auto Sales<br/>
            610 N. Cunningham Urbana, IL. 61802 <br/>
            Phone: 217-344-2020  <br/>
            Fax: 217-344-2022 <br/>
          </header>
        </div>
        </div>

    <Separator className='App-header'>Current Inventory</Separator>

      <Stack horizontal horizontalAlign='center' wrap gap='15'>
          <Cars/>
          <Suvs/>
          <Vans/>
          <Other/>
       </Stack>

      <Separator className='App-header'>Info</Separator>

      <Stack horizontal horizontalAlign='center' wrap gap='15'>
          <Stack className='tile-about'>
          <Text className='App-info-test'>Our Location </Text>
          <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.0649338166468!2d-88.20565628435764!3d40.11855638164319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880cd79c8a9ba8bb%3A0xbe55a6bc792bdab1!2sBBA%20Auto%20Sales%20LLC!5e0!3m2!1sen!2sus!4v1578122642967!5m2!1sen!2sus"
            width="425px"
            height="350px"
            display="initial"
            />
          </Stack>
          <Stack className='tile-about'>
            <Text className='App-info-test'>About Us</Text>
            <Text className='App-info-test'>BBA Auto Sales is family owned and operated. We have been part of the Urbana community for the last 27 years. 
            Being a small family owned dealership allows us to provide quality cars while keeping our prices low.</Text><br/>
            <Text horizontalAlign='right' className='App-info-test'>Antonio Barreda - Owner</Text>
          </Stack>
      </Stack>
      <footer className="App-footer">
        Copyright @ 2020 BBA Auto Sales
      </footer>
    </div>
  );
}

export default App;
