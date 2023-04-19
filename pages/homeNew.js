import Header from '../components/header'
import Nav from '../components/nav'
import Playlist from '../components/playlist'
import PlayerControls from '../components/playerControls'
import Activity from '../components/activity'
import { useState, useEffect } from 'react'
import UploadModal from '../components/UploadModal'
import useSpotify from '../hooks/useSpotify'
import Fullscreen from "../components/fullscreen"
import LoginButtons from '../components/personalLogin'
import HomePageNew from "./homePageNew"
import HomePage from './homepage'

const HomeNew = () => {


  /*const [showUploadMusic, setShowUploadMusic] = useState(false)
  const [title, setTitle] = useState('')
  const [musicUrl, setMusicUrl] = useState('')

  const { newMusic, getSongs } = useSpotify(
    musicUrl,
    title,
    setTitle,
    setMusicUrl,
    setShowUploadMusic,
  )

  const [songs, setSongs] = useState([])

  useEffect(() => {
    getSongs().then(songs => {
      setSongs(songs)
    })
  }, [])*/


  const [full,setFull]=useState(false)
  const [user,setUser]=useState(false) // new
  const [artist,setArtist]=useState(false) //new
  
  function maxim(){
    console.log("Maxim clicked")
    setFull(prev=>!prev);
  }

  function userClick(){
    setUser(user=>!user)
  } //new 

  function artistClick(){
    setArtist(artist=>!artist)
  }

  if(full) return <Fullscreen click={maxim} />

  if(!user && !artist) return <LoginButtons click={userClick} click2={artistClick} />
  if(artist) return <HomePageNew/>

  if(user) return <HomePage/>
}

export default HomeNew