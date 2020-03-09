import React from 'react';
import './App.css'; 

class Header extends React.Component {
    render() {
    return(
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
       );
    }
  };

  export default Header;