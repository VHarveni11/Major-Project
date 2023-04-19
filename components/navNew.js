import NavLink from './navLink'
import React from "react"
import ReactDom from "react-dom"
import {useRoutes, A} from "hookrouter"
import Homenav from '../pages/homenav'
import Link from 'next/link'
import { useRouter } from 'next/router'
import HomePage from '../pages/homepage'
import Profile from '../pages/userprofile'

const styles = {
  nav: `bg-black h-screen w-96 p-5 py-10 sticky top-0`,
  link: `hover:text-[white]`,
  playlistName: `text-[#b3b3b3] cursor-default text-sm hover:text-[#fff]`
}

/*const routes = {
  "/abouthome": ()=><About/>
}
const routeResult = useRoutes(routes)
<A href="/abouthome">hometrial</A>
{routeResult}
<Link href='/about'><a>hometrial</a></Link>
*/

const NavNew =() =>{
  const router = useRouter()
   
  const handleClick = () => {
    router.push('homenav')
  } 

  const handleLibClick = () => {
    router.push('homePageNew')
  }

  return (
    <div className={styles.nav}>
      <div className='mb-10'>
        <NavLink icon='assets/home.svg' title='' className={styles.link} />
        <button onClick={handleClick}>Home</button>
        <NavLink
          icon='assets/search.svg'
          title='Search'
          className={styles.link}
        />
        <NavLink
          icon='assets/playlist.svg'
          //title='Your library'
          title=''
          className={styles.link}
        />
        <button onClick={handleLibClick}>Library</button>
      </div>

      <div className='mb-5 border-b border-gray-100/10'>
        <NavLink
          icon='assets/add.svg'
          title='Create Playlist'
          className={styles.link}
        />
        <NavLink
          icon='assets/heart.svg'
          title='Liked Songs'
          className={styles.link}
        />
      </div>

      <div className='mt-5 leading-8 flex flex-col gap-[10px]'>
      <p className='text-sm'>GHOST SONGS</p>
        <p className={styles.playlistName}>
          CarPlay Vol.2
        </p>
        <p className={styles.playlistName}>
          Country Dump
        </p>
        <p className={styles.playlistName}>
          Energy Booster: Country
        </p>
        <p className={styles.playlistName}>
          Funky
        </p>
        <p className={styles.playlistName}>
          Coaching 🔥
        </p>
        <p className={styles.playlistName}>
          Country
        </p>
        <p className={styles.playlistName}>
          Your Top Songs 2019
        </p>
      </div>
    </div>
  )
}

export default NavNew