/*import { useEffect, useState } from 'react'
import TableRow from './table/tableRow'
 
const Playlist = ({songs}) => {
  console.log("Songs"+songs)
  return (
    <div className={styles.tableWrapper}> 
      <table className={styles.table}>
        <tbody className={styles.tableHeader}>
          <tr>
            <th className='pb-3'>#</th>
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
          return <TableRow key={song.id} props={song.account} />
          //return <TableRow key={song.id} props={song} />
        })} 
        
         
      </table>
    </div>
  )
}

export default Playlist

const styles = {
  table: `w-full text-left`,
  tableWrapper: `max-w-7xl m-auto p-3 mt-5 mb-30`,
  tableHeader: `border-b border-gray-100/20 pb-5 opacity-50`,
}*/
import { useEffect, useState } from 'react'
import TableRow from './table/tableRow'

const Playlist = ({ songs, likedSongs, setLikedSongs }) => {
  console.log(songs, likedSongs, setLikedSongs)
  console.log("Songs" + songs)
  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <tbody className={styles.tableHeader}>
          <tr>
            <th className='pb-3'>#</th>
            <th className='pb-3'>TITLE</th>
            <th className='pb-3' >LIKED</th>
            <th className='pb-3'>PLAYS</th>
            <th className='pb-3'>
              <img alt='' src='assets/time.svg' />
            </th>
          </tr>
        </tbody>
        <tbody className='mb-6 block'></tbody>

        {songs.map(song => {
          console.log("songs " + song)
          let props = {
            song,
            likedSongs,
            setLikedSongs
          }
          return <TableRow key={song.id} {...props} />
        })}


      </table>
    </div>
  )
}

export default Playlist

const styles = {
  table: `w-full text-left`,
  tableWrapper: `max-w-7xl m-auto p-3 mt-5 mb-40`,
  tableHeader: `border-b border-gray-100/20 pb-5 opacity-50`,
}
