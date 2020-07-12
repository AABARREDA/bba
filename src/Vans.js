import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import quest from './assets/trucks/Quest.JPG';
import quest2 from './assets/trucks/quest2.JPG';
import quest3 from './assets/trucks/quest3.JPG';

import journey from './assets/trucks/journey.jpeg';
import journey1 from './assets/trucks/journey1.jpeg';
import journey2 from './assets/trucks/journey2.jpeg';
import journey3 from './assets/trucks/journey3.jpeg';

class Vans extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2009 Dodge Journey - $5,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>97K Miles, All Power, All Wheel Drive, Sunroof.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={journey} />
                    <img src={journey1} />
                    <img src={journey2} />
                    <img src={journey3} />
                </Carousel>
            </Stack>
        </Stack>
       );
    }
  };

  export default Vans;