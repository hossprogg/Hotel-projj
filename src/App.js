import React from 'react';

import {Home} from './pages/Home'
import {Rooms} from './pages/Rooms'
import SingleRoom from './pages/SingleRoom'
import Error from './pages/Error'
import {Switch,Route} from 'react-router-dom'
import { Navbar } from './components/navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Route exact path="/" component={Home}/>
    <Route exact path="/rooms" component={Rooms}/>
    <Route exact path="/singleRoom" component={SingleRoom}/>
    </>
  );
}

export default App;
