import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import rst1 from './assets/trucks/rst1.jpg';
import rst2 from './assets/trucks/rst2.jpg';
import rst3 from './assets/trucks/rst3.jpg';
import rst4 from './assets/trucks/rst4.jpg';

import sierrablack1 from './assets/trucks/sierrablack1.jpg';
import sierrablack2 from './assets/trucks/sierrablack2.jpg';
import sierrablack3 from './assets/trucks/sierrablack3.jpg';
import sierrablack4 from './assets/trucks/sierrablack4.jpg';

import denali1 from './assets/trucks/denali1.jpg';
import denali2 from './assets/trucks/denali2.jpg';
import denali3 from './assets/trucks/denali3.jpg';
import denali4 from './assets/trucks/denali4.jpg';

class Trucks extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2012 GMC Denali - $15,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>117K Miles, 4x4 Leather, DVD, Sunroof, 6.0 Engine, Towing Package, All Power.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={denali1} />
                    <img src={denali2} />
                    <img src={denali3} />
                    <img src={denali4} />
                </Carousel>
            </Stack>
             <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2016 GMC Sierra - $21,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>119K Miles, 4x4, 3' Lift Kit, Aftermarket Wheels, Great Tires, Auto, New oil change, depandable.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={sierrablack1} />
                    <img src={sierrablack2} />
                    <img src={sierrablack3} />
                    <img src={sierrablack4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2022 Chevrolet Silverado Z71 RST - $68,000</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>2,400 Miles, All Leather, Heated Steering Wheel/Seats, Cameras, All OPTIONS!</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={rst1} />
                    <img src={rst2} />
                    <img src={rst3} />
                    <img src={rst4} />
                </Carousel>
            </Stack>
        </Stack>
       );
    }
  };

  export default Trucks;