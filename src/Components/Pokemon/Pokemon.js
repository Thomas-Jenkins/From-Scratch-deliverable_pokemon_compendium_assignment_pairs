import React from 'react';
import './Pokemon.css';

export default function Pokemon({ pokemon, url_image, type_1, type_2 }) {
  return (
    <div className="poke-card">
      <h1 className="title">{pokemon}</h1>
      <img className="poke-img" src={url_image}></img>
      <div className="poke-types">
        <div>{type_1}</div>
        <div>{type_2}</div>
      </div>
    </div>
  );
}
