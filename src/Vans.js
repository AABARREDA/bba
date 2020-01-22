import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import quest from './assets/trucks/Quest.JPG';
import quest2 from './assets/trucks/quest2.JPG';
import quest3 from './assets/trucks/quest3.JPG';

import sienna from './assets/trucks/Sienna.JPG';
import sienna2 from './assets/trucks/sienna2.JPG';
import sienna3 from './assets/trucks/sienna3.JPG';

class Vans extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2009 Nissan Quest - $6,100</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>130K Miles, Automatic, Alloy Wheels, Good Tires, Back Up Camera.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={quest} />
                    <img src={quest2} />
                    <img src={quest3} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2007 Toyota Sienna - $6250</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>130K Miles, All Power, Cold AC, Rear AC, Extra Clean in and out, Towing Package, Good Tires.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={sienna} />
                    <img src={sienna2} />
                    <img src={sienna3} />
                </Carousel>
            </Stack>
        </Stack>
       );
    }
  };

  export default Vans;