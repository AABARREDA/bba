import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import acadia1 from './assets/trucks/acadia1.jpg';
import acadia2 from './assets/trucks/acadia2.jpg';
import acadia3 from './assets/trucks/acadia3.jpg';
import acadia4 from './assets/trucks/acadia4.jpg';

import ev1 from './assets/trucks/ev1.jpg';
import ev2 from './assets/trucks/ev2.jpg';
import ev3 from './assets/trucks/ev3.jpg';
import ev4 from './assets/trucks/ev4.jpg';

import g501 from './assets/trucks/g501.jpg';
import g502 from './assets/trucks/g502.jpg';
import g503 from './assets/trucks/g503.jpg';
import g504 from './assets/trucks/g504.jpg';

import az1 from './assets/trucks/az1.jpg';
import az2 from './assets/trucks/az2.jpg';
import az3 from './assets/trucks/az3.jpg';
import az4 from './assets/trucks/az4.jpg';

class Suvs extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'> 
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2002 Mercedes G500 $38,000</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>115K Miles, 4x4, Leather, Sunroof, Well Maintained 7K in dealer receipts.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={g501} />
                    <img src={g502} />
                    <img src={g503} />
                    <img src={g504} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2004 Pontiac Aztec - $3,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>155K Miles, Oil Change, New Brakes, Front and Rear AC, All Power, All Wheel Drive, Good Dependable Truck.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={az1} />
                    <img src={az2} />
                    <img src={az3} />
                    <img src={az4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2002 GMC Envoy - $5,400</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>136K Miles, 4x4, Leather, Sunroof, AC, Alloy Wheels, Towing Package.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={ev1} />
                    <img src={ev2} />
                    <img src={ev3} />
                    <img src={ev4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2015 GMC Acadia - $14,200</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>92K Miles, All Power, Automatic Transmission, Back Up Camera, Front Wheel Drive, 3rd Row Seating.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={acadia1} />
                    <img src={acadia2} />
                    <img src={acadia3} />
                    <img src={acadia4} />
                </Carousel>
            </Stack>
        </Stack>
       );
    }
  };

  export default Suvs;