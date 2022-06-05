import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import savana01 from './assets/trucks/savana01.jpeg';
import savana02 from './assets/trucks/savana02.jpeg';

import caravan11 from './assets/trucks/caravan11.jpg';

import toyota11 from './assets/trucks/toyota11.jpg';
import toyota22 from './assets/trucks/toyota22.jpg';
import toyota33 from './assets/trucks/toyota33.jpg';
import toyota44 from './assets/trucks/toyota44.jpg';

class Vans extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2004 GMC Savana - $5,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>134K Miles, Cargo Van, 6.0 Engine, Automatic Transmission, Towing PKG.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={savana01} />
                    <img src={savana02} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2013 Dodge Caravan - $8,900</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>136K Miles, Stow and Go Seats, AC, Automatic Transmission, Front Wheel Drive, Alloy Wheels</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={caravan11} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2004 Toyota Sienna - $3,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>171K Miles, Timing Belt replaced at 136K, Automatic Transmission, Front Wheel Drive</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={toyota11} />
                    <img src={toyota22} />
                    <img src={toyota33} />
                    <img src={toyota44} />
                </Carousel>
            </Stack>
        </Stack>
       );
    }
  };

  export default Vans;