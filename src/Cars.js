import React from 'react';
import { resetControlledWarnings, Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import fm1 from './assets/cars/fm1.jpg'
import fm2 from './assets/cars/fm2.jpg'
import fm3 from './assets/cars/fm3.jpg'
import fm4 from './assets/cars/fm4.jpg'

import dd1 from './assets/cars/dd1.jpg'
import dd2 from './assets/cars/dd2.jpg'
import dd3 from './assets/cars/dd3.jpg'
import dd4 from './assets/cars/dd4.jpg'

import challenge1 from './assets/cars/challenge1.jpg'
import challenge2 from './assets/cars/challenge2.jpg'
import challenge3 from './assets/cars/challenge3.jpg'
import challenge4 from './assets/cars/challenge4.jpg'

import newcamry1 from './assets/cars/newcamry1.jpg'
import newcamry2 from './assets/cars/newcamry2.jpg'
import newcamry3 from './assets/cars/newcamry3.jpg'
import newcamry4 from './assets/cars/newcamry4.jpg'

import newcamry11 from './assets/cars/newcamry11.jpg'
import newcamry22 from './assets/cars/newcamry22.jpg'
import newcamry33 from './assets/cars/newcamry33.jpg'
import newcamry44 from './assets/cars/newcamry44.jpg'

import newm1 from './assets/cars/newm1.jpg'
import newm2 from './assets/cars/newm2.jpg'
import newm3 from './assets/cars/newm3.jpg'

class Cars extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2004 Mercury Gran Marquis - #3,700</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>144K Miles, V8 Engine, All Power, Rear Wheel Drive.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={newm1} />
                    <img src={newm2} />
                    <img src={newm3} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2010 Toyota Camry - $8,250</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>115K Miles, New Oil Change, Auto, Front Wheel Drive, All Power, Clean and Dependable.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={newcamry11} />
                    <img src={newcamry22} />
                    <img src={newcamry33} />
                    <img src={newcamry44} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2011 Toyota Camry - $7,900</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>155K Miles, new engine with 75k Miles, All Power, Fresh Tune Up, Alloy Wheels, Auto.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={newcamry1} />
                    <img src={newcamry2} />
                    <img src={newcamry3} />
                    <img src={newcamry4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2014 Dodge Charger - $12,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>119K Miles, Auto, Rear Wheel Drive, Clean and dependable car.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={challenge1} />
                    <img src={challenge2} />
                    <img src={challenge3} />
                    <img src={challenge4} />
                </Carousel>
            </Stack>
             <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2013 Dodge Dart - $7,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>92K Miles, Automatic, Front Wheel Drive, 4 Cyl..</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={dd1} />
                    <img src={dd2} />
                    <img src={dd3} />
                    <img src={dd4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2000 Ford Mustang - $15,000</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>95K Miles, V8 Manual, New oil change, new brakes, new exhaust, excellent condition.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={fm1} />
                    <img src={fm2} />
                    <img src={fm3} />
                    <img src={fm4} />
                </Carousel>
            </Stack>
        </Stack>
       );
    }
};

  export default Cars;