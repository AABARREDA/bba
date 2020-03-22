import React from 'react';
import './App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Stack, Separator } from 'office-ui-fabric-react/lib/';

import Cars from './Cars';
import Other from './Other';
import Suvs from './Suvs';
import Trucks from './Trucks';
import Vans from './Vans';
import Footer from './Footer';
import Header from './Header';
import { DefaultButton } from 'office-ui-fabric-react';

class App extends React.Component{

  state = {view: 'All'};

  componentDidMount (){
    this.setState({view: 'All'});
   }

   updateViewA(){
     this.setState({view: 'All'});
   }

   updateViewC(){
    this.setState({view: 'Cars'});
  }

  updateViewT(){
    this.setState({view: 'Trucks'});
  }
  
  updateViewS(){
    this.setState({view: 'Suvs'});
  }
  
  updateViewV(){
    this.setState({view: 'Vans'});
  }

  render (){

    if (this.state.view == 'All'){
    return(
    <div>
      <Header/>
      <Separator className='App-header'>Current Inventory</Separator>
      <Stack className='bContainer' horizontal horizontalAlign='center' wrap gap='25'>
          <DefaultButton text="Show All" onClick={() => this.updateViewA()}/>
          <DefaultButton text="Cars" onClick={() => this.updateViewC()}/>
          <DefaultButton text="Trucks" onClick={() => this.updateViewT()}/>
          <DefaultButton text="Suvs" onClick={() => this.updateViewS()}/>
          <DefaultButton text="Vans" onClick={() => this.updateViewV()}/>
      </Stack>
      <Stack horizontal horizontalAlign='center' wrap gap='15'>
          <Cars/>
          <Trucks/>
          <Vans/>
          <Suvs/>
       </Stack>
      <Footer/>
    </div>
    );
  }

    if (this.state.view == 'Cars'){
      return (
        <div>
        <Header/>
        <Separator className='App-header'>Current Inventory</Separator>
        <Stack className='bContainer' horizontal horizontalAlign='center' wrap gap='25'>
            <DefaultButton text="Show All" onClick={() => this.updateViewA()}/>
            <DefaultButton text="Cars" onClick={() => this.updateViewC()}/>
            <DefaultButton text="Trucks" onClick={() => this.updateViewT()}/>
            <DefaultButton text="Suvs" onClick={() => this.updateViewS()}/>
            <DefaultButton text="Vans" onClick={() => this.updateViewV()}/>
        </Stack>
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Cars/>
        </Stack>
        <Footer/>
    </div>
      );
    }

    if (this.state.view == 'Trucks'){
      return (
        <div>
        <Header/>
        <Separator className='App-header'>Current Inventory</Separator>
        <Stack className='bContainer' horizontal horizontalAlign='center' wrap gap='25'>
            <DefaultButton text="Show All" onClick={() => this.updateViewA()}/>
            <DefaultButton text="Cars" onClick={() => this.updateViewC()}/>
            <DefaultButton text="Trucks" onClick={() => this.updateViewT()}/>
            <DefaultButton text="Suvs" onClick={() => this.updateViewS()}/>
            <DefaultButton text="Vans" onClick={() => this.updateViewV()}/>
        </Stack>
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Trucks/>
        </Stack>
        <Footer/>
    </div>
      );
    }

    if (this.state.view == 'Suvs'){
      return (
        <div>
        <Header/>
        <Separator className='App-header'>Current Inventory</Separator>
        <Stack className='bContainer' horizontal horizontalAlign='center' wrap gap='25'>
            <DefaultButton text="Show All" onClick={() => this.updateViewA()}/>
            <DefaultButton text="Cars" onClick={() => this.updateViewC()}/>
            <DefaultButton text="Trucks" onClick={() => this.updateViewT()}/>
            <DefaultButton text="Suvs" onClick={() => this.updateViewS()}/>
            <DefaultButton text="Vans" onClick={() => this.updateViewV()}/>
        </Stack>
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Suvs/>
        </Stack>
        <Footer/>
    </div>
      );
    }

    if (this.state.view == 'Vans'){
      return (
        <div>
        <Header/>
        <Separator className='App-header'>Current Inventory</Separator>
        <Stack className='bContainer' horizontal horizontalAlign='center' wrap gap='25'>
            <DefaultButton text="Show All" onClick={() => this.updateViewA()}/>
            <DefaultButton text="Cars" onClick={() => this.updateViewC()}/>
            <DefaultButton text="Trucks" onClick={() => this.updateViewT()}/>
            <DefaultButton text="Suvs" onClick={() => this.updateViewS()}/>
            <DefaultButton text="Vans" onClick={() => this.updateViewV()}/>
        </Stack>
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Vans/>
        </Stack>
        <Footer/>
    </div>
      );
    }

    if (this.state.view == 'Moto'){
      return (
        <div>
        <Header/>
        <Separator className='App-header'>Current Inventory</Separator>
        <Stack className='bContainer' horizontal horizontalAlign='center' wrap gap='25'>
            <DefaultButton text="Show All" onClick={() => this.updateViewA()}/>
            <DefaultButton text="Cars" onClick={() => this.updateViewC()}/>
            <DefaultButton text="Trucks" onClick={() => this.updateViewT()}/>
            <DefaultButton text="Suvs" onClick={() => this.updateViewS()}/>
            <DefaultButton text="Vans" onClick={() => this.updateViewV()}/>
        </Stack>
        <Stack horizontal horizontalAlign='center' wrap gap='15'>
            <Other/>
        </Stack>
        <Footer/>
    </div>
      );
    }

  };
};

export default App;
