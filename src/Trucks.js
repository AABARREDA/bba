import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import tundra from './assets/trucks/tundra.jpeg';

class Trucks extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2006 Toyota Tundra - SOLD</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'></Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={tundra} />
                </Carousel>
            </Stack>
        </Stack>
       );
    }
  };

  export default Trucks;