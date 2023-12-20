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

import impas1 from './assets/cars/impas1.jpg'
import impas2 from './assets/cars/impas2.jpg'
import impas3 from './assets/cars/impas3.jpg'
import impas4 from './assets/cars/impas4.jpg'

import fmb1 from './assets/cars/fm1.jpg'
import fmb2 from './assets/cars/fm2.jpg'
import fmb3 from './assets/cars/fm3.jpg'
import fmb4 from './assets/cars/fm4.jpg'

import mkz1 from './assets/cars/mkz1.jpg'
import mkz2 from './assets/cars/mkz2.jpg'
import mkz3 from './assets/cars/mkz3.jpg'
import mkz4 from './assets/cars/mkz4.jpg'

import challenge1 from './assets/cars/challenge1.jpg'
import challenge2 from './assets/cars/challenge2.jpg'
import challenge3 from './assets/cars/challenge3.jpg'
import challenge4 from './assets/cars/challenge4.jpg'

class Cars extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2014 Dodge Challenger - $12,500</Text></Stack>
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
                <Stack padding={2}><Text className='tile-text-p'>2012 Ford Mustang - $11,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>125k Miles, All Power, Electric Top, Oil change, Rear Wheel Drive, Great Tires.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={fmb1} />
                    <img src={fmb2} />
                    <img src={fmb3} />
                    <img src={fmb4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2012 Chevy Impala - $4,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>165K Miles, All Power, Auto, Front Wheel Drive, Dependable and Clean.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={impas1} />
                    <img src={impas2} />
                    <img src={impas3} />
                    <img src={impas4} />
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