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

import mustangapril1 from './assets/cars/mustangapril1.jpg'
import mustangapril2 from './assets/cars/mustangapril2.jpg'
import mustangapril3 from './assets/cars/mustangapril3.jpg'
import mustangapril4 from './assets/cars/mustangapril4.jpg'

import mustangapril11 from './assets/cars/mustangapril11.jpg'
import mustangapril22 from './assets/cars/mustangapril22.jpg'
import mustangapril33 from './assets/cars/mustangapril33.jpg'
import mustangapril44 from './assets/cars/mustangapril44.jpg'

import toyotaapril1 from './assets/cars/toyotaapril1.jpg'
import toyotaapril2 from './assets/cars/toyotaapril2.jpg'
import toyotaapril3 from './assets/cars/toyotaapril3.jpg'
import toyotaapril4 from './assets/cars/toyotaapril4.jpg'

import hapril1 from './assets/cars/hapril1.jpg'
import hapril2 from './assets/cars/hapril2.jpg'
import hapril3 from './assets/cars/hapril3.jpg'
import hapril4 from './assets/cars/hapril4.jpg'

import sonic1 from './assets/cars/sonic1.jpg'
import sonic2 from './assets/cars/sonic2.jpg'
import sonic3 from './assets/cars/sonic3.jpg'
import sonic4 from './assets/cars/sonic4.jpg'

class Cars extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2017 - Chevy Sonic - $9,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>82K miles, All Power, Bluetooth, Back up camera.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={sonic1} />
                    <img src={sonic2} />
                    <img src={sonic3} />
                    <img src={sonic4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2012 Ford Mustang - $10,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>113K Miles, Automatic Transmission, Electric Top, Great Wheels and Tires.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={mustangapril1} />
                    <img src={mustangapril2} />
                    <img src={mustangapril3} />
                    <img src={mustangapril4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2012 Ford Mustang - $10,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>125K Miles, Automatic Transmission, Rear Wheel Drive, Electric Top, Great Tires.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={mustangapril11} />
                    <img src={mustangapril22} />
                    <img src={mustangapril33} />
                    <img src={mustangapril44} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2011 Toyota Camry - $8,900</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>107K Miles, Leather Navigation, Back Up Camera, Bluetooth, Great Tires. </Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={toyotaapril1} />
                    <img src={toyotaapril2} />
                    <img src={toyotaapril3} />
                    <img src={toyotaapril4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2013 Hyundai Elantra - $5,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>134K Miles, All Power, New Oil Change, Sunroof, Front Wheel Drive.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={hapril1} />
                    <img src={hapril2} />
                    <img src={hapril3} />
                    <img src={hapril4} />
                </Carousel>
            </Stack>
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