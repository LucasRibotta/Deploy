import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { orderByName } from '../../redux/actions/actions'
import style from './style/Filter.module.css'

export default function OrderNameAlpha({ setCurrentPage }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [ascending, setAscending] = useState(false);
  const [descending, setDescending] = useState(false);

  function handleToggleOpen() {
    setOpen(!open);
  }

  function handleSort(e) {
    const sortOrder = e.target.value;
    if (sortOrder === "a-z") {
      setAscending(!ascending);
      setDescending(false);
    } else if (sortOrder === "z-a") {
      setDescending(!descending);
      setAscending(false);
    }
    dispatch(orderByName(sortOrder));
    setCurrentPage(1);
  }

  return (
    <div>
      <button onClick={handleToggleOpen} className={style.filterName}>Order By 
        Alphabetical</button>
      {open && (
        <div className={style.filterList}>
          <input
            type="checkbox"
            value="a-z"
            onChange={handleSort}
            checked={ascending}
          />
          <label className={style.filterTitle}>A - Z</label>
          <input
            type="checkbox"
            value="z-a"
            onChange={handleSort}
            checked={descending}
          />
          <label className={style.filterTitle}>Z - A</label>
        </div>
      )}
    </div>
  );
}