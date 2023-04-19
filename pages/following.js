import React from 'react';
import PlayBox from '../components/PlayBox';
import ArtistBox from '../components/ArtistBox';
import { NavLink, useNavigate } from 'react-router-dom';
import {Icon} from '../components/Icons';
import { useRouter } from 'next/router'
import Song from '../components/Song';
import Nav from '../components/nav'
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import stores  from '../components/stores'
import Artist1 from '../pages/artist_1track'

export default function Following() {

  const singer =[
    {
      id: 1,
      position: 'Artist',
      name: 'Selena Gomez',
      image: 'https://media.glamourmagazine.co.uk/photos/64182e2d165c55d67405a08e/1:1/w_1280,h_1280,c_limit/SELENA%20GOMEZ%20INSTA%20200323%20default-GettyImages-1446554731.jpg'
    },
    {
      id: 2,
      position: 'Artist',
      name: 'Shreya Goshal',
      image: 'https://media.insider.in/image/upload/c_crop,g_custom/v1669033779/ds4bbdue5v8qcakdth4c.jpg'
    },
  ]
  /*const navigate = useNavigate()
  const handle1 = () =>{
    navigate('/artist_6track')
  }
  const handle2 = () =>{
    navigate('/artist_7track')
  }*/
  const router = useRouter()
  const handle1Click = () => {
    router.push('artist_6track')
  }
  const handle2Click = () => {
    router.push('artist_7track')
  }

  return (
    <div>
        <div className='flex justify-between items-end mb-4 mt-6'>
        <PlayBox title={'Following'}/>
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
        <button onClick={handle1Click}>Go to Album</button>
        <button onClick={handle2Click}>Go to Album</button> 
        </div>
    </div>
  )
}