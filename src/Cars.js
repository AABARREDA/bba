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

import c1 from './assets/cars/c1.jpg'
import c2 from './assets/cars/c2.jpg'
import c3 from './assets/cars/c3.jpg'
import c4 from './assets/cars/c4.jpg'

import f1 from './assets/cars/f1.jpg'
import f2 from './assets/cars/f2.jpg'
import f3 from './assets/cars/f3.jpg'
import f4 from './assets/cars/f4.jpg'

import vn1 from './assets/cars/vn1.jpg'
import vn2 from './assets/cars/vn2.jpg'
import vn3 from './assets/cars/vn3.jpg'
import vn4 from './assets/cars/vn4.jpg'

import elan1 from './assets/cars/elan1.jpg'
import elan2 from './assets/cars/elan2.jpg'
import elan3 from './assets/cars/elan3.jpg'
import elan4 from './assets/cars/elan4.jpg'

import spark1 from './assets/cars/spark1.jpg'
import spark2 from './assets/cars/spark2.jpg'
import spark3 from './assets/cars/spark3.jpg'
import spark4 from './assets/cars/spark4.jpg'

import focus1 from './assets/cars/focus1.jpg'
import focus2 from './assets/cars/focus2.jpg'
import focus3 from './assets/cars/focus3.jpg'
import focus4 from './assets/cars/focus4.jpg'

import impala1 from './assets/cars/impala1.jpg'
import impala2 from './assets/cars/impala2.jpg'
import impala3 from './assets/cars/impala3.jpg'
import impala4 from './assets/cars/impala4.jpg'

import camry1 from './assets/cars/camry1.jpg'
import camry2 from './assets/cars/camry2.jpg'
import camry3 from './assets/cars/camry3.jpg'
import camry4 from './assets/cars/camry4.jpg'

class Cars extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2009 Toyota Camry - $7,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>89K Miles, All Power, 4 cyl., Front Wheel Drive, Extra clean in and out, great tires.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={camry1} />
                    <img src={camry2} />
                    <img src={camry3} />
                    <img src={camry4} />
                </Carousel>
            </Stack> 
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2009 Chevy Impala - $5,750</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>124K Miles, Automatic, Front Wheel Drive, All Power, Alloy Wheels, Oil Change.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={impala1} />
                    <img src={impala2} />
                    <img src={impala3} />
                    <img src={impala4} />
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
                <Stack padding={2}><Text className='tile-text-p'>2013 Hyundai Elantra - $8,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>86K Miles, All Power, Front Wheel Drive, Automatic, AC/Heat, Alloy Wheels, Great Tires.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={elan1} />
                    <img src={elan2} />
                    <img src={elan3} />
                    <img src={elan4} />
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
                <Stack padding={2}><Text className='tile-text-p'>2010 Chevy Camaro RS - $14,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>79K Miles, V6, Automatic, Leather, Alloy Wheels, Bluetooth, Cold AC.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={c1} />
                    <img src={c2} />
                    <img src={c3} />
                    <img src={c4} />
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