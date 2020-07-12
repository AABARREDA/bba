import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import tahoe from './assets/trucks/ChevyTahoe2008.jpg';
import tahoe2 from './assets/trucks/tahoe2.JPG';
import tahoe3 from './assets/trucks/tahoe3.JPG';

import tahoe16 from './assets/trucks/ChevyTahoe16.JPG'
import tahoe162 from './assets/trucks/tahoe162.JPG'
import tahoe163 from './assets/trucks/tahoe163.JPG'
import tahoe164 from './assets/trucks/tahoe164.JPG'

import explorer from './assets/trucks/explorer.jpeg';
import explorer2 from './assets/trucks/explorer2.jpeg';
import explorer3 from './assets/trucks/explorer3.jpeg';
import explorer4 from './assets/trucks/explorer4.jpeg';

import equin from './assets/trucks/equin.jpeg';
import equin1 from './assets/trucks/equin1.jpeg';
import equin2 from './assets/trucks/equin2.jpeg';
import equin3 from './assets/trucks/equin3.jpeg';

import rav from './assets/cars/rav.jpeg';
import rav1 from './assets/cars/rav1.jpeg';
import rav2 from './assets/cars/rav2.jpeg';
import rav3 from './assets/cars/rav3.jpeg';

class Suvs extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2008 Chevy Tahoe - $10,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>121K Miles, All Power, Third Row Seat, Cold AC, Alloy Wheels, Good Tires, Flex Fuel.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={tahoe} />
                    <img src={tahoe2} />
                    <img src={tahoe3} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2009 Toyota RAV4 - $7,900</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>100K Miles, 4 Cyl, Front Wheel Drive, All Power, Automatic Transmission, AC/Heat, Good Tires.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={rav} />
                    <img src={rav1} />
                    <img src={rav2} />
                    <img src={rav3} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2016 Chevy Tahoe - $15,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>109K Miles, 3rd Row Seat, Nice Rims, Good Tires, Caddy Tail Lights, Leather.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                <img src={tahoe16} />
                  <img src={tahoe162} />
                  <img src={tahoe163} />
                  <img src={tahoe164} />
                </Carousel>
            </Stack>
        </Stack>
       );
    }
  };

  export default Suvs;