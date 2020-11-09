import React from 'react';
import {
  BrowserRouter as Router,
  Switch as Switcher,
  Route, 
  NavLink
} from 'react-router-dom';
import HomeQrInput from '../home/QRForm';
import HomeQRList from '../community/QRList'
import QRDetails from '../community/QRDetails'
import './App.scss';



function App() {
  return (
    <Router>
      <header>
        <NavLink strict to='/'>
          <h1>QRGENERATOR</h1>
        </NavLink>
        <NavLink strict to='/community'>
          <h1>COMMUNITY</h1>
        </NavLink>
      </header>
      <Switcher>
        <Route exact path='/' component={HomeQrInput} />
        <Route exact path='/community' component={HomeQRList} />
        <Route exact path='/community/:id' component={QRDetails} />
      </Switcher>
    </Router>
  );
}

export default App;
