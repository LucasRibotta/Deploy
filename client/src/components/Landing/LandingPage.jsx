import React from 'react';
import { Link } from 'react-router-dom';
import style from './LandingPage.module.css';
import mapaMundo from '../../assets/mapaMundo.png';
import mapaMundo2 from '../../assets/mapaMundo2.png';



const LandingPage = () => {
  const animationSpeed = '10s';
  const globeSize = '500px';


  return (
    <div className={style.landingContainer}>
        
        <h1 className={style.title}>Welcome to the Country Tour</h1>  
        <div className={style.conteinerbtn}>
          <Link to="/home">
            <button className={style.btn}>
             <span></span>
             <span></span>
             <span></span>
             <span></span>
             GO HOME
            </button>
          </Link>
        </div>
      <div className={style.globe}>
        <img src={mapaMundo} alt="mapaMundo" className={`${style.img} ${style.world}`}/>
        <img src={mapaMundo2} alt="mapaInvert" className={`${style.img} ${style.worldInv}`} />
      </div>
      
    </div>
  );
};

export default LandingPage;