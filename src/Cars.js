import React from 'react';
import { resetControlledWarnings, Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import m1 from './assets/cars/m1.jpg'
import m2 from './assets/cars/m2.jpg'
import m3 from './assets/cars/m3.jpg'
import m4 from './assets/cars/m4.jpg'

import cts1 from './assets/cars/cts1.jpg'
import cts2 from './assets/cars/cts2.jpg'
import cts3 from './assets/cars/cts3.jpg'
import cts4 from './assets/cars/cts4.jpg'

import f1 from './assets/cars/f1.jpg'
import f2 from './assets/cars/f2.jpg'
import f3 from './assets/cars/f3.jpg'
import f4 from './assets/cars/f4.jpg'

import vn1 from './assets/cars/vn1.jpg'
import vn2 from './assets/cars/vn2.jpg'
import vn3 from './assets/cars/vn3.jpg'
import vn4 from './assets/cars/vn4.jpg'

import spark1 from './assets/cars/spark1.jpg'
import spark2 from './assets/cars/spark2.jpg'
import spark3 from './assets/cars/spark3.jpg'
import spark4 from './assets/cars/spark4.jpg'

import focus1 from './assets/cars/focus1.jpg'
import focus2 from './assets/cars/focus2.jpg'
import focus3 from './assets/cars/focus3.jpg'
import focus4 from './assets/cars/focus4.jpg'

import mkx11 from './assets/cars/mkx11.jpg'
import mkx22 from './assets/cars/mkx22.jpg'
import mkx33 from './assets/cars/mkx33.jpg'
import mkx44 from './assets/cars/mkx44.jpg'

class Cars extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2004 Ford Mustang - $5,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>91K Miles, Automatic Transmission, Electric Top, V-6 Engine, Leather, Alloy Wheels, AC.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={focus1} />
                    <img src={focus2} />
                    <img src={focus3} />
                    <img src={focus4} />
                </Carousel>
            </Stack> 
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2013 Lincoln MKZ - $15,000</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>66K Miles, All Touch Sunroof, Bluetooth, Alloy Wheels, New Brakes, Blind Spot Mirrors.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={mkx11} />
                    <img src={mkx22} />
                    <img src={mkx33} />
                    <img src={mkx44} />
                </Carousel>
            </Stack> 
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2013 Ford Focus - $6,450</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>128K Miles, Automatic, Front Wheel Drive, All Power, Oil Change, A/ Heat.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={focus1} />
                    <img src={focus2} />
                    <img src={focus3} />
                    <img src={focus4} />
                </Carousel>
            </Stack> 
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2017 Chevy Spark - $9,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>66K Miles, Back Up Camera, Automatic, Front Wheel Drive, Oil Change, AC/Heat..</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={spark1} />
                    <img src={spark2} />
                    <img src={spark3} />
                    <img src={spark4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2012 Fiat 500 - $6,250</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>112K Miles, 5 Spd, Manual Transmission, Power Windows, AC, Bluetooth, Good Tires.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={f1} />
                    <img src={f2} />
                    <img src={f3} />
                    <img src={f4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2014 Versa Note - $6,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>121K Miles All Power, Automatic, Front Wheel Drive, Cold AC.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={vn1} />
                    <img src={vn2} />
                    <img src={vn3} />
                    <img src={vn4} />
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
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2011 Cadillac CTS Coupe - $14,000</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>84K Miles, Loaded Panoramic sunroof, Heated and Cooled seats, Bluetooth, cold AC.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={cts1} />
                    <img src={cts2} />
                    <img src={cts3} />
                    <img src={cts4} />
                </Carousel>
            </Stack>
        </Stack>
       );
    }
  };

  export default Cars;