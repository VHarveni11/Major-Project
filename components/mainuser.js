import React from 'react';
import PlayBox from './PlayBox';
import ArtistBox from './ArtistBox';
import { NavLink, useNavigate } from 'react-router-dom';
import {Icon} from './Icons';
import { useRouter } from 'next/router'
import Song from './Song';
import Nav from './nav'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import stores  from './stores'
import Artist1 from '../pages/artist_1track'
import {Link} from "react-router-dom"

export default function ArtistAlbum() {

  const singer =[
    {
      id: 1,
      position: 'Artist',
      name: 'Sid Sriram',
      image: 'https://images.news18.com/ibnlive/uploads/2022/01/untitled-design-4-17.png'
    },
    {
      id: 2,
      position: 'Artist',
      name: 'Arjith Singh',
      image: 'https://a10.gaanacdn.com/gn_img/artists/Dk9KNk23Bx/k9KNqJJbBx/size_xl_1638898900.webp'
    },
    {
      id: 3,
      position: 'Artist',
      name: 'S P Balasubrahmanyam',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWPGv2bOrzY8NvJJllBsc4SW7e6xPvUYJmZQ&usqp=CAU'
    },
    {
      id: 4,
      position: 'Artist',
      name: 'Arman Malik',
      image: 'https://www.uniquenewsonline.com/wp-content/uploads/2021/07/Armaan-Malik.jpg'
    },
    {
      id: 5,
      position: 'Artist',
      name: 'Anirudh Ravichander',
      image: 'https://www.behindwoods.com/tamil-movies-cinema-news-16/images/music-composer-anirudh-ravichander-celebrates-his-27th-birthday-today-october-16-2017-photos-pictures-stills.jpg'
    }
  ]
  /*const navigate = useNavigate()
  const handle1 = () =>{
    navigate('/artist_1track')
  }
  const handle2 = () =>{
    navigate('/artist_2track')
  }
  const handle3 = () =>{
    navigate('/artist_3track')
  }
  const handle4 = () =>{
    navigate('/artist_4track')
  }
  const handle5 = () =>{
    navigate('/artist_5track')
  }*/

  const router = useRouter()
  const handle1Click = () => {
    router.push('artist_1track')
  }
  const handle2Click = () => {
    router.push('artist_2track')
  }
  const handle3Click = () => {
    router.push('artist_3track')
  }
  const handle4Click = () => {
    router.push('artist_4track')
  }
  const handle5Click = () => {
    router.push('artist_5track')
  }

  return ( 
    <div>
        <div className='flex justify-between items-end mb-4 mt-6'>
        <PlayBox title={'Top artists this month'}/>
        <PlayBox see />
        </div>
        <NavLink className='grid grid-cols-5 gap-x-6 mb-8'>
                {singer.map(item => (
                    <div key={item.id} className={'bg-footer rounded p-4 transition-all hover:bg-menubg group'}>
                        <div className='relative '> 
                          <img className='w-auto h-auto inset-0 object-cover mb-4 rounded-full' src={item.image} />
                          <button className='w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
                            <Icon name="play"/>
                          </button>
                        </div>
                        <span className='font-semibold text-white text-[16px] whitespace-nowrap'>{item.name}</span> <br />
                        <span className='mt-1 text-[14px] text-link'>{item.position}</span>
                    </div> 
                ))}
        </NavLink>
        <div className='grid grid-cols-5 gap-x-6 mb-8'>
        {/*<button onClick={handle1}>Go to Album</button>*/}
        {/*<Link to='/artist_1track'>Go to Album</Link>*/}
        <button onClick={handle1Click}>Go to Album</button>
        <button onClick={handle2Click}>Go to Album</button>
        <button onClick={handle3Click}>Go to Album</button>
        <button onClick={handle4Click}>Go to Album</button>
        <button onClick={handle5Click}>Go to Album</button>
        </div>
    </div>
  )
}