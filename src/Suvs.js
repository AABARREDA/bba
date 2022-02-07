import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import ev1 from './assets/trucks/ev1.jpg';
import ev2 from './assets/trucks/ev2.jpg';
import ev3 from './assets/trucks/ev3.jpg';
import ev4 from './assets/trucks/ev4.jpg';

import Sub1 from './assets/trucks/Sub1.jpg';
import Sub2 from './assets/trucks/Sub2.jpg';
import Sub3 from './assets/trucks/Sub3.jpg';
import Sub4 from './assets/trucks/Sub4.jpg';

import escape1 from './assets/trucks/escape1.jpg';
import escape2 from './assets/trucks/escape2.jpg';
import escape3 from './assets/trucks/escape3.jpg';
import escape4 from './assets/trucks/escape4.jpg';

import equi1 from './assets/trucks/equi1.jpg';
import equi2 from './assets/trucks/equi2.jpg';
import equi3 from './assets/trucks/equi3.jpg';
import equi4 from './assets/trucks/equi4.jpg';

import mkx1 from './assets/trucks/mkx1.jpg';
import mkx2 from './assets/trucks/mkx2.jpg';
import mkx3 from './assets/trucks/mkx3.jpg';
import mkx4 from './assets/trucks/mkx4.jpg';

import cadi1 from './assets/trucks/cadi1.jpg';
import cadi2 from './assets/trucks/cadi2.jpg';
import cadi3 from './assets/trucks/cadi3.jpg';
import cadi4 from './assets/trucks/cadi4.jpg';

import toy1 from './assets/trucks/toy1.jpg';
import toy2 from './assets/trucks/toy2.jpg';
import toy3 from './assets/trucks/toy3.jpg';
import toy4 from './assets/trucks/toy4.jpg';

import mar1 from './assets/trucks/mar1.jpg';
import mar2 from './assets/trucks/mar2.jpg';
import mar3 from './assets/trucks/mar3.jpg';
import mar4 from './assets/trucks/mar4.jpg';

import chevy1 from './assets/trucks/chevy1.jpg';
import chevy2 from './assets/trucks/chevy2.jpg';
import chevy3 from './assets/trucks/chevy3.jpg';
import chevy4 from './assets/trucks/chevy4.jpg';

import jeep1 from './assets/trucks/jeep1.jpg';
import jeep2 from './assets/trucks/jeep2.jpg';
import jeep3 from './assets/trucks/jeep3.jpg';
import jeep4 from './assets/trucks/jeep4.jpg';

import enclave1 from './assets/trucks/enclave1.jpg';

class Suvs extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2008 Jeep Wrangler - $18,000</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>117K Miles, 4x4, Automatic Transmission, Winch, LED Lights </Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={jeep1} />
                    <img src={jeep2} />
                    <img src={jeep3} />
                    <img src={jeep4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2010 Buick Enclave - $7,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>175K Miles, New Rebuilt Engine, All Power, Panoramic Roof, Bluetooth.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={enclave1} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2011 Chevy Equinox - $7,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>135K Miles, All Power, Automatic Transmission, Front Wheel Drive, 4 Cyl.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={chevy1} />
                    <img src={chevy2} />
                    <img src={chevy3} />
                    <img src={chevy4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2009 Mercury Mariner - $6,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>111K Miles, Automatic Transmission, Front Wheel Drive, AC/Heat, Extra Clean, Alloy Wheels and Tires.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={mar1} />
                    <img src={mar2} />
                    <img src={mar3} />
                    <img src={mar4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2007 Toyota 4 Runner - $12,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>150K Miles, All Power, Automatic Transmission, Alloy Wheels, Great Tires and Extra Clean.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={toy1} />
                    <img src={toy2} />
                    <img src={toy3} />
                    <img src={toy4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2010 Lincoln MKX - $9,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>100K Miles, Panoramic Sunroof, Leather Navigation, Heated and Cooled Seats, V6 Alloy Wheels and Great Tires.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={mkx1} />
                    <img src={mkx2} />
                    <img src={mkx3} />
                    <img src={mkx4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2011 Cadillac SRX - $10,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>138K Miles, All Power, Navigation, 2 DVDs, Heated and Cooled Seats, Push Start, V6, New Oil Change.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={cadi1} />
                    <img src={cadi2} />
                    <img src={cadi3} />
                    <img src={cadi4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2007 Chevrolet Suburban - $9700</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>150K Miles, 2 Wheel Drive, 3rd Row Seat, Fresh Tune Up, New Oil Change, AC/Heater.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={Sub1} />
                    <img src={Sub2} />
                    <img src={Sub3} />
                    <img src={Sub4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2010 Chevrolet Equinox - $7,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>100K Miles, All Power, Front Wheel Drive, Extra Clean, Alloy Wheels and Great Tires.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={equi1} />
                    <img src={equi2} />
                    <img src={equi3} />
                    <img src={equi4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2011 Ford Escape - $7,450</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>128K Miles, All Power, Leather, V6, All Wheel Drive, New Oil Change.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={escape1} />
                    <img src={escape2} />
                    <img src={escape3} />
                    <img src={escape4} />
                </Carousel>
            </Stack>
        </Stack>
       );
    }
  };

  export default Suvs;