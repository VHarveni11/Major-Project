import React from 'react';
import PlayBox from '../components/PlayBox';
import ArtistBox from '../components/ArtistBox';
import { NavLink } from 'react-router-dom';
import {Icon} from '../components/Icons';
import Song from '../components/Song';
import Nav from '../components/nav'
import {Fragment} from 'react'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import stores  from '../components/stores'
import Playlist from '../components/playlist'
import PlayerControls from '../components/playerControls'
import Fullscreen from "../components/fullscreen"
import { useState, useEffect } from 'react'
import PHeader from './profileHeader'
import SongNew from '../components/songNew'
import Bottombar from '../components/Bottombar'

export default function Artist4() {
  const data = "Arman Malik"
  const songs =[
    {
      id: 1,
      title: 'Butta Bomma',
      artist: 'Arman Malik',
      image: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Who_Says.jpg',
      src: 'https://pagaliworld.com/files/download/id/3680'
    },

    {
      id: 2,
      title: 'Emo Emo',
      artist: 'Anaganaga',
      image: 'https://c.saavncdn.com/592/Naatu-Naatu-From-Rrr--Telugu-2021-20211110131000-500x500.jpg',
      src:'https://pagaliworld.com/files/download/id/3852'
    },

    {
      id: 3,
      title: 'Guche Gulabi',
      artist: 'Arman Malik',
      image: 'https://jesusful.com/wp-content/uploads/2022/07/Alan-Walker-Sing-Me-To-Sleep-Mp3-Download-Lyrics.jpg',
      src:'https://jesusful.com/wp-content/uploads/music/2022/07/Alan_Walker_-_Sing_Me_To_Sleep_(Jesusful.com).mp3'
    },

   {
      id: 4,
      title: 'Buddhu Sa Mann',
      artist: 'Arman Malik',
      image: 'https://i.pinimg.com/736x/6e/a1/c5/6ea1c525edf91ad58b8d40ebba8fbb83.jpg',
      src:'https://www.naijagreen.com/wp-content/uploads/music/2021/08/Taylor_Swift_-_Blank_Space_[NaijaGreen.Com]_.mp3'
    },

    {
      id: 5,
      title: 'Sun Maahi',
      artist: 'Arman Malik',
      image: 'https://images.hungama.com/c/1/13f/605/1494286/1494286_300x300.jpg',
      src:'https://dns4.pendusaab.com/download/128k-azyfy/Antharyami.mp3'
    },  
  ]
  const [full,setFull]=useState(false)

  function maxim(){
    console.log("Maxim clicked")
    setFull(prev=>!prev);
  }

  if(full) return <Fullscreen click={maxim} />

  return (
    <Provider store={stores}>
      <Router>
    <div className='flex'>
      <Nav />
      <div className='w-full'>
      <PHeader data={data}/>
      <div className={styles.tableWrapper}> 
        <table className={styles.table}> 
        <tbody className={styles.tableHeader}>
          <tr>
            <th className='pb-3'>#</th>
            <th className='pb-3'></th>
            <th className='pb-3'>TITLE</th> 
            <th className='pb-3'>PLAYS</th>
            <th className='pb-3'>
              <img alt='' src='assets/time.svg' />
            </th>
          </tr>
        </tbody>
        <tbody className='mb-6 block'></tbody>
        
        {songs.map(song => {
          console.log("songs "+song)
          return <SongNew item={song} key={song.id} />
        })}  

      </table>
      </div>
      {/*<Playlist songs={songs}/>
      <PlayerControls songs={songs} click={maxim} />*/}
      </div>
    </div> 
    <Bottombar/>
    </Router>
    </Provider>
  )
}
const styles = {
    th: `pb-5 hover:opacity-50 cursor-pointer`,
    table: `w-full text-left`,
    tableWrapper: `max-w-7xl m-auto p-3 mt-5 mb-30`,
    tableHeader: `border-b border-gray-100/20 pb-5 opacity-50`,
  }