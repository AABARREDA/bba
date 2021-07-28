import React from 'react';
import { resetControlledWarnings, Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import focus2 from './assets/cars/focus2.JPG';
import focus3 from './assets/cars/focus3.JPG';

import sentra12v1 from './assets/cars/sentra12v1.jpg'
import sentra12v2 from './assets/cars/sentra12v2.jpg'
import sentra12v3 from './assets/cars/sentra12v3.jpg'
import sentra12v4 from './assets/cars/sentra12v4.jpg'

import rio1 from './assets/cars/rio1.jpg'
import rio2 from './assets/cars/rio2.jpg'
import rio3 from './assets/cars/rio3.jpg'
import rio4 from './assets/cars/rio4.jpg'

import versa1 from './assets/cars/versa1.jpg'
import versa2 from './assets/cars/versa2.jpg'
import versa3 from './assets/cars/versa3.jpg'

import m1 from './assets/cars/m1.jpg'
import m2 from './assets/cars/m2.jpg'
import m3 from './assets/cars/m3.jpg'
import m4 from './assets/cars/m4.jpg'

import cts1 from './assets/cars/cts1.jpg'
import cts2 from './assets/cars/cts2.jpg'
import cts3 from './assets/cars/cts3.jpg'
import cts4 from './assets/cars/cts4.jpg'

import HY1 from './assets/cars/HY1.jpg'
import HY2 from './assets/cars/HY2.jpg'
import HY3 from './assets/cars/HY3.jpg'
import HY4 from './assets/cars/HY4.jpg'

import c1 from './assets/cars/c1.jpg'
import c2 from './assets/cars/c2.jpg'
import c3 from './assets/cars/c3.jpg'
import c4 from './assets/cars/c4.jpg'

import cc1 from './assets/cars/cc1.jpg'
import cc2 from './assets/cars/cc2.jpg'
import cc3 from './assets/cars/cc3.jpg'
import cc4 from './assets/cars/cc4.jpg'

import tc1 from './assets/cars/tc1.jpg'
import tc2 from './assets/cars/tc2.jpg'
import tc3 from './assets/cars/tc3.jpg'
import tc4 from './assets/cars/tc4.jpg'

class Cars extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2010 Chevy Camaro RS - $16,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>79K Miles, V6, Automatic, Leather, Alloy Wheels, Bluetooth, Cold AC.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={c1} />
                    <img src={c2} />
                    <img src={c3} />
                    <img src={c4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2012 Chevy Cruz - $6,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>95K Miles, All Power, Sunroof, Front Wheel Drive, Alloy Wheels, AC.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={cc1} />
                    <img src={cc2} />
                    <img src={cc3} />
                    <img src={cc4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2007 Toyota Camry - $6,750</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>162K Miles, V6, Front Wheel Drive, All Power, AC, Nice and Clean.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={tc1} />
                    <img src={tc2} />
                    <img src={tc3} />
                    <img src={tc4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2010 Ford Mustang - $13,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>75K Miles, Automatic, Cold Air, Alloy Wheels with great tires, V6.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
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
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={cts1} />
                    <img src={cts2} />
                    <img src={cts3} />
                    <img src={cts4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2012 Hyundai Elantra - $8,250</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>69K Miles, All Power, Automatic Transmission, Front Wheel drive, XM Radio, CD, Extra Clean in and out. Alloy Wheels.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={HY1} />
                    <img src={HY2} />
                    <img src={HY3} />
                    <img src={HY4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2013 NIssan Versa - $6,450</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>107K Miles, Automatic, Front Wheel Drive, Clean in and out, Great Tires, Ice Cold Air.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={versa1} />
                    <img src={versa2} />
                    <img src={versa3} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2013 Kia Rio - $6,250</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>123K Miles, Front Wheel Drive, Automatic, Excellent Tires, Manual Windows</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={rio1} />
                    <img src={rio2} />
                    <img src={rio3} />
                    <img src={rio4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2012 Nissan Sentra - $7,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>67K Miles, All Power, Auto, Alloy Wheels, Excellent Tires, AC/Heat.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={sentra12v1} />
                    <img src={sentra12v2} />
                    <img src={sentra12v3} />
                    <img src={sentra12v4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2013 Ford Focus - $5,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>129K Miles, Good Tires, Extra Clean, Cold AC, Oil Change Completed, 4 Cyl.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={focus2} />
                    <img src={focus3} />
                </Carousel>
            </Stack>
        </Stack>
       );
    }
  };

  export default Cars;