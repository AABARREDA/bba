import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import cbr from './assets/other/hondacbr.JPG'
import cbr2 from './assets/other/cbr2.JPG'
import cbr3 from './assets/other/cbr3.JPG'
import cbr4 from './assets/other/cbr4.JPG'

class Other extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'> 2004 Honda CBR 600RR - $2,750</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>23K Miles, New Tires, Tune Up compelte including oil change.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={cbr} />
                    <img src={cbr2} />
                    <img src={cbr3} />
                    <img src={cbr4} />
                </Carousel>
            </Stack>
            </Stack>
       );
    }
  };

  export default Other;
