import React from 'react';
import './App.css';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { Image } from 'office-ui-fabric-react/lib/Image';
import { Separator } from 'office-ui-fabric-react/lib/Separator';
import { Text } from 'office-ui-fabric-react/lib/Text';
import Iframe from 'react-iframe'
import logo from './assets/logo.jpg';

import kiario from './assets/cars/KiaRio2012.JPG';
import chevyhhr2011 from './assets/cars/ChevyHHR2011.JPG';
import versa from './assets/cars/NissanVersa2007.JPG';
import versa08 from './assets/cars/NissanVersa2008.JPG';
import stratus from './assets/cars/stratus.JPG';
import chevyhhr20112 from './assets/cars/ChevyHHR20112.JPG';
import century from './assets/cars/BuickCentury2004.JPG';
import focus from './assets/cars/FordFocus.JPG';
import mustang from './assets/cars/FordMustang.JPG';
import gti from './assets/cars/GTI.JPG';
import civic from './assets/cars/HondaCivic.JPG';
import g6 from './assets/cars/PontiacG6.JPG';
import s4 from './assets/cars/S4.JPG';
import mconv from './assets/cars/mustconv.JPG';
import nissan from './assets/cars/Nissan.JPEG';

import tahoe from './assets/trucks/ChevyTahoe2008.jpg';
import sportage from './assets/trucks/KiaSportage2007.JPG';
import tahoe16 from './assets/trucks/ChevyTahoe16.JPG';
import mkx from './assets/trucks/MKX.JPG';
import quest from './assets/trucks/Quest.JPG';
import sienna from './assets/trucks/Sienna.JPG';
import silverado from './assets/trucks/SilveradoLT.JPG';
import terrain from './assets/trucks/Terrain.JPG';
import trailblazer from './assets/trucks/TrailBlazer.JPG';
import caliber from './assets/trucks/caliber.JPG';
import srx from './assets/trucks/SRX.jpeg';


import cbr from './assets/other/hondacbr.JPG'

