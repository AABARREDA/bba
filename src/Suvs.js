import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import escape1 from './assets/trucks/escape1.png';
import escape2 from './assets/trucks/escape2.png';
import escape3 from './assets/trucks/escape3.png';
import escape4 from './assets/trucks/escape4.png';

import kias1 from './assets/trucks/kias1.png';
import kias2 from './assets/trucks/kias2.png';
import kias3 from './assets/trucks/kias3.png';
import kias4 from './assets/trucks/kias4.png';

import ce1 from './assets/trucks/ce1.jpg';
import ce2 from './assets/trucks/ce2.jpg';
import ce3 from './assets/trucks/ce3.jpg';
import ce4 from './assets/trucks/ce4.jpg';

import ks1 from './assets/trucks/ks1.jpg';
import ks2 from './assets/trucks/ks2.jpg';
import ks3 from './assets/trucks/ks3.jpg';
import ks4 from './assets/trucks/ks4.jpg';

import be1 from './assets/trucks/be1.jpg';
import be2 from './assets/trucks/be2.jpg';
import be3 from './assets/trucks/be3.jpg';
import be4 from './assets/trucks/be4.jpg';

class Suvs extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2016 Kia Soul - $7,900</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>100K Miles, all power, new oil change, new brakes, clean in and out.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={ks1} />
                    <img src={ks2} />
                    <img src={ks3} />
                    <img src={ks4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2013 Chevrolet Equinox - $11,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>114K Miles, all power, automatic, front wheel drive, AC Heat, Oil Change.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={ce1} />
                    <img src={ce2} />
                    <img src={ce3} />
                    <img src={ce4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2014 Kia Soul - $9,250</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>112K Miles, Front Wheel Drive, Extra Clean, New Oil Change, Extra Clean.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={kias1} />
                    <img src={kias2} />
                    <img src={kias3} />
                    <img src={kias4} />
                </Carousel>
            </Stack>
             <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2012 Ford Escape - $7,900</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>123K Miles, New Brakes, New Oil Change, AC, Front Wheel Drive.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={escape1} />
                    <img src={escape2} />
                    <img src={escape3} />
                    <img src={escape4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2008 Buick Enclave - $7,900</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>108K Miles, Leather, Panoramic Roof, rear camera, new brakes.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={be1} />
                    <img src={be2} />
                    <img src={be3} />
                    <img src={be4} />
                </Carousel>
            </Stack>
        </Stack>
       );
    }
  };

  export default Suvs;