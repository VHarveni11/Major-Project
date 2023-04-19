import React from 'react';
import { NavLink } from 'react-router-dom';
import PlayBox from './PlayBox';
import ArtistBox from './ArtistBox';
import {Icon} from './Icons';
import { useDispatch } from 'react-redux';
import { setCurrent } from './stores/player';
import { useSelector } from 'react-redux';

export default function SongNew({item}) {
    const dispatch = useDispatch();
    const {current} = useSelector(state => state.player);
    const updateCurrent = () => {
        dispatch(setCurrent(item));
    } 

    const styles = {
      th: `pb-5 hover:opacity-50 cursor-pointer`,
    }

    return (
      <tbody>
      <tr>
        <th className={styles.th}>{item.id}</th>
        <th className={styles.th}>
          <button onClick={updateCurrent}>
            <Icon name={current?.id == item.id ? 'pause' : 'play'}/> 
          </button></th>
        <th className={styles.th}>
          <div>
            <p className="font-bold">{item.title}</p>
            <p className="opacity-50">{item.artist}</p>
          </div>
        </th>
        <th className={styles.th}>{'10000'}</th>
        <th className={styles.th}>{'2:43'}</th>
      </tr>
      </tbody>
  )
}
