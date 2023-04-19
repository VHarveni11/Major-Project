/*import Header from '../components/header'
import Nav from '../components/nav'
import Playlist from '../components/playlist'
import PlayerControls from '../components/playerControls'
import Activity from '../components/activity'
import { useState, useEffect } from 'react'
import UploadModal from '../components/UploadModal'
import useSpotify from '../hooks/useSpotify'
import Fullscreen from "../components/fullscreen"
import HeaderNew from "../components/headerNew"

const HomePage = ({hclick}) => {


  const [showUploadMusic, setShowUploadMusic] = useState(false)
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
  }, [])


  const [full,setFull]=useState(false)
  
  function maxim(){ 
    console.log("Maxim clicked")
    setFull(prev=>!prev);
  }

  if(full) return <Fullscreen click={maxim} />

  return (
    <div className='flex'>
      <Nav/>
      <div className='w-full'>
        <HeaderNew setShowUploadMusic={setShowUploadMusic} />
        <Playlist songs={songs} />
        <PlayerControls songs={songs} click={maxim} />
        {showUploadMusic && (
          <UploadModal
            title={title} 
            setTitle={setTitle}
            setShowUploadMusic={setShowUploadMusic}
            musicUrl={musicUrl}
            setMusicUrl={setMusicUrl}
            newMusic={newMusic}
          />
        )}
      </div>
      <Activity />
    </div>
  )
}

export default HomePage*/
import Header from '../components/header'
import Nav from '../components/nav'
import Playlist from '../components/playlist'
import PlayerControls from '../components/playerControls'
import Activity from '../components/activity'
import { useState, useEffect } from 'react'
import UploadModal from '../components/UploadModal'
import useSpotify from '../hooks/useSpotify'
import Fullscreen from "../components/fullscreen"
import LikedTable from '../components/table/likedtable'
import HeaderNew from '../components/headerNew'

const HomePage = () => {


  const [showUploadMusic, setShowUploadMusic] = useState(false)
  const [title, setTitle] = useState('')
  const [musicUrl, setMusicUrl] = useState('')
  const [isplaylistActive, setIsPlaylistActive] = useState(true)
  const [likedSongs, setLikedSongs] = useState([])
  
  
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
    }, [])
    
    const playlistdata = { songs, likedSongs, setLikedSongs }
    const [full, setFull] = useState(false)
    
    const [like,setLike]=useState(false)
    
    function click(){
    setLike(prev=>!prev)
    onClickLiked()
  }

  function maxim() {
    console.log("Maxim clicked")
    setFull(prev => !prev);

  }
  const onClickPlaylist = () => {
    setIsPlaylistActive(true)
  }

  const onClickLiked = () => {
    setIsPlaylistActive(false)
  }

  if (full) return <Fullscreen click={maxim} />
  
  //Sidhanth's Changes
  if (isplaylistActive) {
    return (
      <div className='flex'>
        {console.log("Playlist active")}
        <Nav click={click} />
        <div className='w-full'>
          <HeaderNew setShowUploadMusic={setShowUploadMusic} />
          <div style={{ display: 'flex', justifyContent: 'space-around' }} >
            <div style={{ padding: '1rem', cursor: 'pointer' }} >
              <span>PlayList</span>
            </div>
            <div style={{ padding: '1rem', cursor: 'pointer' }} onClick={onClickLiked}>
              <span>Liked Songs</span>
            </div>
          </div>
          {console.log("playlist: " + playlistdata)}
          <Playlist {...playlistdata} />
          <PlayerControls songs={songs} click={maxim} />
          {showUploadMusic && (
            <UploadModal
              title={title}
              setTitle={setTitle}
              setShowUploadMusic={setShowUploadMusic}
              musicUrl={musicUrl}
              setMusicUrl={setMusicUrl}
              newMusic={newMusic}
            />
          )}
        </div>
        <Activity />
      </div>
    )
  } else if (!isplaylistActive) {
    return (
      <div className='flex'>
        {console.log("Liked active")}

        <Nav />
        <div className='w-full'>
          <Header setShowUploadMusic={setShowUploadMusic} />
          <div style={{ display: 'flex', justifyContent: 'space-around' }} >
            <div style={{ padding: '1rem', cursor: 'pointer' }} onClick={onClickPlaylist}>
              <span>PlayList</span>
            </div>
            <div style={{ padding: '1rem', cursor: 'pointer' }} >
              <span>Liked Songs</span>
            </div>
          </div>
          <div>
            <div className={styles.tableWrapper}>
              <table className={styles.table}>
                <tbody className={styles.tableHeader}>
                  <tr>
                    <th className='pb-3'>TITLE</th>
                    <th className='pb-3'>PLAYS</th>
                    <th className='pb-3'>
                      <img alt='' src='assets/time.svg' />
                    </th>
                  </tr>
                </tbody>
                <tbody className='mb-6 block'></tbody>

                {likedSongs.map(song => {
                  console.log("songs " + song.title)
                  let props = {
                    song,
                    likedSongs,
                    setLikedSongs
                  }
                  return <LikedTable key={song.id} {...props} />
                })}
              </table>
            </div>
          </div>

          <PlayerControls click={maxim} />
          {showUploadMusic && (
            <UploadModal
              title={title}
              setTitle={setTitle}
              setShowUploadMusic={setShowUploadMusic}
              musicUrl={musicUrl}
              setMusicUrl={setMusicUrl}
              newMusic={newMusic}
            />
          )}
        </div>
        <Activity />
      </div>
    )
  }
}

export default HomePage

const styles = {
  table: `w-full text-left`,
  tableWrapper: `max-w-7xl m-auto p-3 mt-5 mb-40`,
  tableHeader: `border-b border-gray-100/20 pb-5 opacity-50`,
  th: `pb-5 hover:opacity-50 cursor-pointer`,
}
