import React from 'react';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Stack, Separator } from 'office-ui-fabric-react/lib/';


import Cars from './Cars';
import Other from './Other';
import Suvs from './Suvs';
import Vans from './Vans';
import Footer from '/Footer';

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
          <Cars/>
          <Suvs/>
          <Vans/>
          <Other/>
       </Stack>

      <Footer/>
    </div>
  );
}

export default App;
