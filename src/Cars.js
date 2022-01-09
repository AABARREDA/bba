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

import avenger1 from './assets/cars/avenger1.jpg'
import avenger2 from './assets/cars/avenger2.jpg'
import avenger3 from './assets/cars/avenger3.jpg'
import avenger4 from './assets/cars/avenger4.jpg'

import avengerv1 from './assets/cars/avengerv1.jpg'
import avengerv2 from './assets/cars/avengerv2.jpg'
import avengerv3 from './assets/cars/avengerv3.jpg'
import avengerv4 from './assets/cars/avengerv4.jpg'

class Cars extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2008 Dodge Avenger - $6,250</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>69K Miles, Front Wheel Drive, Oil Change, Great Tires, Automatic Transmission.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={avenger1} />
                    <img src={avenger2} />
                    <img src={avenger3} />
                    <img src={avenger4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2008 Dodge Avenger - $4,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>126K Miles, All Power, Automatic Transmission, Front Wheel Drive, AC Heater, Great Tires.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={avengerv1} />
                    <img src={avengerv3} />
                    <img src={avengerv3} />
                    <img src={avengerv4} />
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