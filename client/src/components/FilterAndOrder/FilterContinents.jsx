import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { filterByContinents } from '../../redux/actions/actions';
import style from './style/Filter.module.css'

export default function FilterContinents({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedContinents, setSelectedContinent] = useState([]);

  function handleFilterContinents(e) {
    const continent = e.target.value;
    setCurrentPage(1);
    setSelectedContinent(continent);
    dispatch(filterByContinents(continent));
  }

  function toggleDropdown() {
    setIsOpen(!isOpen);
  }

  return (
        <div >
          <button className={style.filterName} onClick={toggleDropdown}>
            Filter Continent
          </button>
          {isOpen && (
            <div >
              <div className={style.filterList}>
              <label className={style.filterTitle}>
                <input
                  type="checkbox"
                  name="All"
                  value="All"
                  checked={selectedContinents.includes("All")}
                  onChange={handleFilterContinents}
                />
                All
              </label>
              <label className={style.filterTitle}>
                <input
                  type="checkbox"
                  name="North America"
                  value="North America"
                  checked={selectedContinents.includes("North America")}
                  onChange={handleFilterContinents}
                />
                North America
              </label>
              <label className={style.filterTitle}>
                <input
                  type="checkbox"
                  name="South America"
                  value="South America"
                  checked={selectedContinents.includes("South America")}
                  onChange={handleFilterContinents}
                />
                South America
              </label>
              <label className={style.filterTitle}>
                <input
                  type="checkbox"
                  name="Europe"
                  value="Europe"
                  checked={selectedContinents.includes("Europe")}
                  onChange={handleFilterContinents}
                />
                Europe
              </label>
              <label className={style.filterTitle}>
                <input
                  type="checkbox"
                  name="Asia"
                  value="Asia"
                  checked={selectedContinents.includes("Asia")}
                  onChange={handleFilterContinents}
                />
                Asia
              </label>
              <label className={style.filterTitle}>
                <input
                  type="checkbox"
                  name="Oceania"
                  value="Oceania"
                  checked={selectedContinents.includes("Oceania")}
                  onChange={handleFilterContinents}
                />
                Oceania
              </label>
              <label className={style.filterTitle}>
                <input
                  type="checkbox"
                  name="Africa"
                  value="Africa"
                  checked={selectedContinents.includes("Africa")}
                  onChange={handleFilterContinents}
                />
                Africa
              </label>
              <label className={style.filterTitle}>
                <input
                  type="checkbox"
                  name="Antarctica"
                  value="Antarctica"
                  checked={selectedContinents.includes("Antarctica")}
                  onChange={handleFilterContinents}
                />
                Antarctica
              </label>
              </div>
            </div>
          )}
        </div>

  );
}