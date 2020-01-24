import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import nissan from './assets/cars/Nissan.JPEG';
import nissan2 from './assets/cars/nissan2.JPEG';
import nissan3 from './assets/cars/nissan3.JPEG';

import versa from './assets/cars/NissanVersa2007.JPG';
import versa2 from './assets/cars/versa2.JPG';
import versa3 from './assets/cars/versa3.JPG';

import kiario from './assets/cars/KiaRio2012.JPG';
import rio2 from './assets/cars/rio2.JPG';
import rio3 from './assets/cars/rio3.JPG';

import chevyhhr2011 from './assets/cars/ChevyHHR2011.JPG';
import hhr2 from './assets/cars/hhr2.JPG';

import versa08 from './assets/cars/NissanVersa2008.JPG';
import versa082 from './assets/cars/versa082.JPG';
import versa083 from './assets/cars/versa083.JPG';

import caliber from './assets/trucks/caliber.JPG';
import caliber2 from './assets/cars/caliber2.JPG';

import chevyhhr20112 from './assets/cars/ChevyHHR20112.JPG';
import hhr22 from './assets/cars/hhr22.JPG';
import hhr33 from './assets/cars/hhr33.JPG';

import gti from './assets/cars/GTI.JPG';
import gti2 from './assets/cars/gti2.JPG';
import gti3 from './assets/cars/gti3.JPG';
import gti4 from './assets/cars/gti4.JPG';

import focus from './assets/cars/FordFocus.JPG';
import focus2 from './assets/cars/focus2.JPG';
import focus3 from './assets/cars/focus3.JPG';

import g6 from './assets/cars/PontiacG6.JPG';
import g62 from './assets/cars/g62.JPG';
import g63 from './assets/cars/g63.JPG';

import mustang from './assets/cars/FordMustang.JPG';
import stang2 from './assets/cars/stang2.JPG';
import stang3 from './assets/cars/stang3.JPG';
import stang4 from './assets/cars/stang4.JPG';

import s4 from './assets/cars/S4.JPG';
import s42 from './assets/cars/s42.JPG';
import s43 from './assets/cars/s43.JPG';
import s44 from './assets/cars/s44.JPG';

import civic from './assets/cars/HondaCivic.JPG';
import civic2 from './assets/cars/civic2.JPG';
import civic3 from './assets/cars/civic3.JPG';

import stratus from './assets/cars/stratus.JPG';
import stratus2 from './assets/cars/stratus2.JPG';
import stratus3 from './assets/cars/stratus3.JPG';

import century from './assets/cars/BuickCentury2004.JPG';
import century2 from './assets/cars/century2.JPG';
import century3 from './assets/cars/century3.JPG';

import avenger1 from './assets/cars/avenger1.jpg'
import avenger2 from './assets/cars/avenger2.jpg'
import avenger3 from './assets/cars/avenger3.jpg'
import avenger4 from './assets/cars/avenger4.jpg'

import silverA1 from './assets/cars/silverA1.JPEG'
import silverA3 from './assets/cars/silverA3.JPEG'
import silverA4 from './assets/cars/silverA4.JPEG'

import gp1 from './assets/cars/gp1.JPEG'
import gp2 from './assets/cars/gp2.JPEG'
import gp3 from './assets/cars/gp3.JPEG'
import gp4 from './assets/cars/gp4.JPEG'

class Cars extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2010 Dodge Avenger - $4,750</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>110K Miles, All Power, 4DR Sedan, AC/Heat, Good Tires, Automatic.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={avenger1} />
                    <img src={avenger3} />
                    <img src={avenger4} />
                    <img src={avenger2} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2011 Dodge Avenger - $5,450</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>121k Miles, 4 Cyl, 4DR Sedan, Oil Change, AC/Heat, Automatic.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={silverA3} />
                    <img src={silverA1} />
                    <img src={silverA4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2006 Pontiac Grand Prix - $2,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>140K Miles, All Power, 4DR Sedan, Super Charged, AC/Heat, Good Tires, Automatic.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={gp1} />
                    <img src={gp2} />
                    <img src={gp3} />
                    <img src={gp4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2013 Nissan Sentra - $5,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>120K Miles, All Power, Extra Clean in/out, Front Wheel Drive, Keyless Entry, Bluetooth.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={nissan} />
                    <img src={nissan2} />
                    <img src={nissan3} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2002 Dodge Stratus - $2,450</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>150K Miles, All Power, Cold AC, Heater, Sunroof, Front Wheel Drive, Leather, Alloy Wheels, Good Tires.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={stratus} />
                    <img src={stratus2} />
                    <img src={stratus3} />
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
                <Stack padding={2}><Text className='tile-text-p'>2011 Chevy HHR - $4,850</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>90K Miles, Good Tires, 4 Cyl, Good Gas Mileage, Auto Cold AC.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={chevyhhr2011} />
                    <img src={hhr2} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2008 Dodge Caliber - $3,490</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>106K Miles, All Power, Good Mileage, Front Wheel Drive, Cold AC, Oil Change, New Front Brakes.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={caliber} />
                    <img src={caliber2} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2007 Nissan Versa SE - $4250</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>123K Miles, Oil change, Front Wheel Drive, Automatic, Good Tires, Cold AC, 4 Cyl.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={versa} />
                    <img src={versa2} />
                    <img src={versa3} />
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
                <Stack padding={2}><Text className='tile-text-p'>2011 Chevy HHR - $4850</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>127K Miles, Alloy Wheels, Good Tires, All Power, Front Wheel Drive.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={chevyhhr20112} />
                    <img src={hhr22} />
                    <img src={hhr33} />
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
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2007 Pontiac G6 - $3,450</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>70K Miles, Good Tires, Auto, Woodgrain, Clean, Cold AC.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={g6} />
                    <img src={g62} />
                    <img src={g63} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2012 Ford Mustang - $8,450</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>120K Miles, 6 Cyl, All Power, Good Wheels and Tires, Black Interior.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={mustang} />
                    <img src={stang2} />
                    <img src={stang3} />
                    <img src={stang4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2009 Audi S4 - $6274</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>85K Miles, New Battery, Leather, Automotive, Cold AC.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={s4} />
                    <img src={s42} />
                    <img src={s43} />
                    <img src={s44} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2001 Honda Civic - $2,450</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>160K Miles, 5 Speed Manual, All Power, Aftermarket Wheels, Rear Spoiler, Clean in and out.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={civic} />
                    <img src={civic2} />
                    <img src={civic3} />
                </Carousel>
            </Stack>  
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2004 Buick Century - $3,277</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>96K Miles, Leather, Cold AC, Good Tires, Clean inside and out, All Power.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={century} />
                    <img src={century2} />
                    <img src={century3} />
                </Carousel>
            </Stack>  
        </Stack>
       );
    }
  };

  export default Cars;