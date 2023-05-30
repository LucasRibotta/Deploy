import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { getCountries, getCountriesName } from "../../redux/actions/actions";
import style from './Search.module.css';

export default function SearchBar() {
    const [name, setName] = useState("");
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const searchInputRef = useRef(null);
    const dispatch = useDispatch();
  
    const handleInputChange = (e) => {
      const { value } = e.target;
      setName(value);
      dispatch(getCountriesName(value));
    };
  
    const handleClick = () => {
      setIsSearchOpen(false);
      searchInputRef.current.focus();
    };
  
    const handleBlur = () => {
      if (name.trim() === "") {
        setIsSearchOpen(false);
      }
    };
  
    const handleReset = () => {
      setName("");
      dispatch(getCountries());
    };
  
    return (
      <div>
        <div className={`${style.searchContainer} ${isSearchOpen ? style.open : ''}`}>
         
            <div className={style.lupa} onClick={handleClick}>
              <span>🔍</span>
            </div>
          
  
          <form action="search-bar">
            <input
              ref={searchInputRef}
              type="search"
              placeholder="Search..."
              value={name}
              onChange={handleInputChange}
              onBlur={handleBlur}
              className={`${style.search} ${isSearchOpen ? style.searchOpen : ''}`}
            />
          </form>
          <button onClick={handleReset} className={style.resetButton}>
            Reset
          </button>
        </div>

      </div>
    );
  }