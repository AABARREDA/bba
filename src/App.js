import React from 'react';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { Image } from 'office-ui-fabric-react/lib/Image';
import { Separator } from 'office-ui-fabric-react/lib/Separator';
import { Text } from 'office-ui-fabric-react/lib/Text';
import { Carousel } from 'react-responsive-carousel';

import Iframe from 'react-iframe'

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

import tahoe from './assets/trucks/ChevyTahoe2008.jpg';
import tahoe2 from './assets/trucks/tahoe2.JPG';
import tahoe3 from './assets/trucks/tahoe3.JPG';

import kia from './assets/trucks/KiaSportage2007.JPG';
import kia2 from './assets/trucks/kia2.JPG';
import kia3 from './assets/trucks/kia3.JPG';
import kia5 from './assets/trucks/kia5.JPG';

import tahoe16 from './assets/trucks/ChevyTahoe16.JPG';
import tahoe162 from './assets/trucks/tahoe162.JPG';
import tahoe163 from './assets/trucks/tahoe163.JPG';
import tahoe164 from './assets/trucks/tahoe164.JPG';

import terrain from './assets/trucks/Terrain.JPG';
import terrain2 from './assets/trucks/terrain2.JPG';

import mkx from './assets/trucks/MKX.JPG';
import mkx2 from './assets/trucks/mkx2.JPG';
import mkx3 from './assets/trucks/mkx3.JPG';

import quest from './assets/trucks/Quest.JPG';
import quest2 from './assets/trucks/quest2.JPG';
import quest3 from './assets/trucks/quest3.JPG';

import srx from './assets/trucks/SRX.jpeg';
import srx2 from './assets/trucks/srx2.JPEG';

import sienna from './assets/trucks/Sienna.JPG';
import sienna2 from './assets/trucks/sienna2.JPG';
import sienna3 from './assets/trucks/sienna3.JPG';

import trailblazer from './assets/trucks/TrailBlazer.JPG';
import trail2 from './assets/trucks/trail2.JPG';
import trail3 from './assets/trucks/trail3.JPG';

import cbr from './assets/other/hondacbr.JPG'
import cbr2 from './assets/other/cbr2.JPG'
import cbr3 from './assets/other/cbr3.JPG'
import cbr4 from './assets/other/cbr4.JPG'

