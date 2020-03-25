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

import enclave from './assets/trucks/enclave.jpeg';
import enclave1 from './assets/trucks/enclave1.jpeg';
import enclave2 from './assets/trucks/enclave2.jpeg';
import enclave3 from './assets/trucks/enclave3.jpeg';

import e1 from './assets/trucks/escape1.jpeg';
import e2 from './assets/trucks/escape2.jpeg';
import e3 from './assets/trucks/escape3.jpeg';
import e4 from './assets/trucks/escape4.jpeg';

import blazer from './assets/trucks/blazer.jpeg';
import blazer2 from './assets/trucks/blazer2.jpeg';
import blazer3 from './assets/trucks/blazer3.jpeg';

import EN1 from './assets/trucks/EN1.jpeg';
import EN2 from './assets/trucks/EN2.jpeg';
import EN3 from './assets/trucks/EN3.jpeg';
import EN4 from './assets/trucks/EN4.jpeg';

import explorer from './assets/trucks/explorer.jpeg';
import explorer2 from './assets/trucks/explorer2.jpeg';
import explorer3 from './assets/trucks/explorer3.jpeg';
import explorer4 from './assets/trucks/explorer4.jpeg';

import mkx from './assets/trucks/mkx.jpeg';
import mkx2 from './assets/trucks/mkx2.jpeg';
import mkx3 from './assets/trucks/mkx3.jpeg';
import mkx4 from './assets/trucks/mkx4.jpeg';

import envoy1 from './assets/trucks/envoy1.jpeg';
import envoy2 from './assets/trucks/envoy2.jpeg';
import envoy3 from './assets/trucks/envoy3.jpeg';
import envoy4 from './assets/trucks/envoy4.jpeg';

class Suvs extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
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
                <Stack padding={2}><Text className='tile-text-p'>2009 Ford Escape - $6,750</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>76K Miles, All Power, Automatic, Front Wheel Drive, 4 Cyl, AC/Heat, AM/FM/CD.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={e1} />
                    <img src={e2} />
                    <img src={e3} />
                    <img src={e4} />
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
                <Stack padding={2}><Text className='tile-text-p'>2010 Buick Enclave - $7,900</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>101K Miles, All Power, All Wheel Drive, Leather, Dual Sunroof, 3RD Row Seat, Rear view camera in mirror.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={enclave} />
                    <img src={enclave1} />
                    <img src={enclave2} />
                    <img src={enclave3} />
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
                <Stack padding={2}><Text className='tile-text-p'>2008 Lincoln MKX - $6,900</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>100K Miles, All Power, All Wheel Drive, Panoramic Sunroof, Navigation, Heated Seats, Cooled Seats, Leather.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={mkx4} />
                    <img src={mkx2} />
                    <img src={mkx3} />
                    <img src={mkx} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2005 Chevy Trailblazer - $2,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>125K Miles, All Power, 4x4, AC/Heat, Towing Package, Roof Rack, CD, Alloy Wheels. </Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={blazer} />
                    <img src={blazer2} />
                    <img src={blazer3} />
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
                <Stack padding={2}><Text className='tile-text-p'>2007 GMC Envoy Denali - $4,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>113K Miles, Leather, All Power, V8, Towing Package, AC/Heat, CD, Clean.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={EN2} />
                    <img src={EN1} />
                    <img src={EN3} />
                    <img src={EN4} />
                </Carousel>
            </Stack>
        </Stack>
       );
    }
  };

  export default Suvs;