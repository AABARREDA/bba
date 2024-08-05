import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import Iframe from 'react-iframe'
import {Separator } from 'office-ui-fabric-react/lib/';

class Footer extends React.Component {
    render() {
    return(
        <div>
        <Separator className='App-header'>Info</Separator>

        <Stack horizontal horizontalAlign='center' wrap gap='10'>
            <Stack className='tile-about'>
            <Text className='App-info-test'>Our Location </Text>
            <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.0649338166468!2d-88.20565628435764!3d40.11855638164319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880cd79c8a9ba8bb%3A0xbe55a6bc792bdab1!2sBBA%20Auto%20Sales%20LLC!5e0!3m2!1sen!2sus!4v1578122642967!5m2!1sen!2sus"
              width="390px"
              height="350px"
              display="initial"
              />
            </Stack>
            <Stack className='gap'></Stack>
            <Stack className='tile-about'>
              <Text className='App-info-test'>About Us</Text>
              <Text className='App-info-test'>BBA Auto Sales is family owned and operated. We have been part of the Urbana community for the last 30+ years. 
              Being a small family owned dealership allows us to provide quality cars while keeping our prices low.</Text><br/>
              <Text horizontalAlign='right' className='App-info-test'>Antonio Barreda - Owner</Text>
            </Stack>
        </Stack>
        <footer className="App-footer">
          Copyright @ 2024 BBA Auto Sales
        </footer>
        </div>
       );
    }
  };

  export default Footer;