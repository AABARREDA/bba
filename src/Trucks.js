import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import silverado1 from './assets/trucks/silverado1.JPEG';
import silverado2 from './assets/trucks/silverado2.JPEG';
import silverado3 from './assets/trucks/silverado3.JPEG';

class Trucks extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2007 Chevy Silverado - $8,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>Call for Miles, Crew Cab, All Power, Towing Package, Alloy Wheels, Good Tires, One Owner.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={silverado1} />
                    <img src={silverado2} />
                    <img src={silverado3} />
                </Carousel>
            </Stack>
        </Stack>
       );
    }
  };

  export default Trucks;