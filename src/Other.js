import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import cbr1 from './assets/cars/cbr1.jpg'
import cbr2 from './assets/cars/cbr2.jpg'
import cbr3 from './assets/cars/cbr3.jpg'
import cbr4 from './assets/cars/cbr4.jpg'

class Other extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'> 2013 Honday CBR 250cc- $3,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>10K Miles, Manual Transmission </Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={cbr1} />
                    <img src={cbr3} />
                </Carousel>
            </Stack>
            </Stack>
       );
    }
  };

  export default Other;
