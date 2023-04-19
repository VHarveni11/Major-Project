import { useContext, useEffect } from 'react'
import { SpotifyContext } from '../../context/context'
import { IconContext } from "react-icons";
import { AiFillLike } from "react-icons/ai";
import { useState } from 'react'

//Sidhanth's Changes
const LikedTable = ({ song, likedSongs, setLikedSongs }) => {

    return (
        <tbody>
            <tr >
                <th className={styles.th}>
                    <div>
                        <p className="font-bold">{song.title}</p>
                        <p className="opacity-50">{'Bill Board'}</p>
                    </div>
                </th>
                <th className={styles.th}>{'10000'}</th>
                <th className={styles.th}>{'2:43'}</th>
            </tr>
        </tbody>
    )
}

// const LikedTable = ({ song, likedSongs, setLikedSongs }) => {
//     const { playOnSelect } = useContext(SpotifyContext)
  
//     const handleLike = (props) => {
//       if (likedSongs.filter(x => x.title === props.title).length) {
//         setLikedSongs(likedSongs.filter(x => x.title !== props.title))
//       } else {
//         setLikedSongs(likedSongs => [...new Set([...likedSongs, props])])
//       }
//     }
  
//     return (
//       <tbody>
//         {console.log("SONGS LIKED",likedSongs)}
//         <tr onClick={() => playOnSelect(likedSongs.account)}>
//           <th className={styles.th}>{likedSong.account.index}</th>
//           <th className={styles.th}>
//             <div>
//               <p className="font-bold">{song.account.title}</p>
//               <p className="opacity-50">{'Bill Board'}</p>
//               {/* <p className="opacity-50">{props.artiste}</p> */}
//             </div>
//           </th>
//           <th className={styles.th} onClick={() => handleLike(song.account)} >
//             <IconContext.Provider value={{ color: (likedSongs && likedSongs.filter(x => x.title === song.account.title).length) ? 'green' : 'black', size: 40 }}>
//               <AiFillLike />
//             </IconContext.Provider>
//           </th>
          
//           <th className={styles.th}>{'10000'}</th>
//           {/* <th className={styles.th}>{props.plays}</th> */}
//           <th className={styles.th}>{'2:43'}</th>
//           {/*<th className={styles.th}>{props.songLength}</th> */}
//         </tr>
//       </tbody>
//     )
//   }
  
  export default LikedTable
  
  const styles = {
    th: `pb-5 hover:opacity-50 cursor-pointer`,
  }