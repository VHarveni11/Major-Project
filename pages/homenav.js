import Home from '../components/home'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import stores  from '../components/stores'
import Nav from '../components/nav'
import PlayerControls from '../components/playerControls'
import { useState, useEffect } from 'react'
import Fullscreen from "../components/fullscreen"
import Bottombar from '../components/Bottombar'

function Homenav() {

  return (
    <Provider store={stores}> 
    <Router>
    <div className='flex'>
      <Nav />
      <div className='w-full'>
        <Home/>
      </div>
    </div> 
    <Bottombar/>
    </Router>
    </Provider>
  );
}

export default Homenav;
