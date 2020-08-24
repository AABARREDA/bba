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

import envoy from './assets/trucks/envoy.jpeg'
import envoy02 from './assets/trucks/envoy02.jpeg'
import envoy03 from './assets/trucks/envoy03.jpeg'
import envoy04 from './assets/trucks/envoy04.jpeg'

import rav from './assets/cars/rav.jpeg';
import rav1 from './assets/cars/rav1.jpeg';
import rav2 from './assets/cars/rav2.jpeg';
import rav3 from './assets/cars/rav3.jpeg';

import esc01 from './assets/trucks/esc01.jpeg';
import esc02 from './assets/trucks/esc02.jpeg';
import esc03 from './assets/trucks/esc03.jpeg';

import kia01 from './assets/trucks/kia01.jpeg';
import kia02 from './assets/trucks/kia02.jpeg';
import kia03 from './assets/trucks/kia03.jpeg';
import kia04 from './assets/trucks/kia04.jpeg';

import vue01 from './assets/trucks/vue01.jpeg';

import liberty01 from './assets/trucks/liberty01.jpeg';
import liberty02 from './assets/trucks/liberty02.jpeg';
import liberty03 from './assets/trucks/liberty03.jpeg';
import liberty04 from './assets/trucks/liberty04.jpeg';

class Suvs extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2010 Ford Escape - $5,750</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>138K Miles, ALl Power, Bluetooth, Leather, 4x4, V6, Automatic Transmission, Dependable Car.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={esc01} />
                    <img src={esc02} />
                    <img src={esc03} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2014 Kia Soul - $7,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>68K Miles, Bluetooth, XM Radio, All Power, Alloy Wheels Good Tires.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={kia01} />
                    <img src={kia02} />
                    <img src={kia03} />
                    <img src={kia04} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2008 Saturn Vue - $4,750</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>82K Miles, 4 Cylinder, Front Wheel Drive, Automatic Transmission, Dependale SUV.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={vue01} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2005 GMC Envoy - $4450</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>165K Miles, All Power, Alloy Wheels, Good Tires, Sunroof.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={envoy} />
                    <img src={envoy02} />
                    <img src={envoy03} />
                    <img src={envoy04} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2002 Jeep Liberty - $3450</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>125K Miles, 4X4, All Power, AC/Heat, Alloy WHeels, Good Tires. Alloy Wheels, Good Tires.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={liberty01} />
                    <img src={liberty02} />
                    <img src={liberty03} />
                    <img src={liberty04} />
                </Carousel>
            </Stack>
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