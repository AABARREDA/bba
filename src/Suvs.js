import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import equi11 from './assets/trucks/equi11.jpg';
import equi22 from './assets/trucks/equi22.jpg';
import equi33 from './assets/trucks/equi33.jpg';
import equi44 from './assets/trucks/equi44.jpg';

import enclave11 from './assets/trucks/enclave11.jpg';
import enclave22 from './assets/trucks/enclave22.jpg';
import enclave33 from './assets/trucks/enclave33.jpg';
import enclave44 from './assets/trucks/enclave44.jpg';

import escape1 from './assets/trucks/escape1.png';
import escape2 from './assets/trucks/escape2.png';
import escape3 from './assets/trucks/escape3.png';
import escape4 from './assets/trucks/escape4.png';

import kias1 from './assets/trucks/kias1.png';
import kias2 from './assets/trucks/kias2.png';
import kias3 from './assets/trucks/kias3.png';
import kias4 from './assets/trucks/kias4.png';

import soul1 from './assets/trucks/soul1.png';

class Suvs extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
             <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2016 Kia Soul - $14,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>60K Miles, All Power, Front Wheel Drive, Extra Clean, Cold AC, Great Dependable Car.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={soul1} />
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
                <Stack padding={2}><Text className='tile-text-p'>2013 Chevy Equinox - $8,900</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>121K Miles, All Power, Automatic Transmission, Front Wheel Drive</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={equi11} />
                    <img src={equi22} />
                    <img src={equi33} />
                    <img src={equi44} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2010 Buick Enclave - $7,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>175K Miles, New Rebuilt Engine, All Power, Panoramic Roof, Bluetooth.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={enclave11} />
                    <img src={enclave22} />
                    <img src={enclave33} />
                    <img src={enclave44} />
                </Carousel>
            </Stack>
        </Stack>
       );
    }
  };

  export default Suvs;