import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import savana01 from './assets/trucks/savana01.jpeg';
import savana02 from './assets/trucks/savana02.jpeg';

import d1 from './assets/trucks/d1.jpg';
import d2 from './assets/trucks/d2.jpg';
import d3 from './assets/trucks/d3.jpg';
import d4 from './assets/trucks/d4.jpg';

import ts1 from './assets/trucks/ts1.jpg';
import ts2 from './assets/trucks/ts2.jpg';
import ts3 from './assets/trucks/ts3.jpg';
import ts4 from './assets/trucks/ts4.jpg';

import tv1 from './assets/trucks/tv1.jpg';
import tv2 from './assets/trucks/tv2.jpg';
import tv3 from './assets/trucks/tv3.jpg';
import tv4 from './assets/trucks/tv4.jpg';

class Vans extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2011 Toyota Venza - $12,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>119K Miles, All Power, Automatic Transmission, 3rd row Seat, DVD, Great Tires.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={tv1} />
                    <img src={tv2} />
                    <img src={tv3} />
                    <img src={tv4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2006 Toyota Sienna - $6,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>137K Miles All Power, Automatic, AC, Great Tires, V6 Engine.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={ts1} />
                    <img src={ts2} />
                    <img src={ts3} />
                    <img src={ts4} />
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