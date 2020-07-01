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

class Cars extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
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
                <Stack padding={2}><Text className='tile-text-p'>2006 Ford Mustang - $5,950</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>120K Miles, All Power, 6 Cyl, Alloy Wheels, Good Tires, Automatic, Dependable Car.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={mustang} />
                    <img src={mustang1} />
                    <img src={mustang2} />
                    <img src={mustang3} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2010 Dodge Challenger - $10,900</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>78K Miles, All Power, Auto, 6 Cyl, 22" Wheels, Excellent Tires, Rear Wheel Drive.</Text>
                </Stack>
                <Carousel width="400px" emulateTouch showStatus={false}>
                    <img src={chal} />
                    <img src={chal1} />
                    <img src={chal2} />
                    <img src={chal3} />
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
                <Stack padding={2}><Text className='tile-text-p'>2004 Ford Mustang - $3,950</Text></Stack>
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