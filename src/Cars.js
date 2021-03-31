import React from 'react';
import { resetControlledWarnings, Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import gti from './assets/cars/GTI.JPG';
import gti2 from './assets/cars/gti2.JPG';
import gti3 from './assets/cars/gti3.JPG';
import gti4 from './assets/cars/gti4.JPG';

import focus from './assets/cars/FordFocus.JPG';
import focus2 from './assets/cars/focus2.JPG';
import focus3 from './assets/cars/focus3.JPG';

import sonic1 from './assets/cars/sonic1.jpeg'
import sonic2 from './assets/cars/sonic2.jpeg'
import sonic3 from './assets/cars/sonic3.jpeg'
import sonic4 from './assets/cars/sonic4.jpeg'

import soul1 from './assets/cars/soul1.jpg'
import soul2 from './assets/cars/soul2.jpg'
import soul3 from './assets/cars/soul3.jpg'
import soul4 from './assets/cars/soul4.jpg'

import cooper1 from './assets/cars/cooper1.jpg'
import cooper2 from './assets/cars/cooper2.jpg'
import cooper3 from './assets/cars/cooper3.jpg'
import cooper4 from './assets/cars/cooper4.jpg'

import fiesta1 from './assets/cars/fiesta1.jpg'
import fiesta2 from './assets/cars/fiesta2.jpg'
import fiesta3 from './assets/cars/fiesta3.jpg'
import fiesta4 from './assets/cars/fiesta4.jpg'

import conv1 from './assets/cars/conv1.jpg'
import conv2 from './assets/cars/conv2.jpg'
import conv3 from './assets/cars/conv3.jpg'
import conv4 from './assets/cars/conv4.jpg'

import sentrav1 from './assets/cars/sentrav1.jpg'
import sentrav2 from './assets/cars/sentrav2.jpg'
import sentrav3 from './assets/cars/sentrav3.jpg'
import sentrav4 from './assets/cars/sentrav4.jpg'

import elantrav1 from './assets/cars/elantrav1.jpg'
import elantrav2 from './assets/cars/elantrav2.jpg'
import elantrav3 from './assets/cars/elantrav3.jpg'
import elantrav4 from './assets/cars/elantrav4.jpg'

import camryv1 from './assets/cars/camryv1.jpg'
import camryv2 from './assets/cars/camryv2.jpg'
import camryv3 from './assets/cars/camryv3.jpg'
import camryv4 from './assets/cars/camryv4.jpg'

import sentra12v1 from './assets/cars/sentra12v1.jpg'
import sentra12v2 from './assets/cars/sentra12v2.jpg'
import sentra12v3 from './assets/cars/sentra12v3.jpg'
import sentra12v4 from './assets/cars/sentra12v4.jpg'

import sentra11v1 from './assets/cars/sentra11v1.jpg'
import sentra11v2 from './assets/cars/sentra11v2.jpg'
import sentra11v3 from './assets/cars/sentra11v3.jpg'
import sentra11v4 from './assets/cars/sentra11v4.jpg'

class Cars extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2012 Hyundai Elantra - $6,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>71K Miles, All Power, Front Wheel Drive, New Front Brakes, New Oil Change, Extra Clean.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={elantrav1} />
                    <img src={elantrav2} />
                    <img src={elantrav3} />
                    <img src={elantrav4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2011 Toyota Camry - $6,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>94K Miles, All Power, Front Wheel Drive, Auto, 4 Cyl., New Brakes, Oil Change.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={camryv1} />
                    <img src={camryv2} />
                    <img src={camryv3} />
                    <img src={camryv4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2011 Nissan Sentra - $6,850</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>92K Miles, All Power, Automatic, Alloy Wheels, Good Tires, Front Wheel Drive.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={sentra11v1} />
                    <img src={sentra11v2} />
                    <img src={sentra11v3} />
                    <img src={sentra11v4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2012 Nissan Sentra - $7,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>67K Miles, All Power, Auto, Alloy Wheels, Excellent Tires, AC/Heat.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={sentra12v1} />
                    <img src={sentra12v2} />
                    <img src={sentra12v3} />
                    <img src={sentra12v4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2010 Nissan Sentra - $5,850</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>132K Miles, Auto Transmission, Front Wheel Drive, All Power</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={sentrav1} />
                    <img src={sentrav2} />
                    <img src={sentrav3} />
                    <img src={sentrav4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2002 Ford Mustang GT - $6,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>86K Miles, V8, Convertible, 5 Speed Manual, Leather, Alloy Wheels, Good Tires,</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={conv1} />
                    <img src={conv2} />
                    <img src={conv3} />
                    <img src={conv4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2009 Mini Cooper S - $7,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>78K Miles, Turbo Charged, All Power, Alloy Wheels, Panoramic Roof, Automatic, Leather. </Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={cooper1} />
                    <img src={cooper2} />
                    <img src={cooper3} />
                    <img src={cooper4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2011 Ford Fiesa - $5,450</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>79K Miles, 5 Speed Manual, Leather, New Oil Change, Nice and Clean.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={fiesta1} />
                    <img src={fiesta2} />
                    <img src={fiesta3} />
                    <img src={fiesta4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2012 Kia Soul - $5,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>127K Miles, Front Wheel Drive, Automatic Transmission, Fresh Tune-Up, New Oil Change.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={soul1} />
                    <img src={soul2} />
                    <img src={soul3} />
                    <img src={soul4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2013 Chevrolet Sonic - $5,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>91K Miles, All Power, AC/Heat, Automatic transmission, 4 Doors.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={sonic1} />
                    <img src={sonic2} />
                    <img src={sonic3} />
                    <img src={sonic4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2009 VW GTI - $6,900</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>70K Miles, Paddle Shifter, Turbo, Tartan Interior, Premium Rims, Extra clean in and out.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={gti} />
                    <img src={gti2} />
                    <img src={gti3} />
                    <img src={gti4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2013 Ford Focus - $5,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>129K Miles, Good Tires, Extra Clean, Cold AC, Oil Change Completed, 4 Cyl.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={focus} />
                    <img src={focus2} />
                    <img src={focus3} />
                </Carousel>
            </Stack>
        </Stack>
       );
    }
  };

  export default Cars;