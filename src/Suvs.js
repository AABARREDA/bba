import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import acadia1 from './assets/trucks/acadia1.jpg';
import acadia2 from './assets/trucks/acadia2.jpg';
import acadia3 from './assets/trucks/acadia3.jpg';
import acadia4 from './assets/trucks/acadia4.jpg';

import terrain1 from './assets/trucks/terrain1.jpg';
import terrain2 from './assets/trucks/terrain2.jpg';
import terrain3 from './assets/trucks/terrain3.jpg';
import terrain4 from './assets/trucks/terrain4.jpg';

class Suvs extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2011 GMC Terrain - $7,900</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>125K Miles, All Power, Automatic Transmission, Alloy Wheels with Good Tires. Back up Camera.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={terrain1} />
                    <img src={terrain2} />
                    <img src={terrain3} />
                    <img src={terrain4} />
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