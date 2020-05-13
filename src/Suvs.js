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

import srx from './assets/trucks/SRX.jpeg';
import srx2 from './assets/trucks/srx2.JPEG';

import jeep from './assets/trucks/jeep.JPEG';
import jeep2 from './assets/trucks/jeep2.JPEG';
import jeep3 from './assets/trucks/jeep3.JPEG';
import jeep4 from './assets/trucks/jeep4.JPEG';

import explorer from './assets/trucks/explorer.jpeg';
import explorer2 from './assets/trucks/explorer2.jpeg';
import explorer3 from './assets/trucks/explorer3.jpeg';
import explorer4 from './assets/trucks/explorer4.jpeg';

import envoy1 from './assets/trucks/envoy1.jpeg';
import envoy2 from './assets/trucks/envoy2.jpeg';
import envoy3 from './assets/trucks/envoy3.jpeg';
import envoy4 from './assets/trucks/envoy4.jpeg';

import mz from './assets/trucks/mz.jpeg';
import mz1 from './assets/trucks/mz1.jpeg';
import mz2 from './assets/trucks/mz2.jpeg';

import kia from './assets/trucks/kia.jpeg';
import kia2 from './assets/trucks/kia2.jpeg';
import kia3 from './assets/trucks/kia3.jpeg';
import kia4 from './assets/trucks/kia4.jpeg';

import equin from './assets/trucks/equin.jpeg';
import equin2 from './assets/trucks/equin2.jpeg';
import equin3 from './assets/trucks/equin3.jpeg';
import equin4 from './assets/trucks/equin4.jpeg';



class Suvs extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2013 Kia Soul - $6,250</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>117K Miles, All Power, Automatic Transmission, CD, Alloy Wheels, Good Tires, Extra Clean.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={kia3} />
                    <img src={kia2} />
                    <img src={kia} />
                    <img src={kia4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2012 Chevrolet Equinox - $8,959</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>92K Miles, Leather, Sunroof, AC/Heater, CD, BackUp Camera, 4 Cyl, Alloy Wheels.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={equin} />
                    <img src={equin2} />
                    <img src={equin3} />
                    <img src={equin4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2010 Jeep Patriot - $5,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>103K Miles, All Power, A/C Heat, X-Clean.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={jeep} />
                    <img src={jeep2} />
                    <img src={jeep3} />
                    <img src={jeep4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2005 GMC Envoy Denali - $4,750</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>4x4, Leather, Sunroof, Alloy Wheels w/tires, runs and drives, Automatic Transmission, Towing Package.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={envoy1} />
                    <img src={envoy2} />
                    <img src={envoy3} />
                    <img src={envoy4} />
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
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2012 Cadillac SRX - $12,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>86K Miles, V6, Front Wheel Drive, Keyless Entry, Panoramic Roof, Leather, Heated and Cooled Seats, Dual TVs, NAV, DVD, Bluetooth, Chrome Rims.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={srx} />
                    <img src={srx2} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2011 Ford Explorer - Call for Price.</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>150K Miles, 3rd Row Seat, All Power, Leather, Extra Clean, AC/Heat, Alloy Wheels and Tires.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={explorer} />
                    <img src={explorer2} />
                    <img src={explorer3} />
                    <img src={explorer4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2010 Mazda CX-7 - $6,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>120K Miles, All Power, Automatic, Alloy Wheels, Extra Clean in and out.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={mz} />
                    <img src={mz1} />
                    <img src={mz2} />
                </Carousel>
            </Stack>
        </Stack>
       );
    }
  };

  export default Suvs;