import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import nissan from './assets/cars/Nissan.JPEG';
import nissan2 from './assets/cars/nissan2.JPEG';
import nissan3 from './assets/cars/nissan3.JPEG';

class Trucks extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'> 2013 Nissan Sentra - $5,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>120K Miles, All Power, Extra Clean in/out, Front Wheel Drive, Keyless Entry, Bluetooth.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={nissan} />
                    <img src={nissan2} />
                    <img src={nissan3} />
                </Carousel>
            </Stack>
        </Stack>
       );
    }
  };

  export default Trucks;