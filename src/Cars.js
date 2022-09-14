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

import f1 from './assets/cars/veloster1.png'
import f2 from './assets/cars/veloster2.png'
import f3 from './assets/cars/veloster3.png'
import f4 from './assets/cars/veloster4.png'

import mks1 from './assets/cars/mks1.png'
import mks2 from './assets/cars/mks2.png'
import mks3 from './assets/cars/mks3.png'
import mks4 from './assets/cars/mks4.png'

import ela1 from './assets/cars/ela1.png'
import ela2 from './assets/cars/ela2.png'
import ela3 from './assets/cars/ela3.png'
import ela4 from './assets/cars/ela4.png'

class Cars extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2012 Hyundai Elantra - $7,900</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>91K Miles, Extra Clean In/Out, New Oil Change.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={ela1} />
                    <img src={ela2} />
                    <img src={ela3} />
                    <img src={ela4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2009 Lincoln MKS - $11,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>92K Miles, Front Wheel Drive, Sunroof, Bluetooth, 20" Wheels, Great Tires.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={mks1} />
                    <img src={mks2} />
                    <img src={mks3} />
                    <img src={mks4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2013 Hyundai Veloster - $8,250</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>136K Miles, 3DR Hatch, Bluetooth, Sunroof, Great Tires, Cold AC</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={veloster1} />
                    <img src={veloster2} />
                    <img src={veloster3} />
                    <img src={veloster4} />
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