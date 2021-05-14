import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import silverado1 from './assets/trucks/silverado1.jpeg';
import silverado2 from './assets/trucks/silverado2.jpeg';
import silverado3 from './assets/trucks/silverado3.jpeg';
import silverado4 from './assets/trucks/silverado4.jpeg';

class Trucks extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2017 Chevrolet Silverado - $27,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>43K Miles, All Power, 4x4, Back Up Camera, Back Up Alarm, Loaded, Bluetooth, Towing Package.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={silverado1} />
                    <img src={silverado2} />
                    <img src={silverado3} />
                    <img src={silverado4} />
                </Carousel>
            </Stack>
        </Stack>
       );
    }
  };

  export default Trucks;