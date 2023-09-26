import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import jp1 from './assets/trucks/jp1.jpg';
import jp2 from './assets/trucks/jp2.jpg';
import jp3 from './assets/trucks/jp3.jpg';
import jp4 from './assets/trucks/jp4.jpg';

import hm1 from './assets/trucks/hm1.jpg';
import hm2 from './assets/trucks/hm2.jpg';
import hm3 from './assets/trucks/hm3.jpg';
import hm4 from './assets/trucks/hm4.jpg';

import yd1 from './assets/trucks/yd1.jpg';
import yd2 from './assets/trucks/yd2.jpg';

import equi1 from './assets/trucks/equi1.jpg';
import equi2 from './assets/trucks/equi2.jpg';
import equi3 from './assets/trucks/equi3.jpg';
import equi4 from './assets/trucks/equi4.jpg';

import te1 from './assets/trucks/te1.jpg';
import te2 from './assets/trucks/te2.jpg';
import te3 from './assets/trucks/te3.jpg';
import te4 from './assets/trucks/te4.jpg';

import rado1 from './assets/trucks/rado1.jpg';
import rado2 from './assets/trucks/rado2.jpg';
import rado3 from './assets/trucks/rado3.jpg';
import rado4 from './assets/trucks/rado4.jpg';

import fex1 from './assets/trucks/fex1.jpg';
import fex2 from './assets/trucks/fex2.jpg';
import fex3 from './assets/trucks/fex3.jpg';
import fex4 from './assets/trucks/fex4.jpg';

import hm21 from './assets/trucks/hm21.jpg';
import hm22 from './assets/trucks/hm22.jpg';
import hm23 from './assets/trucks/hm23.jpg';
import hm24 from './assets/trucks/hm24.jpg';

import terr1 from './assets/trucks/terr1.jpg';
import terr2 from './assets/trucks/terr2.jpg';
import terr3 from './assets/trucks/terr3.jpg';
import terr4 from './assets/trucks/terr4.jpg';

import srx1 from './assets/trucks/srx1.png';
import srx2 from './assets/trucks/srx2.png';
import srx3 from './assets/trucks/srx3.png';
import srx4 from './assets/trucks/srx4.png';

class Suvs extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2010 Cadillac SRX - $10,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>111K Miles, Automatic, All Wheel Drive, Leather, Panoramic Roof, Extra Clean.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={srx1} />
                    <img src={srx2} />
                    <img src={srx3} />
                    <img src={srx4} />
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
                <Stack padding={2}><Text className='tile-text-p'>2006 GMC Hummer - $17,000</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>154K Miles, TVs, Rock Star Wheels, Great Tires, 4x4, Bluetooth, LEDs.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={hm21} />
                    <img src={hm22} />
                    <img src={hm23} />
                    <img src={hm24} />
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
                <Stack padding={2}><Text className='tile-text-p'>2014 Ford Explorer - $13,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>136K Miles, All Power, All Wheel Drive, AC, New Oil Change.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={fex1} />
                    <img src={fex2} />
                    <img src={fex3} />
                    <img src={fex4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2012 Chevy Silverado 2500 - $21,000</Text></Stack>
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
                <Stack padding={2}><Text className='tile-text-p'>2012 GMC Terrain - $11,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>108K Miles, All Wheel Drive, Leather, Sunroof, Back Up Camera.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={te1} />
                    <img src={te2} />
                    <img src={te3} />
                    <img src={te4} />
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
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2015 GMC Yukon - $22,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>150K Miles, Remote Start, Leather, Sunroof, Bluetooth, Towing Package.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={yd1} />
                    <img src={yd2} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2016 Jeep Renegade - $13,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>110K Miles, 4x4, Automatic Transmission, Alloy Wheels, Great Tires.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={jp1} />
                    <img src={jp2} />
                    <img src={jp3} />
                    <img src={jp4} />
                </Carousel>
            </Stack>
        </Stack>
       );
    }
  };

  export default Suvs;