function App() {
  return (
    <div>
    <div className="App">
    <header className="App-header">
        <Image className='logo' imageFit={1} src={logo}/>
        610 N. Cunningham Urbana, IL. 61802 <br/>
        Phone: 217-344-2020  <br/>
        Fax: 217-344-2022 <br/>
    </header>
    </div>
    <Separator className='App-header'>Current Inventory</Separator>

      <Stack horizontal horizontalAlign='center' wrap gap='15'>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={nissan}/>
            <Text className='tile-text-p'> 2013 Nissan Sentra - $5,950</Text>
            <Text className='tile-text-d'>120K Miles, All Power, Extra Clean in/out, Front Wheel Drive, Keyless Entry, Bluetooth.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={tahoe}/>
            <Text className='tile-text-p'> 2008 Chevy Tahoe - $10,500</Text>
            <Text className='tile-text-d'>121K Miles, All Power, Third Row Seat, Cold AC, Alloy Wheels, Good Tires, Flex Fuel.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={sportage}/>
            <Text className='tile-text-p'>2007 Kia Sportage - $4,950</Text>
            <Text className='tile-text-d'>90K Miles, All Wheel Drive, All Power, Cold AC, Tune Up complete including Oil change.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={versa}/>
            <Text className='tile-text-p'>2007 Nissan Versa SE - $4250</Text>
            <Text className='tile-text-d'>123K Miles, Oil change, Front Wheel Drive, Automatic, Good Tires, Cold AC, 4 Cyl.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={kiario}/>
            <Text className='tile-text-p'>2012 Kia Rio Ex Hatchback - $5,850</Text>
            <Text className='tile-text-d'>90K Miles, Cold AC, Good Tires, Cruise/Tilt, Automatic, Extra Clean, 4 Cyl.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={chevyhhr2011}/>
            <Text className='tile-text-p'>2011 Chevy HHR - $4,850</Text>
            <Text className='tile-text-d'>90K Miles, Good Tires, 4 Cyl, Good Gas Mileage, Auto Cold AC.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={versa08}/>
            <Text className='tile-text-p'>2008 Nissan Versa - 4,250</Text>
            <Text className='tile-text-d'>114K Miles, 4 Cyl, Good Gas Mileage, Good Engine and Transmission, Automatic.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={caliber}/>
            <Text className='tile-text-p'>2008 Dodge Caliber - $3,490</Text>
            <Text className='tile-text-d'>106K Miles, All Power, Good Mileage, Front Wheel Drive, Cold AC, Oil Change, New Front Brakes.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={chevyhhr20112}/>
            <Text className='tile-text-p'>2011 Chevy HHR - $4850</Text>
            <Text className='tile-text-d'>127K Miles, Alloy Wheels, Good Tires, All Power, Front Wheel Drive.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={gti}/>
            <Text className='tile-text-p'>2009 VW GTI - $6,900</Text>
            <Text className='tile-text-d'>70K Miles, Paddle Shifter, Turbo, Tartan Interior, Premium Rims, Extra clean in and out.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={focus}/>
            <Text className='tile-text-p'>2013 Ford Focus - $5,950</Text>
            <Text className='tile-text-d'>129K Miles, Good Tires, Extra Clean, Cold AC, Oil Change Completed, 4 Cyl.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={g6}/>
            <Text className='tile-text-p'>2007 Pontiac G6 - $3,450</Text>
            <Text className='tile-text-d'>70K Miles, Good Tires, Auto, Woodgrain, Clean, Cold AC.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={mustang}/>
            <Text className='tile-text-p'>2012 Ford Mustang - $8,450</Text>
            <Text className='tile-text-d'>120K Miles, 6 Cyl, All Power, Good Wheels and Tires, Black Interior.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={tahoe16}/>
            <Text className='tile-text-p'>2016 Chevy Tahoe - $15,500</Text>
            <Text className='tile-text-d'>109K Miles, 3rd Row Seat, Nice Rims, Good Tires, Caddy Tail Lights, Leather.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={terrain}/>
            <Text className='tile-text-p'>2012 GMC Terrain - $9,250</Text>
            <Text className='tile-text-d'>105K Miles, All Power, Backup Camera, Keyless Entry, Alloy Wheels, Cold AC, Good Tires, Extra Clean.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={mkx}/>
            <Text className='tile-text-p'>2008 Lincoln MKX - $6,950</Text>
            <Text className='tile-text-d'>99K Miles, Panoramic Roof, Navigation, Leather, AWD, Clean.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={quest}/>
            <Text className='tile-text-p'>2009 Nissan Quest - $6,100</Text>
            <Text className='tile-text-d'>130K Miles, Automatic, Alloy Wheels, Good Tires, Back Up Camera.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={s4}/>
            <Text className='tile-text-p'>2009 Audi S4 - $6274</Text>
            <Text className='tile-text-d'>85K Miles, New Battery, Leather, Automotive, Cold AC.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={civic}/>
            <Text className='tile-text-p'>2001 Honda Civic - $2,450</Text>
            <Text className='tile-text-d'>160K Miles, 5 Speed Manual, All Power, Aftermarket Wheels, Rear Spoiler, Clean in and out.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={trailblazer}/>
            <Text className='tile-text-p'>2004 Chevy trailblazer - $4950</Text>
            <Text className='tile-text-d'>136K Miles, 3rd Row Seat, All Power, Alloy Wheels.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={sienna}/>
            <Text className='tile-text-p'>2007 Toyota Sienna - $6250</Text>
            <Text className='tile-text-d'>130K Miles, All Power, Cold AC, Rear AC, Extra Clean in and out, Towing Package, Good Tires.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={stratus}/>
            <Text className='tile-text-p'>2002 Dodge Stratus - $2,450</Text>
            <Text className='tile-text-d'>150K Miles, All Power, Cold AC, Heater, Sunroof, Front Wheel Drive, Leather, Alloy Wheels, Good Tires.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={century}/>
            <Text className='tile-text-p'>2004 Buick Century - $3,277</Text>
            <Text className='tile-text-d'>96K Miles, Leather, Cold AC, Good Tires, Clean inside and out, All Power.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={mconv}/>
            <Text className='tile-text-p'>2005 Mustang Convertible - $4,950</Text>
            <Text className='tile-text-d'>160K Miles, Cold AC, All Power, Chrome Rims, Leather, Super clean.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={silverado}/>
            <Text className='tile-text-p'>2016 Chevy Silverado LT- $25,550</Text>
            <Text className='tile-text-d'>21K Miles, Backup Camera, Side Running Boards, 4x4, 4 Door, Navigation, Leather, All Power.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={cbr}/>
            <Text className='tile-text-p'>2004 Honda CBR 600RR - $2,750</Text>
            <Text className='tile-text-d'>23K Miles, New Tires, Tune Up compelte including oil change.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={srx}/>
            <Text className='tile-text-p'>2012 Cadillac SRX - $12,500</Text>
            <Text className='tile-text-d'>86K Miles, V6, Front Wheel Drive, Keyless Entry, Panoramic Roof, Leather, Heated and Cooled Seats, Dual TVs, NAV, DVD, Bluetooth, Chrome Rims.</Text>
          </Stack>
       </Stack>

      <Separator className='App-header'>Info</Separator>

      <Stack horizontal horizontalAlign='center' wrap gap='50'>
          <Stack>
          <Text className='App-info-test'>Our Location </Text>
          <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.0649338166468!2d-88.20565628435764!3d40.11855638164319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880cd79c8a9ba8bb%3A0xbe55a6bc792bdab1!2sBBA%20Auto%20Sales%20LLC!5e0!3m2!1sen!2sus!4v1578122642967!5m2!1sen!2sus"
            width="500px"
            height="350px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"/>
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
