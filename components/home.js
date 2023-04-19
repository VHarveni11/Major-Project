import React from 'react';
import PlayBox from './PlayBox';
import ArtistBox from './ArtistBox';
import { NavLink } from 'react-router-dom';
import {Icon} from './Icons';
import Song from './Song';
import Nav from './nav'

export default function Home() {

  const items =[
    {
      id: 1,
      title: 'Who Says',
      artist: 'Selena Gomez',
      image: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Who_Says.jpg',
      src: 'https://pagaliworld.com/files/download/id/3680'
    },

    {
      id: 2,
      title: 'RRR',
      artist: 'Kaala Bhairava, Rahul Sipligunj',
      image: 'https://c.saavncdn.com/592/Naatu-Naatu-From-Rrr--Telugu-2021-20211110131000-500x500.jpg',
      src:'https://pagaliworld.com/files/download/id/3852'
    },

    {
      id: 3,
      title: 'Sing me to sleep',
      artist: 'Alan Walker',
      image: 'https://jesusful.com/wp-content/uploads/2022/07/Alan-Walker-Sing-Me-To-Sleep-Mp3-Download-Lyrics.jpg',
      src:'https://jesusful.com/wp-content/uploads/music/2022/07/Alan_Walker_-_Sing_Me_To_Sleep_(Jesusful.com).mp3'
    },

   {
      id: 4,
      title: 'Blank space',
      artist: 'Taylor Swift',
      image: 'https://i.pinimg.com/736x/6e/a1/c5/6ea1c525edf91ad58b8d40ebba8fbb83.jpg',
      src:'https://www.naijagreen.com/wp-content/uploads/music/2021/08/Taylor_Swift_-_Blank_Space_[NaijaGreen.Com]_.mp3'
    },

    {
      id: 5,
      title: 'Antharyami Annamayya',
      artist: 'S P Balasubrahmanyam, S P Sailaja',
      image: 'https://images.hungama.com/c/1/13f/605/1494286/1494286_300x300.jpg',
      src:'https://dns4.pendusaab.com/download/128k-azyfy/Antharyami.mp3'
    },

    
  ]

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
      name: 'Anirudh Ravinchander',
      image: 'https://www.behindwoods.com/tamil-movies-cinema-news-16/images/music-composer-anirudh-ravichander-celebrates-his-27th-birthday-today-october-16-2017-photos-pictures-stills.jpg'
    }
  ]

  const mixer =[
    {
      id: 1,
      position: 'Emir Can İğrek, Dolu Kadehi Ters Tut',
      name: 'Daily Mix 3',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb5b685456413fc96b946fc2f2/3/tr/default'
    },
    {
      id: 2,
      position: 'Sonny Fodera, SOMMA, Jay Pryor ve daha fazlası',
      name: 'Daily Mix 4',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebe03987a142f6ba53d230a58c/4/tr/default'
    },
    {
      id: 3,
      position: 'Gazapizm, Norm Ender ve daha fazlası',
      name: 'Daily Mix 5',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5eb2e83342b0f36ba888c77be62/5/tr/default'
    },
    {
      id: 4,
      position: 'Şanışer, Anıl Piyancı ve daha fazlası',
      name: 'Daily Mix 6',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebcfc63410e20f29a28a05c37c/6/tr/default'
    },
    {
      id: 5,
      position: 'Serdar Ortaç, Hande Yener ve daha fazlası',
      name: 'Daily Mix 1',
      image: 'https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebede6e2c2886ad29725a9ebf5/1/tr/default'
    }

  ]



  return (
    <div>
      <div>
      <h3 className='text-3xl text-white font-bold tracking-tight mb-6'>Good Morning</h3>
      <div className='grid grid-cols-3 items-center justify-center gap-x-6 gap-y-4 mb-6 transition-all'>
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src="https://misc.scdn.co/liked-songs/liked-songs-640.png" />
          <h4 className='text-[16px] font-bold p-4'>Favorite songs</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>
        
        
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src="https://i.scdn.co/image/ab67706f000000026e65f020506feb291e366012" />
          <h4 className='text-[16px] font-bold p-4'>Telugu 2000's</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>
        
        
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src="https://i.scdn.co/image/ab67706f00000002170d1a781c222aaca28081b4" />
          <h4 className='text-[16px] font-bold p-4'>Hot Hits Telugu</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>
        
        
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src="https://englishtribuneimages.blob.core.windows.net/gallary-content/2020/7/2020_7$largeimg_741540610.jpg" />
          <h4 className='text-[16px] font-bold p-4'>A R Rahman</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>
        
        
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src="https://dailymix-images.scdn.co/v2/img/ab6761610000e5ebede6e2c2886ad29725a9ebf5/1/tr/default" />
          <h4 className='text-[16px] font-bold p-4'>Daily Mix 1</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>
        <div className='flex items-center gap-x-4 bg-dortbox group relative hover:bg-dortboxact rounded'>
          <img className='w-[5rem] h-[5rem]' src="https://dailymix-images.scdn.co/v2/img/ab67616d0000b27365a248c766e18522893d44c5/2/tr/default" />
          <h4 className='text-[16px] font-bold p-4'>Daily Mix 2</h4>
          <button className='w-12 h-12 bg-primary absolute right-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
            <Icon name="play"/>
          </button>
        </div>

      </div> 
      </div>
        <div className='flex justify-between items-end mb-4'>
        <PlayBox title={'Compiled for user'}/> 
        <PlayBox see />
        </div> 
        <div className='grid grid-cols-5 gap-x-6'>
                {items.map(item => <Song item={item} key={item.id} /> )}
                
        </div>
        <div className='flex justify-between items-end mb-4 mt-6'>
        <PlayBox title={'Indian top stars'}/>
        <PlayBox see />
        </div>
        <div className='grid grid-cols-5 gap-x-6 mb-8'>
                {mixer.map(item => (
                    <NavLink key={item.id} to="/" className={'bg-footer rounded p-4 transition-all hover:bg-menubg group'}>
                        <div className='relative '> 
                          <img className='w-auto h-auto inset-0 object-cover mb-4' src={item.image} />
                          <button className='w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
                            <Icon name="play"/>
                          </button>
                        </div>
                        <span className='font-semibold text-white text-[16px] whitespace-nowrap'>{item.name}</span> <br />
                        <span className='mt-1 text-[14px] text-link'>{item.position}</span>
                        
                    </NavLink>
                ))}
        </div>
        <div className='flex justify-between items-end mb-4 mt-6'>
        <PlayBox title={'Indian fanous stars'}/>
        <PlayBox see />
        </div>
        <div className='grid grid-cols-5 gap-x-6 mb-8'>
                {singer.map(item => (
                    <NavLink key={item.id} to="/" className={'bg-footer rounded p-4 transition-all hover:bg-menubg group'}>
                        <div className='relative '> 
                          <img className='w-auto h-auto inset-0 object-cover mb-4 rounded-full' src={item.image} />
                          <button className='w-12 h-12 bg-primary absolute right-2 bottom-2 transition-opacity rounded-full flex items-center shadow-2xl justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100'>
                            <Icon name="play"/>
                          </button>
                        </div>
                        <span className='font-semibold text-white text-[16px] whitespace-nowrap'>{item.name}</span> <br />
                        <span className='mt-1 text-[14px] text-link'>{item.position}</span>
                        
                    </NavLink>
                ))}
        </div>

    </div>
  )
}