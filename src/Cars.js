import React from 'react';
import { resetControlledWarnings, Stack, Text } from 'office-ui-fabric-react';
import './App.css'; 
import { Carousel } from 'react-responsive-carousel';
import { Depths } from '@uifabric/fluent-theme/lib/fluent/FluentDepths';

import fm1 from './assets/cars/fm1.jpg'
import fm2 from './assets/cars/fm2.jpg'
import fm3 from './assets/cars/fm3.jpg'
import fm4 from './assets/cars/fm4.jpg'

import newcamry1 from './assets/cars/newcamry1.jpg'
import newcamry2 from './assets/cars/newcamry2.jpg'
import newcamry3 from './assets/cars/newcamry3.jpg'
import newcamry4 from './assets/cars/newcamry4.jpg'

import newm1 from './assets/cars/newm1.jpg'
import newm2 from './assets/cars/newm2.jpg'
import newm3 from './assets/cars/newm3.jpg'

import mustangapril1 from './assets/cars/mustangapril1.jpg'
import mustangapril2 from './assets/cars/mustangapril2.jpg'
import mustangapril3 from './assets/cars/mustangapril3.jpg'
import mustangapril4 from './assets/cars/mustangapril4.jpg'

import mustangapril11 from './assets/cars/mustangapril11.jpg'
import mustangapril22 from './assets/cars/mustangapril22.jpg'
import mustangapril33 from './assets/cars/mustangapril33.jpg'
import mustangapril44 from './assets/cars/mustangapril44.jpg'

import ccamry1 from './assets/cars/ccamry1.jpg'
import ccamry2 from './assets/cars/ccamry2.jpg'
import ccamry3 from './assets/cars/ccamry3.jpg'
import ccamry4 from './assets/cars/ccamry4.jpg'

import ccharger1 from './assets/cars/ccharger1.jpg';
import ccharger2 from './assets/cars/ccharger2.jpg';
import ccharger3 from './assets/cars/ccharger3.jpg';
import ccharger4 from './assets/cars/ccharger4.jpg';

import cchallenger1 from './assets/cars/cchallenger1.jpg';
import cchallenger2 from './assets/cars/cchallenger2.jpg';
import cchallenger3 from './assets/cars/cchallenger3.jpg';
import cchallenger4 from './assets/cars/cchallenger4.jpg';

import cccharger1 from './assets/cars/cccharger1.jpg';
import cccharger2 from './assets/cars/cccharger2.jpg';
import cccharger3 from './assets/cars/cccharger3.jpg';
import cccharger4 from './assets/cars/cccharger4.jpg';

import aavenger1 from './assets/cars/aavenger1.jpg';
import aavenger2 from './assets/cars/aavenger2.jpg';
import aavenger3 from './assets/cars/aavenger3.jpg';
import aavenger4 from './assets/cars/aavenger4.jpg';

import aaavenger1 from './assets/cars/aaavenger1.jpg';
import aaavenger2 from './assets/cars/aaavenger2.jpg';
import aaavenger3 from './assets/cars/aaavenger3.jpg';
import aaavenger4 from './assets/cars/aaavenger4.jpg';

import ssonic1 from './assets/cars/ssonic1.jpg';
import ssonic2 from './assets/cars/ssonic2.jpg';

import ssentra1 from './assets/cars/ssentra1.jpg';
import ssentra2 from './assets/cars/ssentra2.jpg';
import ssentra3 from './assets/cars/ssentra3.jpg';
import ssentra4 from './assets/cars/ssentra4.jpg';

import iimpala1 from './assets/cars/iimpala1.jpg';

import ccruze1 from './assets/cars/ccruze1.jpg';
import ccruze2 from './assets/cars/ccruze2.jpg';
import ccruze3 from './assets/cars/ccruze3.jpg';
import ccruze4 from './assets/cars/ccruze4.jpg';

