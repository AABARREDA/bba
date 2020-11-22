import React from 'react';
import { resetControlledWarnings, Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import kiario from './assets/cars/KiaRio2012.JPG';
import rio2 from './assets/cars/rio2.JPG';
import rio3 from './assets/cars/rio3.JPG';

import gti from './assets/cars/GTI.JPG';
import gti2 from './assets/cars/gti2.JPG';
import gti3 from './assets/cars/gti3.JPG';
import gti4 from './assets/cars/gti4.JPG';

import focus from './assets/cars/FordFocus.JPG';
import focus2 from './assets/cars/focus2.JPG';
import focus3 from './assets/cars/focus3.JPG';

import pt from './assets/cars/pt.jpeg'
import pt1 from './assets/cars/pt1.jpeg'
import pt2 from './assets/cars/pt2.jpeg'
import pt3 from './assets/cars/pt3.jpeg'


import spark from './assets/cars/spark.jpeg'
import spark1 from './assets/cars/spark1.jpeg'
import spark2 from './assets/cars/spark2.jpeg'
import spark3 from './assets/cars/spark3.jpeg'

import cadi01 from './assets/cars/cadi01.jpeg'
import cadi02 from './assets/cars/cadi02.jpeg'
import cadi03 from './assets/cars/cadi03.jpeg'
import cadi04 from './assets/cars/cadi04.jpeg'


import vic01 from './assets/cars/vic01.jpeg'
import vic02 from './assets/cars/vic02.jpeg'
import vic03 from './assets/cars/vic03.jpeg'
import vic04 from './assets/cars/vic04.jpeg'

import versa1 from './assets/cars/versa1.jpeg'
import versa2 from './assets/cars/versa2.jpeg'
import versa3 from './assets/cars/versa3.jpeg'
import versa4 from './assets/cars/versa4.jpeg'

import sentra01 from './assets/cars/sentra01.jpeg'
import sentra02 from './assets/cars/sentra02.jpeg'
import sentra03 from './assets/cars/sentra03.jpeg'
import sentra04 from './assets/cars/sentra04.jpeg'

import avalon1 from './assets/cars/avalon1.jpeg'
import avalon2 from './assets/cars/avalon2.jpeg'
import avalon3 from './assets/cars/avalon3.jpeg'
import avalon4 from './assets/cars/avalon4.jpeg'

import camry1 from './assets/cars/camry1.jpeg'
import camry2 from './assets/cars/camry2.jpeg'
import camry3 from './assets/cars/camry3.jpeg'
import camry4 from './assets/cars/camry4.jpeg'

import charger from './assets/cars/charger.jpeg'
import charger1 from './assets/cars/charger1.jpeg'
import charger2 from './assets/cars/charger2.jpeg'
import charger3 from './assets/cars/charger3.jpeg'

import sonic1 from './assets/cars/sonic1.jpeg'
import sonic2 from './assets/cars/sonic2.jpeg'
import sonic3 from './assets/cars/sonic3.jpeg'
import sonic4 from './assets/cars/sonic4.jpeg'

import corolla1 from './assets/cars/corolla1.jpeg'
import corolla2 from './assets/cars/corolla2.jpeg'
import corolla3 from './assets/cars/corolla3.jpeg'

class Cars extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2013 Chevrolet Sonic - $5,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>91K Miles, All Power, AC/Heat, Automatic transmission, 4 Doora.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={sonic1} />
                    <img src={sonic2} />
                    <img src={sonic3} />
                    <img src={sonic4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2010 Toyota Corolla - $5,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>91K Miles, Automatic Transmission, Front Wheel Drive, 4 Door.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={corolla1} />
                    <img src={corolla2} />
                    <img src={corolla3} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2008 Dodge Charger - $8,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>110K Miles, Sunroof, Hemi 5.7 Engine, All Power, Automatic, 22" Wheels and tires, Fresh tune up.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={charger} />
                    <img src={charger1} />
                    <img src={charger2} />
                    <img src={charger3} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2005 Cadillac Deville - $3,450</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>125K Miles, Leather, All Power, Cold AC/Heater, Alloy Wheels, Good Tires.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={cadi01} />
                    <img src={cadi02} />
                    <img src={cadi03} />
                    <img src={cadi04} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2007 Toyota Camry - $6,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>85K Miles, All Power, 4 Cyl, Cold AC, Automatic Transmission, Front Wheel Drive, Alloy Wheels, Great Tires.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={camry1} />
                    <img src={camry2} />
                    <img src={camry3} />
                    <img src={camry4} />
                </Carousel>
            </Stack>            
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2004 Crown Victoria - $3,450</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>146K Miles, All Power, V8, Automatic Transmission, Extra Clean in and Out, Good Tires.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={vic01} />
                    <img src={vic02} />
                    <img src={vic03} />
                    <img src={vic04} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2017 Chevy Spark</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>Automatic Transmission, Front Wheel Drive, Back Up Camera, Bluetooth, Cold AC/Heater.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={spark} />
                    <img src={spark1} />
                    <img src={spark2} />
                    <img src={spark3} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2010 Chrysler PT Cruiser - $4,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>87K Miles, All Power, 4Cyl, Front Wheel Drive, Extra Clean In and Out, Nice dependable vehicle.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={pt2} />
                    <img src={pt1} />
                    <img src={pt} />
                    <img src={pt3} />
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