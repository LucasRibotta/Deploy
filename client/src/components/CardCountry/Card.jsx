import React from 'react';
import { Link } from 'react-router-dom';
import style from './Card.module.css';

export default function Card(props) {
  const { name, image, continents, id } = props;

  return (
    <div className={style.card} key={id}>
      <div className={style.cardFront}>
        <div className={style.cardImage}>
          <img src={image} width="150" height="150" alt={name} />
        </div>

        <div className={style.cardInfo}>
          <h1>{name}</h1>
          <h3>{continents}</h3>
        </div>
      </div>

      <div className={style.cardBack}>
        <div className={style.cardInfo}>
          <Link to={`/detail/${id}`}>
            <button className={style.btn}>More info</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

