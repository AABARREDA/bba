import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import tc1 from './assets/trucks/tc1.jpg';
import tc2 from './assets/trucks/tc2.jpg';
import tc3 from './assets/trucks/tc3.jpg';
import tc4 from './assets/trucks/tc4.jpg';

import sie1 from './assets/trucks/sie1.jpg';
import sie2 from './assets/trucks/sie2.jpg';
import sie3 from './assets/trucks/sie3.jpg';
import sie4 from './assets/trucks/sie4.jpg';

class Vans extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2008 Toyota Sienna XLE - $8,900</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>115K Miles, Automatic Sliding Doors, Sunroof, Leather, New Oil Change.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={sie1} />
                    <img src={sie2} />
                    <img src={sie3} />
                    <img src={sie4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2010 Chrysler Town and Country - $7,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>92K Miles, Automatic, Front Wheel Drive, Stowaway seats, All Power.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={tc1} />
                    <img src={tc2} />
                    <img src={tc3} />
                    <img src={tc4} />
                </Carousel>
            </Stack>
        </Stack>
       );
    }
  };

  export default Vans;