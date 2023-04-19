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

export default function Followers() {

  const singer =[
    {
      id: 1,
      position: 'User',
      name: 'John',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeQnzM1P_hJLMofrLSPeWktiapfakf_nBfdg&usqp=CAU'
    },
  ]

  const router = useRouter()
  const handle1Click = () => {
    router.push('usertrack') 
  }

  return (
    <div>
        <div className='flex justify-between items-end mb-4 mt-6'>
        <PlayBox title={'Followers'}/>
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
        <button onClick={handle1Click}>Go to Playlist</button> 
        </div>
    </div>
  )
}