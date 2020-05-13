import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import tundra from './assets/trucks/tundra.jpeg';
import tundra1 from './assets/trucks/tundra1.jpeg';
import tundra2 from './assets/trucks/tundra2.jpeg';
import tundra3 from './assets/trucks/tundra3.jpeg';

class Trucks extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2006 Toyota Tundra - $9,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>126K Miles, 4x4, 4 Door, Automatic Transmission, Running Boards, New Brakes.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={tundra} />
                    <img src={tundra1} />
                    <img src={tundra2} />
                    <img src={tundra3} />
                </Carousel>
            </Stack>
        </Stack>
       );
    }
  };

  export default Trucks;