function App() {
  return (
    <div>
        <div className="App">
        <div className="hero-image">
          <header className="App-header-2">
            <br/>
            BBA Auto Sales<br/>
            610 N. Cunningham Urbana, IL. 61802 <br/>
            Phone: 217-344-2020  <br/>
            Fax: 217-344-2022 <br/>
          </header>
        </div>
        </div>

    <Separator className='App-header'>Current Inventory</Separator>

      <Stack horizontal horizontalAlign='center' wrap gap='15'>
          <Stack horizontalAlign='center' className='tile'>
              <Carousel width="450px" emulateTouch>
                  <img src={nissan} />
                  <img src={nissan2} />
                  <img src={nissan3} />
              </Carousel>
              <Text className='tile-text-p'> 2013 Nissan Sentra - $5,950</Text>
              <Text className='tile-text-d'>120K Miles, All Power, Extra Clean in/out, Front Wheel Drive, Keyless Entry, Bluetooth.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
              <Carousel width="450px" emulateTouch>
                  <img src={tahoe} />
                  <img src={tahoe2} />
                  <img src={tahoe3} />
              </Carousel>
            <Text className='tile-text-p'> 2008 Chevy Tahoe - $10,500</Text>
            <Text className='tile-text-d'>121K Miles, All Power, Third Row Seat, Cold AC, Alloy Wheels, Good Tires, Flex Fuel.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
              <Carousel width="450px" emulateTouch>
                  <img src={kia} />
                  <img src={kia2} />
                  <img src={kia3} />
                  <img src={kia5} />
              </Carousel>
            <Text className='tile-text-p'>2007 Kia Sportage - $4,950</Text>
            <Text className='tile-text-d'>90K Miles, All Wheel Drive, All Power, Cold AC, Tune Up complete including Oil change.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
              <Carousel width="450px" emulateTouch>
                  <img src={versa} />
                  <img src={versa2} />
                  <img src={versa3} />
              </Carousel>
            <Text className='tile-text-p'>2007 Nissan Versa SE - $4250</Text>
            <Text className='tile-text-d'>123K Miles, Oil change, Front Wheel Drive, Automatic, Good Tires, Cold AC, 4 Cyl.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Carousel width="450px" emulateTouch>
                  <img src={kiario} />
                  <img src={rio2} />
                  <img src={rio3} />
            </Carousel>
            <Text className='tile-text-p'>2012 Kia Rio Ex Hatchback - $5,850</Text>
            <Text className='tile-text-d'>90K Miles, Cold AC, Good Tires, Cruise/Tilt, Automatic, Extra Clean, 4 Cyl.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Carousel width="450px" emulateTouch>
                  <img src={chevyhhr2011} />
                  <img src={hhr2} />
            </Carousel>
            <Text className='tile-text-p'>2011 Chevy HHR - $4,850</Text>
            <Text className='tile-text-d'>90K Miles, Good Tires, 4 Cyl, Good Gas Mileage, Auto Cold AC.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={versa08}/>
            <Carousel width="450px" emulateTouch>
                  <img src={versa08} />
                  <img src={versa082} />
                  <img src={versa083} />
            </Carousel>
            <Text className='tile-text-p'>2008 Nissan Versa - 4,250</Text>
            <Text className='tile-text-d'>114K Miles, 4 Cyl, Good Gas Mileage, Good Engine and Transmission, Automatic.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Carousel width="450px" emulateTouch>
                  <img src={caliber} />
                  <img src={caliber2} />
            </Carousel>
            <Text className='tile-text-p'>2008 Dodge Caliber - $3,490</Text>
            <Text className='tile-text-d'>106K Miles, All Power, Good Mileage, Front Wheel Drive, Cold AC, Oil Change, New Front Brakes.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Carousel width="450px" emulateTouch>
                  <img src={chevyhhr20112} />
                  <img src={hhr22} />
                  <img src={hhr33} />
            </Carousel>
            <Text className='tile-text-p'>2011 Chevy HHR - $4850</Text>
            <Text className='tile-text-d'>127K Miles, Alloy Wheels, Good Tires, All Power, Front Wheel Drive.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={gti}/>
            <Carousel width="450px" emulateTouch>
                  <img src={gti} />
                  <img src={gti2} />
                  <img src={gti3} />
                  <img src={gti4} />
            </Carousel>
            <Text className='tile-text-p'>2009 VW GTI - $6,900</Text>
            <Text className='tile-text-d'>70K Miles, Paddle Shifter, Turbo, Tartan Interior, Premium Rims, Extra clean in and out.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Carousel width="450px" emulateTouch>
                  <img src={focus} />
                  <img src={focus2} />
                  <img src={focus3} />
            </Carousel>
            <Text className='tile-text-p'>2013 Ford Focus - $5,950</Text>
            <Text className='tile-text-d'>129K Miles, Good Tires, Extra Clean, Cold AC, Oil Change Completed, 4 Cyl.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Carousel width="450px" emulateTouch>
                  <img src={g6} />
                  <img src={g62} />
                  <img src={g63} />
            </Carousel>
            <Text className='tile-text-p'>2007 Pontiac G6 - $3,450</Text>
            <Text className='tile-text-d'>70K Miles, Good Tires, Auto, Woodgrain, Clean, Cold AC.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Carousel width="450px" emulateTouch>
                  <img src={mustang} />
                  <img src={stang2} />
                  <img src={stang3} />
                  <img src={stang4} />
            </Carousel>
            <Text className='tile-text-p'>2012 Ford Mustang - $8,450</Text>
            <Text className='tile-text-d'>120K Miles, 6 Cyl, All Power, Good Wheels and Tires, Black Interior.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Carousel width="450px" emulateTouch>
                  <img src={tahoe16} />
                  <img src={tahoe162} />
                  <img src={tahoe163} />
                  <img src={tahoe164} />
            </Carousel>
            <Text className='tile-text-p'>2016 Chevy Tahoe - $15,500</Text>
            <Text className='tile-text-d'>109K Miles, 3rd Row Seat, Nice Rims, Good Tires, Caddy Tail Lights, Leather.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Carousel width="450px" emulateTouch>
                  <img src={terrain} />
                  <img src={terrain2} />
            </Carousel>
            <Text className='tile-text-p'>2012 GMC Terrain - $9,250</Text>
            <Text className='tile-text-d'>105K Miles, All Power, Backup Camera, Keyless Entry, Alloy Wheels, Cold AC, Good Tires, Extra Clean.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Carousel width="450px" emulateTouch>
                  <img src={mkx} />
                  <img src={mkx2} />
                  <img src={mkx3} />
            </Carousel>
            <Text className='tile-text-p'>2008 Lincoln MKX - $6,950</Text>
            <Text className='tile-text-d'>99K Miles, Panoramic Roof, Navigation, Leather, AWD, Clean.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Carousel width="450px" emulateTouch>
                  <img src={quest} />
                  <img src={quest2} />
                  <img src={quest3} />
            </Carousel>
            <Text className='tile-text-p'>2009 Nissan Quest - $6,100</Text>
            <Text className='tile-text-d'>130K Miles, Automatic, Alloy Wheels, Good Tires, Back Up Camera.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Carousel width="450px" emulateTouch>
                  <img src={s4} />
                  <img src={s42} />
                  <img src={s43} />
                  <img src={s44} />
            </Carousel>
            <Text className='tile-text-p'>2009 Audi S4 - $6274</Text>
            <Text className='tile-text-d'>85K Miles, New Battery, Leather, Automotive, Cold AC.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Carousel width="450px" emulateTouch>
                  <img src={civic} />
                  <img src={civic2} />
                  <img src={civic3} />
            </Carousel>
            <Text className='tile-text-p'>2001 Honda Civic - $2,450</Text>
            <Text className='tile-text-d'>160K Miles, 5 Speed Manual, All Power, Aftermarket Wheels, Rear Spoiler, Clean in and out.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Carousel width="450px" emulateTouch>
                  <img src={trailblazer} />
                  <img src={trail2} />
                  <img src={trail3} />
            </Carousel>
            <Text className='tile-text-p'>2004 Chevy trailblazer - $4950</Text>
            <Text className='tile-text-d'>136K Miles, 3rd Row Seat, All Power, Alloy Wheels.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Carousel width="450px" emulateTouch>
                  <img src={sienna} />
                  <img src={sienna2} />
                  <img src={sienna3} />
            </Carousel>
            <Text className='tile-text-p'>2007 Toyota Sienna - $6250</Text>
            <Text className='tile-text-d'>130K Miles, All Power, Cold AC, Rear AC, Extra Clean in and out, Towing Package, Good Tires.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Carousel width="450px" emulateTouch>
                  <img src={stratus} />
                  <img src={stratus2} />
                  <img src={stratus3} />
            </Carousel>
            <Text className='tile-text-p'>2002 Dodge Stratus - $2,450</Text>
            <Text className='tile-text-d'>150K Miles, All Power, Cold AC, Heater, Sunroof, Front Wheel Drive, Leather, Alloy Wheels, Good Tires.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Carousel width="450px" emulateTouch>
                  <img src={century} />
                  <img src={century2} />
                  <img src={century3} />
            </Carousel>
            <Text className='tile-text-p'>2004 Buick Century - $3,277</Text>
            <Text className='tile-text-d'>96K Miles, Leather, Cold AC, Good Tires, Clean inside and out, All Power.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Carousel width="450px" emulateTouch>
                  <img src={cbr} />
                  <img src={cbr2} />
                  <img src={cbr3} />
                  <img src={cbr4} />
            </Carousel>
            <Text className='tile-text-p'>2004 Honda CBR 600RR - $2,750</Text>
            <Text className='tile-text-d'>23K Miles, New Tires, Tune Up compelte including oil change.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Carousel width="450px" emulateTouch>
                  <img src={srx} />
                  <img src={srx2} />
            </Carousel>
            <Text className='tile-text-p'>2012 Cadillac SRX - $12,500</Text>
            <Text className='tile-text-d'>86K Miles, V6, Front Wheel Drive, Keyless Entry, Panoramic Roof, Leather, Heated and Cooled Seats, Dual TVs, NAV, DVD, Bluetooth, Chrome Rims.</Text>
          </Stack>
       </Stack>

      <Separator className='App-header'>Info</Separator>

      <Stack horizontal horizontalAlign='center' wrap gap='50'>
          <Stack className='tile-about'>
          <Text className='App-info-test'>Our Location </Text>
          <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.0649338166468!2d-88.20565628435764!3d40.11855638164319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880cd79c8a9ba8bb%3A0xbe55a6bc792bdab1!2sBBA%20Auto%20Sales%20LLC!5e0!3m2!1sen!2sus!4v1578122642967!5m2!1sen!2sus"
            width="450px"
            height="350px"
            display="initial"
            />
          </Stack>
          <Stack className='tile-about'>
            <Text className='App-info-test'>About Us</Text>
            <Text className='App-info-test'>BBA Auto Sales is family owned and operated. We have been part of the Urbana community for the last 27 years. 
            Being a small family owned dealership allows us to provide quality cars while keeping our prices low.</Text><br/>
            <Text horizontalAlign='right' className='App-info-test'>Antonio Barreda - Owner</Text>
          </Stack>
      </Stack>
      <footer className="App-footer">
        Copyright @ 2020 BBA Auto Sales
      </footer>
    </div>
  );
}

export default App;
