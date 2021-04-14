import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import flex from './assets/cars/flex.jpeg';
import flex2 from './assets/cars/flex2.jpeg';
import flex3 from './assets/cars/flex3.jpeg';
import flex4 from './assets/cars/flex4.jpeg';

import MM1 from './assets/trucks/MM1.jpeg';
import MM2 from './assets/trucks/MM2.jpeg';
import MM3 from './assets/trucks/MM3.jpeg';
import MM4 from './assets/trucks/MM4.jpeg';

import acadia1 from './assets/trucks/acadia1.jpg';
import acadia2 from './assets/trucks/acadia2.jpg';
import acadia3 from './assets/trucks/acadia3.jpg';
import acadia4 from './assets/trucks/acadia4.jpg';

import buick1 from './assets/cars/buick1.jpg';
import buick2 from './assets/cars/buick2.jpg';
import buick3 from './assets/cars/buick3.jpg';
import buick4 from './assets/cars/buick4.jpg';

class Suvs extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2011 Buick Enclave - $7,700</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>132K Miles, 3rd Row Seat, Sunroof, All Power, Leather Alloy Wheel, Front Wheel Drive.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={buick1} />
                    <img src={buick2} />
                    <img src={buick3} />
                    <img src={buick4} />
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
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'></Text>2008 Mercury Mountaineer - $ 4,950</Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>124K Miles, Leather, Sunroof, Towing PKG, Oil Change.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={MM1} />
                    <img src={MM2} />
                    <img src={MM3} />
                    <img src={MM4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2010 Ford Flex - $9,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>133K Miles, Bluetooth, New Oil Change, All Power, 3rd Seat, Allow Wheel w/great tires, X-Clean in and out.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={flex} />
                    <img src={flex2} />
                    <img src={flex3} />
                    <img src={flex4} />
                </Carousel>
            </Stack>
        </Stack>
       );
    }
  };

  export default Suvs;