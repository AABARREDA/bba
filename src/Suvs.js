import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import hm1 from './assets/trucks/hm1.jpg';
import hm2 from './assets/trucks/hm2.jpg';
import hm3 from './assets/trucks/hm3.jpg';
import hm4 from './assets/trucks/hm4.jpg';

import equi1 from './assets/trucks/equi1.jpg';
import equi2 from './assets/trucks/equi2.jpg';
import equi3 from './assets/trucks/equi3.jpg';
import equi4 from './assets/trucks/equi4.jpg';

import rado1 from './assets/trucks/rado1.jpg';
import rado2 from './assets/trucks/rado2.jpg';
import rado3 from './assets/trucks/rado3.jpg';
import rado4 from './assets/trucks/rado4.jpg';


import terr1 from './assets/trucks/terr1.jpg';
import terr2 from './assets/trucks/terr2.jpg';
import terr3 from './assets/trucks/terr3.jpg';
import terr4 from './assets/trucks/terr4.jpg';

import expl1 from './assets/trucks/expl1.jpg';
import expl2 from './assets/trucks/expl2.jpg';
import expl3 from './assets/trucks/expl3.jpg';
import expl4 from './assets/trucks/expl4.jpg';

import esc1 from './assets/trucks/esc1.jpg';
import esc2 from './assets/trucks/esc2.jpg';
import esc3 from './assets/trucks/esc3.jpg';
import esc4 from './assets/trucks/esc4.jpg';

import toyh1 from './assets/trucks/toyh1.jpg';

import jeepc1 from './assets/trucks/jeepc1.jpg';
import jeepc2 from './assets/trucks/jeepc2.jpg';
import jeepc3 from './assets/trucks/jeepc3.jpg';
import jeepc4 from './assets/trucks/jeepc4.jpg';

import newsrx1 from './assets/trucks/newsrx1.jpg';
import newsrx2 from './assets/trucks/newsrx2.jpg';
import newsrx3 from './assets/trucks/newsrx3.jpg';
import newsrx4 from './assets/trucks/newsrx4.jpg';

class Suvs extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2012 Cadillac SRX - $10,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>110K Miles, Panoramic Sunroof, Leather, Auto, Transmission, Front Wheel Drive, Heated Seats.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={newsrx1} />
                    <img src={newsrx2} />
                    <img src={newsrx3} />
                    <img src={newsrx4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2011 Jeep Grand Cherokee - $10,500.</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>144K Miles, All Power, 4x4, V6.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={jeepc1} />
                    <img src={jeepc2} />
                    <img src={jeepc3} />
                    <img src={jeepc4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2016 Toyota Highlander - $23,000.</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>76k Miles, All Wheel Drive, Sunroof, Leather, Navigation, Heated Seats, Camera, Loaded.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={toyh1} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2010 Cadillac Escalade - $14,500.</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>126K Miles, All Wheel Drive, 3rd Row Seat, Leather, All Power, Fresh Tune Up.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={esc1} />
                    <img src={esc2} />
                    <img src={esc3} />
                    <img src={esc4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2015 Ford Explorer - $15,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>115K Miles, Sunroof, All Wheel Drive, All Power, Oil Change, Backup Camera.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={expl1} />
                    <img src={expl2} />
                    <img src={expl3} />
                    <img src={expl4} />
                </Carousel>
            </Stack>
             <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2016 GMC Terrain - $12,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>131K miles, automatic, all power, all wheel drive, back up camera, towing package.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={terr1} />
                    <img src={terr2} />
                    <img src={terr3} />
                    <img src={terr4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2007 GMC Hummer - $30,000</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>135K Miles, 4x4, 6.0 Engine, TV, Backup Cameras, New Brakes, New Tune Up.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={hm1} />
                    <img src={hm2} />
                    <img src={hm3} />
                    <img src={hm4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2012 Chevy Silverado 2500 - $19,000</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>62K miles, Oil Change, AC, New wheels and tires, great truck.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={rado1} />
                    <img src={rado2} />
                    <img src={rado3} />
                    <img src={rado4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2015 Chevy Equinox - $11,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>125K Miles, All Wheel Drive, Leather, AC, Nice/Clean.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={equi1} />
                    <img src={equi2} />
                    <img src={equi3} />
                    <img src={equi4} />
                </Carousel>
            </Stack>
        </Stack>
       );
    }
  };

  export default Suvs;