import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import harley1 from './assets/trucks/harley1.jpg'

import cbr1 from './assets/trucks/cbr1.jpg'
import cbr2 from './assets/trucks/cbr2.jpg'


import trailer from './assets/cars/trailer.jpg'
import trailer2 from './assets/cars/trailer2.jpg'
import trailer3 from './assets/cars/trailer3.jpg'
import trailer4 from './assets/cars/trailer4.jpg'

class Other extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'> 1999 Honda CBR - $4800</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>43k Miles, Fresh Tune up, New Oil Change, Great Shape.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={cbr1} />
                    <img src={cbr2} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'> 2012 Harley Davidson - $CALL</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>2800K Miles, Excellent Condition.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={harley1} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2013 Enclosed Trailer - $4,200</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>7 Feet wide x 17 Feet Long, Side Door, and rear door.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={trailer} />
                    <img src={trailer2} />
                    <img src={trailer3} />
                    <img src={trailer4} />
                </Carousel>
            </Stack>
        </Stack>
       );
    }
  };

  export default Other;
