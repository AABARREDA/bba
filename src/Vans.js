import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import savana01 from './assets/trucks/savana01.jpeg';
import savana02 from './assets/trucks/savana02.jpeg';

import tc1 from './assets/trucks/tc1.jpeg';
import tc2 from './assets/trucks/tc2.jpeg';
import tc3 from './assets/trucks/tc3.jpeg';
import tc4 from './assets/trucks/tc4.jpeg';

class Vans extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2011 Chrysler Town and Country - $7500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>127K Miles, Stow n Go Seats, Back Up Camera, Auto, New Front Brakes, Oil Change.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={tc1} />
                    <img src={tc2} />
                    <img src={tc3} />
                    <img src={tc4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2004 GMC Savana - $5,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>134K Miles, Cargo Van, 6.0 Engine, Automatic Transmission, Towing PKG.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={savana01} />
                    <img src={savana02} />
                </Carousel>
            </Stack>
        </Stack>
       );
    }
  };

  export default Vans;