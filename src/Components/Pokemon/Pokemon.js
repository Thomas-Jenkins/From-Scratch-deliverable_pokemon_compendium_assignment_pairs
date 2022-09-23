import React from 'react';
import './Pokemon.css';

export default function Pokemon({ pokemon, url_image, type_1, type_2 }) {
  return (
    <div className={`poke-card ${type_1}`} >
      <h1 className="title">{pokemon}</h1>
      <img className="poke-img" src={url_image}></img>
      <div className="poke-types">
        <div className='type'>{type_1}</div>
        <div className='type'>{type_2}</div>
      </div>
    </div>
  );
}
