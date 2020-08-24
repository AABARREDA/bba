import React from 'react';
import { Stack, Text } from 'office-ui-fabric-react';
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

import intrepid from './assets/cars/intrepid.JPEG';
import intrepid2 from './assets/cars/intrepid2.JPEG';
import intrepid3 from './assets/cars/intrepid3.JPEG';
import intrepid4 from './assets/cars/intrepid4.JPEG';

import malibu from './assets/cars/malibu.jpeg'
import malibu2 from './assets/cars/malibu2.jpeg'
import malibu3 from './assets/cars/malibu3.jpeg'
import malibu4 from './assets/cars/malibu3.jpeg'

import mustang from './assets/cars/mustang.jpeg'
import mustang1 from './assets/cars/mustang1.jpeg'
import mustang2 from './assets/cars/mustang2.jpeg'
import mustang3 from './assets/cars/mustang3.jpeg'

import pt from './assets/cars/pt.jpeg'
import pt1 from './assets/cars/pt1.jpeg'
import pt2 from './assets/cars/pt2.jpeg'
import pt3 from './assets/cars/pt3.jpeg'

import fiesta from './assets/cars/fiesta.jpeg'
import fiesta1 from './assets/cars/fiesta1.jpeg'
import fiesta2 from './assets/cars/fiesta2.jpeg'
import fiesta3 from './assets/cars/fiesta3.jpeg'

import chal from './assets/cars/chal.jpeg'
import chal1 from './assets/cars/chal1.jpeg'
import chal2 from './assets/cars/chal2.jpeg'
import chal3 from './assets/cars/chal3.jpeg'

import sonota from './assets/cars/sonota.jpeg'
import sonota1 from './assets/cars/sonota1.jpeg'
import sonota2 from './assets/cars/sonota2.jpeg'
import sonota3 from './assets/cars/sonota3.jpeg'

import camry from './assets/cars/camry.jpeg'
import camry1 from './assets/cars/camry1.jpeg'
import camry2 from './assets/cars/camry2.jpeg'
import camry3 from './assets/cars/camry3.jpeg'

import spark from './assets/cars/spark.jpeg'
import spark1 from './assets/cars/spark1.jpeg'
import spark2 from './assets/cars/spark2.jpeg'
import spark3 from './assets/cars/spark3.jpeg'

import cadi01 from './assets/cars/cadi01.jpeg'
import cadi02 from './assets/cars/cadi02.jpeg'

import g601 from './assets/cars/g601.jpeg'
import g602 from './assets/cars/g602.jpeg'
import g603 from './assets/cars/g603.jpeg'
import g604 from './assets/cars/g604.jpeg'

import vic01 from './assets/cars/vic01.jpeg'
import vic02 from './assets/cars/vic02.jpeg'
import vic03 from './assets/cars/vic03.jpeg'
import vic04 from './assets/cars/vic04.jpeg'

import red01 from './assets/cars/red01.jpeg'
import red02 from './assets/cars/red02.jpeg'

class Cars extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2005 Cadillac Deville - $3,450</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>125K Miles, Leather, All Power, Cold AC/Heater, Alloy Wheels, Good Tires.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={cadi01} />
                    <img src={cadi02} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2008 Pontiac G6 - $4,250</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>93K Miles, 4 Cyl, Automatic Transmission, AC/Heater, Good Tires, Dependable Car.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={g601} />
                    <img src={g602} />
                    <img src={g603} />
                    <img src={g604} />
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
                <Stack padding={2}><Text className='tile-text-p'>2001 Ford Mustang - $3,450</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>125K Miles, Automatic Transmission, Convertible, Leather, V-6, Alloy Wheels, Good Tires.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={red01} />
                    <img src={red02} />
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
                <Stack padding={2}><Text className='tile-text-p'>2011 Ford Fiesta - $4,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>116K Miles, All Power, Alloy Wheels, Good Tires, Clean.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={fiesta} />
                    <img src={fiesta1} />
                    <img src={fiesta2} />
                    <img src={fiesta3} />
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