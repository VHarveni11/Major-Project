import Home from '../components/home'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import stores  from '../components/stores'
import Nav from '../components/nav'
import PlayerControls from '../components/playerControls'
import { useState, useEffect } from 'react'
import Fullscreen from "../components/fullscreen"
import Bottombar from '../components/Bottombar'
import Artist from './artist_1track'
import ArtistAlbum from '../components/mainuser'
import PHeader from './profileHeader'
import Track from './tracks'
import Following from './following'
import Artist1 from './artist_1track'
import Followers from './followers'
import NavNew from '../components/navNew'

function ArtProfile() {
  const data="Peter"
  return (
    <Provider store={stores}>
    <Router>
    <div className='flex'>
      <NavNew />
      <div className='w-full'>
        <PHeader data={data}/>
        <Track/>
        <Following/>
        <Followers/>
      </div>
    </div> 
    <Bottombar/>
    </Router>
    </Provider>
  );
}

export default ArtProfile;
