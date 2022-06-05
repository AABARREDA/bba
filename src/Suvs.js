import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import chevy1 from './assets/trucks/chevy1.jpg';
import chevy2 from './assets/trucks/chevy2.jpg';
import chevy3 from './assets/trucks/chevy3.jpg';
import chevy4 from './assets/trucks/chevy4.jpg';

import jeep1 from './assets/trucks/jeep1.jpg';
import jeep2 from './assets/trucks/jeep2.jpg';
import jeep3 from './assets/trucks/jeep3.jpg';
import jeep4 from './assets/trucks/jeep4.jpg';

import equi11 from './assets/trucks/equi11.jpg';
import equi22 from './assets/trucks/equi22.jpg';
import equi33 from './assets/trucks/equi33.jpg';
import equi44 from './assets/trucks/equi44.jpg';

import enclave11 from './assets/trucks/enclave11.jpg';
import enclave22 from './assets/trucks/enclave22.jpg';
import enclave33 from './assets/trucks/enclave33.jpg';
import enclave44 from './assets/trucks/enclave44.jpg';

import tahoe11 from './assets/trucks/tahoe11.jpg';
import tahoe22 from './assets/trucks/tahoe22.jpg';
import tahoe33 from './assets/trucks/tahoe33.jpg';
import tahoe44 from './assets/trucks/tahoe44.jpg';

import soul11 from './assets/trucks/soul11.jpg';
import soul22 from './assets/trucks/soul22.jpg';
import soul33 from './assets/trucks/soul33.jpg';

import soul111 from './assets/trucks/soul111.jpg';
import soul222 from './assets/trucks/soul222.jpg';
import soul333 from './assets/trucks/soul333.jpg';
import soul444 from './assets/trucks/soul444.jpg';

import tucson11 from './assets/trucks/tucson11.jpg';
import tucson22 from './assets/trucks/tucson22.jpg';
import tucson33 from './assets/trucks/tucson33.jpg';
import tucson44 from './assets/trucks/tucson44.jpg';

class Suvs extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2016 Chevy Tahoe - $30,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>112K Miles, 4x4, All Power, Automatic Transmission, Back Up Cam, Bluetooth, New 22in Wheels</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={tahoe11} />
                    <img src={tahoe22} />
                    <img src={tahoe33} />
                    <img src={tahoe44} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2016 Hyundai Tucson - $17,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>35K Miles, All Power, Bluetooth, Front Wheel Drive, Excellent Condition, Back Up Camera.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={tucson11} />
                    <img src={tucson22} />
                    <img src={tucson33} />
                    <img src={tucson44} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2012 Kia Soul - $6,900</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>121K Miles, All Power, Automatic Transmission, Front Wheel Drive, Alloy</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={soul11} />
                    <img src={soul22} />
                    <img src={soul33} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2013 Chevy Equinox - $8,900</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>121K Miles, All Power, Automatic Transmission, Front Wheel Drive</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={equi11} />
                    <img src={equi22} />
                    <img src={equi33} />
                    <img src={equi44} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2010 Jeep Wrangler - $18,000</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>145K Miles, 4x4, Automatic Transmission, Winch, LED Lights </Text>
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
                    <img src={enclave11} />
                    <img src={enclave22} />
                    <img src={enclave33} />
                    <img src={enclave44} />
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
        </Stack>
       );
    }
  };

  export default Suvs;