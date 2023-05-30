import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { getCountries, getActivityCreated} from "../../redux/actions/actions";
import Card from "../CardCountry/Card";
import Pagination from "../Pagination/Pagination";
import style from './Home.module.css'
import FilterContinents from "../FilterAndOrder/FilterContinents";
import FilterActivity from "../FilterAndOrder/FilterActivity"
import OrderNameAlpha from "../FilterAndOrder/OrderAlfa";
import OrderPopulation from '../FilterAndOrder/OrderPopulation';
import ClearFilter from "../FilterAndOrder/ClearFilter";
import SearchBar from "../SearchBar/SearchBar";


export default function Home () {

    const dispatch = useDispatch();
    
    const allCountries = useSelector((state) => state.countries);
    
    const [currentPage, setCurrentPage] = useState(1); //Se setea en 1 ya que mi primer pág es 1
    const [countryPerPage] = useState(10); // Se guarda la cantidad de países por página
    const indexOfLastCountrys = currentPage * countryPerPage; // 10
    const indexOfFristCountrys = indexOfLastCountrys - countryPerPage // 0
    const currentCountrys = allCountries.slice(indexOfFristCountrys, indexOfLastCountrys);

    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


useEffect(()=> {
    dispatch(getCountries());
    dispatch(getActivityCreated())
},[dispatch]);



return (

  <div className={style.fondo}>
        <div className={style.pagination}>
    <Pagination
      countryPerPage={countryPerPage}
      allCountries={allCountries.length}
      paginado={paginado}
      currentPage={currentPage} 
    />
    </div>
  <div className={style.containerHome}>


    <div className={style.filtersContainer}>
      <div className={style.filter}>
        <FilterContinents setCurrentPage={setCurrentPage} />
      </div>
      <div className={style.filter}>
        <FilterActivity setCurrentPage={setCurrentPage} />
      </div>
      <div className={style.filter}>
        <OrderNameAlpha setCurrentPage={setCurrentPage} />
      </div>
      <div className={style.filter}>
        <OrderPopulation setCurrentPage={setCurrentPage} />
      </div>
      <div>
        <ClearFilter setCurrentPage={setCurrentPage}/>
      </div>
    <div className={style.searchBar}>
      <SearchBar />
    </div>
    </div>
    

    <div className={style.cardContainer}>
      {currentCountrys?.map((el) => (
        <Card
          key={el.id}
          id={el.id}
          name={el.name}
          continents={el.continents}
          image={el.flags}
          season={el.season}
        />
      ))}
    </div>

      </div>

  </div>
);


}