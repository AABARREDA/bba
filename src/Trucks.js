import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import rst1 from './assets/trucks/rst1.jpg';
import rst2 from './assets/trucks/rst2.jpg';
import rst3 from './assets/trucks/rst3.jpg';
import rst4 from './assets/trucks/rst4.jpg';

import silverado1 from './assets/trucks/silverado1.jpg';
import silverado2 from './assets/trucks/silverado2.jpg';
import silverado3 from './assets/trucks/silverado3.jpg';
import silverado4 from './assets/trucks/silverado4.jpg';

class Trucks extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2022 Chevrolet Silverado Z71 RST - $68,000</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>2,400 Miles, All Leather, Heated Steering Wheel/Seats, Cameras, All OPTIONS!</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={rst1} />
                    <img src={rst2} />
                    <img src={rst3} />
                    <img src={rst4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2017 Chevrolet Silverado - $29,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>55K Miles, Z71 4x4 Edition, All Power, Keyless Entry, Blutetooth Backup  Camera, Excellent tires. LOADED.</Text>
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