class Cars extends React.Component {
    render() {
    return(
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2006 Dodge Charger RT - $11,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>71K Miles, V-8, Leather, Great Tires, Extra Clean.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={ccharger1} />
                    <img src={ccharger2} />
                    <img src={ccharger3} />
                    <img src={ccharger4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2016 Dodge Challenger - $16,000</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>43K Miles, All Power, Automatic, V-6, Great Condition.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={cchallenger1} />
                    <img src={cchallenger2} />
                    <img src={cchallenger3} />
                    <img src={cchallenger4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2015 Chevy Cruze - $5,900</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>107K Miles, Automatic, Sunroof, ALl Power, Dependable .</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={ccruze1} />
                    <img src={ccruze2} />
                    <img src={ccruze3} />
                    <img src={ccruze4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2010 CHevy Impala - $3,900</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>149k Miles, Fresh Tune Up, New Oil Change, Automatic.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={iimpala1} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2013 Nissan Sentra - $7,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>137K Miles, All Power, Front Wheel Drive, Oil Change, Xtra Clean.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={ssentra1} />
                    <img src={ssentra2} />
                    <img src={ssentra3} />
                    <img src={ssentra4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2015 Chevy Sonic - $6,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>125K Miles, Automatic, Front Wheel Drive.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={ssonic1} />
                    <img src={ssonic2} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2013 Dodge Avenger - $4,900</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>125K Miles, Automatic, Front Wheel Drive, AC.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={aaavenger1} />
                    <img src={aaavenger2} />
                    <img src={aaavenger3} />
                    <img src={aaavenger4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2012 Dodge Avenger - $5,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>110K Miles, 4 Cyl. Automatic, Front Wheel, Great Dependable car.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={aavenger1} />
                    <img src={aavenger2} />
                    <img src={aavenger3} />
                    <img src={aavenger4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2007 Dodge Charger R/T- $10,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>136K Miles, V-8, All Power, Automatic, AC, Great Condition.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={cccharger1} />
                    <img src={cccharger2} />
                    <img src={cccharger3} />
                    <img src={cccharger4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2013 Toyota Camry - $11,500  </Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>113K Miles, All Power, AC/Heat, Automatic, Front Wheel Drive, Fresh Tune Up.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={ccamry1} />
                    <img src={ccamry2} />
                    <img src={ccamry3} />
                    <img src={ccamry4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2012 Ford Mustang - $10,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>113K Miles, Automatic Transmission, Electric Top, Great Wheels and Tires.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={mustangapril1} />
                    <img src={mustangapril2} />
                    <img src={mustangapril3} />
                    <img src={mustangapril4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2012 Ford Mustang - $10,500</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>125K Miles, Automatic Transmission, Rear Wheel Drive, Electric Top, Great Tires.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={mustangapril11} />
                    <img src={mustangapril22} />
                    <img src={mustangapril33} />
                    <img src={mustangapril44} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2004 Mercury Grand Marquis - $3,700</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>144K Miles, V8 Engine, All Power, Rear Wheel Drive.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={newm1} />
                    <img src={newm2} />
                    <img src={newm3} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2011 Toyota Camry - $7,900</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>155K Miles, new engine with 75k Miles, All Power, Fresh Tune Up, Alloy Wheels, Auto.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={newcamry1} />
                    <img src={newcamry2} />
                    <img src={newcamry3} />
                    <img src={newcamry4} />
                </Carousel>
            </Stack>
            <Stack horizontalAlign='center' className='tile' style={{ boxShadow: Depths.depth8 }}>
                <Stack padding={2}><Text className='tile-text-p'>2000 Ford Mustang - $15,000</Text></Stack>
                <Stack padding={3}>
                <Text className='tile-text-d'>95K Miles, V8 Manual, New oil change, new brakes, new exhaust, excellent condition.</Text>
                </Stack>
                <Carousel width="450px" emulateTouch showStatus={false}>
                    <img src={fm1} />
                    <img src={fm2} />
                    <img src={fm3} />
                    <img src={fm4} />
                </Carousel>
            </Stack>
        </Stack>
       );
    }
};

  export default Cars;