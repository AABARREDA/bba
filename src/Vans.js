import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import savana01 from './assets/trucks/savana01.jpeg';
import savana02 from './assets/trucks/savana02.jpeg';

import ct1 from './assets/trucks/ct1.jpeg';
import ct2 from './assets/trucks/ct2.jpeg';
import ct3 from './assets/trucks/ct3.jpeg';
import ct4 from './assets/trucks/ct4.jpeg';

import d1 from './assets/trucks/d1.jpeg';
import d2 from './assets/trucks/d2.jpeg';
import d3 from './assets/trucks/d3.jpeg';
import d4 from './assets/trucks/d4.jpeg';

class Vans extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2008 Chrysler Town and Country - $6,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>138K Miles, 3rd Row Seating, Back Up Camera, DVD, All Power, Excellent Tires.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={ct1} />
                    <img src={ct2} />
                    <img src={ct3} />
                    <img src={ct4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2010 Dodge Journey - $6,750</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>97K Miles, V6, New Front Brakes, Oil Change, Extra Clean In and Out, Dependable</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={d1} />
                    <img src={d2} />
                    <img src={d3} />
                    <img src={d4} />
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