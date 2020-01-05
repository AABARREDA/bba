import React from 'react';
import logo from './assets/logo.jpg';
import './App.css';
import { Stack } from 'office-ui-fabric-react/lib/Stack';
import { Image } from 'office-ui-fabric-react/lib/Image';
import { Separator } from 'office-ui-fabric-react/lib/Separator';
import { Text } from 'office-ui-fabric-react/lib/Text';
import Iframe from 'react-iframe'


function App() {
  return (
    <div>
    <div className="App">
    <header className="App-header">
        <Image className='logo' imageFit={1} src={logo}/>
        610 N. Cunningham Urbana, IL. 61802 <br/>
        Phone: 217-344-2020  <br/>
        Fax: 217-344-2022
    </header>
    </div>
    <Separator className='App-header'>Current Inventory</Separator>

      <Stack horizontal horizontalAlign='center' wrap>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={logo}/>
            <Text> 2008 Chevy Tahoe $10500, 121K Miles, All Power, Third Row Seat, Cold AC, Alloy Wheels, Good Tires, Flex Fuel. 4 pics.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={logo}/>
            <Text> 2007 Kia Sportage, $4950,90 K miles, All wheel Drive, All Power, cold Ac, tune up complete including oil chage. 5 pics. </Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={logo}/>
            <Text>2007 Nissan Versa SE, $4250, 123k Miles, oil change, front wheel drive, automatic, good tires, cold ac, 4 cyl, good gas mileage, 4 pics.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={logo}/>
            <Text> 2012 kia rio ex hatchback, $5850,90 k miles, cold ac, good tires, cruise/tilt, automatic, extra clean, 4 cyl, great gas mileage, 5 pics</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={logo}/>
            <Text>2011 Chevy HHR $4850, 90k miles, good tures, 4 cyl, good gas mileage, auto cold ac. 4 pics</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={logo}/>
            <Text>2008 nissan versa, $4250 114k miles, 4 cyl good gas mileage, good engine, transmission, automatic, 4 pics </Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={logo}/>
            <Text>2008 Dodge Caliber $3490, 106 k miles, all power, good mileage, front Wheel Drive, cold ac, oil change, new front brakes, 4 pics</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={logo}/>
            <Text>2011 Chevy HHR, 4850, 127 k miles, alloy wheels, good tires, all power, front wheel drive, 5 pics</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={logo}/>
            <Text>2009 VW GTI, 6900, 70k miles, paddle shifter, turbo, tartan interior, premium rims, x clean in and out,</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={logo}/>
            <Text>2013 Ford Focus, 5950, 129 k miles, good tires, extra clean, cold ac, oil change completed, 4 cyl good gas mileage, 5 pics</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={logo}/>
            <Text>2007 Pontiac G6 low miles, 3450, 70k miles, good tires, auto, woodgrain, clean, cold ac.4 pics </Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={logo}/>
            <Text>2012 ford mustang, 8450, 120k miles, 6 cyl, all power, good wheels and tires, black interior, 6 pics</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={logo}/>
            <Text>2013 chevy tahoe, $15500, 109 k miles, 3rd row seat, nice rims, good tires, caddy tail lights, leather, 6 pics</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={logo}/>
            <Text>2012 gmc terrain, 9250, 105k miles, all power, backup camera, keyless entry, alloy wheels, cold ac, good tires, extra clean 3 pics</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={logo}/>
            <Text>2008 lincoln mkx, 6950, 99k miles, panoramic roof, navigation, leather, awd, clean. 4 pics </Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={logo}/>
            <Text>2009 nissan quest, 6100, 130k miles, automatic, alloy wheels, good tires, back up camera, 4 pics</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={logo}/>
            <Text>2009 Audi S4, 6274, 85 k miles, new battery, leather, automotive, cold ac, 5 pics</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={logo}/>
            <Text>2001 honda civic, 2450, 160k miles, 5 speed manual, all power, aftermarket wheels, rear spoiler, clean in and out. 4 pics</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={logo}/>
            <Text>2004 chevy trailblazer, 4950, 136k miles, 3rd row seat, all power, alloy wheels, 4 pics</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={logo}/>
            <Text>2007 toyota sienna, 6250, 130k miles, all power, cold ac, rear ac, x clean in and out, towing package, good tires 4 pics</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={logo}/>
            <Text>2002 dodge stratus, 2450, 150k miles, all power, ac, heater, sunroof, front wheel drive, leather, alloy wheels and good tires. 4 pics.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={logo}/>
            <Text>2004 buick century, 3277, 96k miles, leather cold ac good tires, clean inside and out, all power. 4 pics</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={logo}/>
            <Text>2005 mustang convertible, 4950, 160k miles, cold ac, all power, chrome rims, leather supwer clean, 7 pics</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={logo}/>
            <Text>2016 chevy silverado lt low mileage, 25500, 21k miles, backup camera, extra clean, side running boards, 4x4, 4 door, navigation, leather, all power, 9 pics.</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={logo}/>
            <Text>2004 honda cbr 600rr 2750, 23k miles, new tires, tune up, oil change, 7 pics</Text>
          </Stack>
          <Stack horizontalAlign='center' className='tile'>
            <Image className='tile-pic' imageFit={1} src={logo}/>
            <Text>2012 cadillac srx, 12500, 86k miles, all power, keyess entry, panoramic roof, leather, ac and heated seats, two tv,s navigation, dvd, bluetooth, front wheel drive, v6 extra clean, chrome rims, good tires, xm 11 pics</Text>
          </Stack>
       </Stack>

      <Separator className='App-header'>Info</Separator>

      <Stack horizontal horizontalAlign='center' wrap>
          <Stack>
          <Text className='App-info'>Our Location </Text>
          <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.0649338166468!2d-88.20565628435764!3d40.11855638164319!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880cd79c8a9ba8bb%3A0xbe55a6bc792bdab1!2sBBA%20Auto%20Sales%20LLC!5e0!3m2!1sen!2sus!4v1578122642967!5m2!1sen!2sus"
            width="500px"
            height="350px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"/>
          </Stack>
          <Stack className='tile-about'>
          <Text className='App-info'>About Us </Text>
          </Stack>
      </Stack>
      <footer className="App-footer">
        Copyright @ 2020 BBA Auto Sales
      </footer>
    </div>
  );
}

export default App;
