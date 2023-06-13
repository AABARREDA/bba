import React from 'react';
import { resetControlledWarnings, Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import m1 from './assets/cars/m1.jpg'
import m2 from './assets/cars/m2.jpg'
import m3 from './assets/cars/m3.jpg'
import m4 from './assets/cars/m4.jpg'

import da1 from './assets/trucks/da1.jpg'
import da2 from './assets/trucks/da2.jpg'
import da3 from './assets/trucks/da3.jpg'
import da4 from './assets/trucks/da4.jpg'

import imp1 from './assets/cars/imp1.jpg'
import imp2 from './assets/cars/imp2.jpg'
import imp3 from './assets/cars/imp3.jpg'
import imp4 from './assets/cars/imp4.jpg'

import fm1 from './assets/cars/fm1.jpg'
import fm2 from './assets/cars/fm2.jpg'
import fm3 from './assets/cars/fm3.jpg'
import fm4 from './assets/cars/fm4.jpg'

import cs1 from './assets/cars/cs1.jpg'
import cs2 from './assets/cars/cs2.jpg'

import dd1 from './assets/cars/dd1.jpg'
import dd2 from './assets/cars/dd2.jpg'
import dd3 from './assets/cars/dd3.jpg'
import dd4 from './assets/cars/dd4.jpg'

class Cars extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
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
                <Stack padding={2}><Text className='tile-text-p'>2002 Chrysler Sebring - $4,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>78K Miles, Leather, All Power, 6 Cyl. Auto, Front Wheel Drive .</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={cs1} />
                    <img src={cs2} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2013 Dodge Avenger - $7,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>104K Miles, all power, front wheel drive, AC alloy wheels, new oil change.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={da1} />
                    <img src={da2} />
                    <img src={da3} />
                    <img src={da4} />
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
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2012 Chevy Impala - $5,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>91K Miles, New oil change, great dependable car.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={imp1} />
                    <img src={imp2} />
                    <img src={imp3} />
                    <img src={imp4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2010 Ford Mustang - $13,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>75K Miles, Automatic, Cold Air, Alloy Wheels with great tires, V6.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={m2} />
                    <img src={m1} />
                    <img src={m3} />
                    <img src={m4} />
                </Carousel>
            </Stack>
        </Stack>
       );
    }
};

  export default Cars;