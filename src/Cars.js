import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import kiario from './assets/cars/KiaRio2012.JPG';
import rio2 from './assets/cars/rio2.JPG';
import rio3 from './assets/cars/rio3.JPG';

import versa08 from './assets/cars/NissanVersa2008.JPG';
import versa082 from './assets/cars/versa082.JPG';
import versa083 from './assets/cars/versa083.JPG';

import gti from './assets/cars/GTI.JPG';
import gti2 from './assets/cars/gti2.JPG';
import gti3 from './assets/cars/gti3.JPG';
import gti4 from './assets/cars/gti4.JPG';

import focus from './assets/cars/FordFocus.JPG';
import focus2 from './assets/cars/focus2.JPG';
import focus3 from './assets/cars/focus3.JPG';

import intrepid from './assets/cars/intrepid.JPEG';
import intrepid2 from './assets/cars/intrepid2.JPEG';
import intrepid3 from './assets/cars/intrepid3.JPEG';
import intrepid4 from './assets/cars/intrepid4.JPEG';

import astra from './assets/cars/astra.JPEG';
import astra2 from './assets/cars/astra2.JPEG';
import astra3 from './assets/cars/astra3.JPEG';
import astra4 from './assets/cars/astra4.jpg';

import yaris from './assets/cars/yaris.JPEG';
import yaris2 from './assets/cars/yaris2.JPEG';
import yaris3 from './assets/cars/yaris3.JPEG';
import yaris4 from './assets/cars/yaris4.jpg';

import malibu from './assets/cars/malibu.jpeg'
import malibu2 from './assets/cars/malibu2.jpeg'
import malibu3 from './assets/cars/malibu3.jpeg'
import malibu4 from './assets/cars/malibu3.jpeg'

import mustang from './assets/cars/mustang.jpeg'
import mustang1 from './assets/cars/mustang1.jpeg'
import mustang2 from './assets/cars/mustang2.jpeg'
import mustang3 from './assets/cars/mustang3.jpeg'

import el1 from './assets/trucks/el1.jpeg';
import el2 from './assets/trucks/el2.jpeg';
import el3 from './assets/trucks/el3.jpeg';
import el4 from './assets/trucks/el4.jpeg';

class Cars extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2012 Chevrolet Malibu - $5,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>113K Miles, 4 Cyl., All Power, Alloy Wheels, Auto, Oil Change completed, Good tires.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={malibu} />
                    <img src={malibu2} />
                    <img src={malibu3} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2013 Hyundai Elantra  Equinox - $6,250</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>54K Miles, All Power, Bluetooth, Auto Transmission, 4 Cyl, Extra Clean in and out, Alloy Wheels, Good Tires.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={el1} />
                    <img src={el2} />
                    <img src={el3} />
                    <img src={el4} />
                </Carousel>
            </Stack> 
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2000 Ford Mustang - $3,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>156K Miles, Convertible, Leather, V6 Auto, Allow Wheels, Good Tires.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={mustang} />
                    <img src={mustang1} />
                    <img src={mustang2} />
                    <img src={mustang3} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2007 Toyota Yaris - $2,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>124K Miles, All Power, Manual, 2DR, Good Tires, New Belt, Oil Change/Tune Up.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={yaris} />
                    <img src={yaris2} />
                    <img src={yaris3} />
                    <img src={yaris4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2008 Saturn Astra - $3,727</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>126K Miles, Automatic, 2DR, 4Cyl. Alloy Wheels, Good Tires.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={astra} />
                    <img src={astra2} />
                    <img src={astra3} />
                    <img src={astra4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2001 Dodge Intrepid - $2,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>82K Miles, One Owner, All Power,A/C Heat, Good Tire, Leather.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={intrepid} />
                    <img src={intrepid2} />
                    <img src={intrepid3} />
                    <img src={intrepid4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2012 Kia Rio Ex Hatchback - $5,850</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>90K Miles, Cold AC, Good Tires, Cruise/Tilt, Automatic, Extra Clean, 4 Cyl.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={kiario} />
                    <img src={rio2} />
                    <img src={rio3} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2008 Nissan Versa - 4,250</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>114K Miles, 4 Cyl, Good Gas Mileage, Good Engine and Transmission, Automatic.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={versa08} />
                    <img src={versa082} />
                    <img src={versa083} />
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