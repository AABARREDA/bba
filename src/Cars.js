import React from 'react';
import { resetControlledWarnings, Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import m1 from './assets/cars/m1.jpg'
import m2 from './assets/cars/m2.jpg'
import m3 from './assets/cars/m3.jpg'
import m4 from './assets/cars/m4.jpg'

import f1 from './assets/cars/f1.jpg'
import f2 from './assets/cars/f2.jpg'
import f3 from './assets/cars/f3.jpg'
import f4 from './assets/cars/f4.jpg'

import da1 from './assets/trucks/da1.jpg'
import da2 from './assets/trucks/da2.jpg'
import da3 from './assets/trucks/da3.jpg'
import da4 from './assets/trucks/da4.jpg'

import tc1 from './assets/cars/tc1.jpg'
import tc2 from './assets/cars/tc2.jpg'
import tc3 from './assets/cars/tc3.jpg'
import tc4 from './assets/cars/tc4.jpg'

import ff1 from './assets/cars/ff1.jpg'
import ff2 from './assets/cars/ff2.jpg'
import ff3 from './assets/cars/ff3.jpg'
import ff4 from './assets/cars/ff4.jpg'

import imp1 from './assets/cars/imp1.jpg'
import imp2 from './assets/cars/imp2.jpg'
import imp3 from './assets/cars/imp3.jpg'
import imp4 from './assets/cars/imp4.jpg'

import fm1 from './assets/cars/fm1.jpg'
import fm2 from './assets/cars/fm2.jpg'
import fm3 from './assets/cars/fm3.jpg'
import fm4 from './assets/cars/fm4.jpg'

import malibu1 from './assets/trucks/malibu1.jpg'
import malibu2 from './assets/trucks/malibu2.jpg'
import malibu3 from './assets/trucks/malibu3.jpg'
import malibu4 from './assets/trucks/malibu4.jpg'

import cts1 from './assets/cars/cts1.jpg'
import cts2 from './assets/cars/cts2.jpg'
import cts3 from './assets/cars/cts3.jpg'
import cts4 from './assets/cars/cts4.jpg'

import velo1 from './assets/trucks/velo1.jpg'
import velo2 from './assets/trucks/velo2.jpg'
import velo3 from './assets/trucks/velo3.jpg'

class Cars extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2013 Chevy Malibu - $8,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>124K Miles, Automatic, Front Wheel Drive, Back up camera, extra clean.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={malibu1} />
                    <img src={malibu2} />
                    <img src={malibu3} />
                    <img src={malibu4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2013 Chevy Malibu - $6,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>103K Miles, All Power, Front Wheel Drive, Auto.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={velo1} />
                    <img src={velo2} />
                    <img src={velo3} />
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
                <Stack padding={2}><Text className='tile-text-p'>2012 Cadillac CTS - $14,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>72K Miles, All Power, Auto, New Oil Change, Panoramic roof, Bose system.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={cts1} />
                    <img src={cts2} />
                    <img src={cts3} />
                    <img src={cts4} />
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
                <Stack padding={2}><Text className='tile-text-p'>2016 Ford Fiesta - $7,250</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>99K Miles, Bluetooth, New Oil Change.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={ff1} />
                    <img src={ff2} />
                    <img src={ff3} />
                    <img src={ff4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2006 Toyota Camry - $6,250</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>74K Miles, Leather, Sunroof, clean, new brakes and oil change.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={tc1} />
                    <img src={tc2} />
                    <img src={tc3} />
                    <img src={tc4} />
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
        </Stack>
       );
    }
};

  export default Cars;