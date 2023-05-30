import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { filterBySeason } from '../../redux/actions/actions';
import style from './style/Filter.module.css'

export default function FilterActivity({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false)
  const [selectSeason, setSelectSeason] = useState([])
  
 
  const handleChange = (e) => {
    const seasons = e.target.value
    setCurrentPage(1);
    setSelectSeason(seasons)
    dispatch(filterBySeason(seasons));
    };

    function toggleDropdown(){
      setIsOpen(!isOpen)
    }

  return (
    <div>
      <div>
        <button className={style.filterName} onClick={toggleDropdown}>
          Filter Season
        </button>
        {isOpen && (
          <div> 
            <div className={style.filterList}>
        <label className={style.filterTitle}>
          <input 
          type="checkbox"
          name='All'
          value='All'
          checked={selectSeason.includes('All')}
          onChange={handleChange}
          />
          All
        </label>

        <label className={style.filterTitle}>
          <input 
          type="checkbox"
          name='Summer'
          value='Summer'
          checked={selectSeason.includes('Summer')}
          onChange={handleChange}
          />
          Summer
        </label>

        <label className={style.filterTitle}>
          <input 
          type="checkbox"
          name='Spring'
          value='Spring'
          checked={selectSeason.includes('Spring')}
          onChange={handleChange}
          />
          Spring
        </label>

        <label className={style.filterTitle}>
          <input 
          type="checkbox"
          name='Autumn'
          value='Autumn'
          checked={selectSeason.includes('Autumn')}
          onChange={handleChange}
          />
          Autumn
        </label>

        <label className={style.filterTitle}>
          <input 
          type="checkbox"
          name='Winter'
          value='Winter'
          checked={selectSeason.includes('Winter')}
          onChange={handleChange}
          />
          Winter
        </label>
      </div>
          </div>
        )}
      </div>
      
    </div>
  );
}


