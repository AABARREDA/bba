import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import silverado1 from './assets/trucks/silverado1.JPEG';
import silverado2 from './assets/trucks/silverado2.JPEG';
import silverado3 from './assets/trucks/silverado3.JPEG';
import silverado4 from './assets/trucks/silverado4.JPEG';

import dodge from './assets/trucks/dodge.jpeg';
import dodge2 from './assets/trucks/dodge2.jpeg';
import dodge3 from './assets/trucks/dodge3.jpeg';
import dodge4 from './assets/trucks/dodge4.jpeg';

class Trucks extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2000 Dodge Dakota - $2,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>77K Miles, Manual Transmission, 5 Speed, ONE OWNER, No rust, Very Clean, Tires in excellent Condition.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={dodge} />
                </Carousel>
            </Stack>
        </Stack>
       );
    }
  };

  export default Trucks;