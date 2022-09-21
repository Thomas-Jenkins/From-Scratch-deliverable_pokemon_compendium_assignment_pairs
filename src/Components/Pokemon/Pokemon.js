import React from 'react';

export default function Pokemon({ pokemon, url_image, type_1, type_2 }) {
  return (
    <div>
      <h1>{pokemon}</h1>
      <img src={url_image}></img>
      <div>{type_1}</div>
      <div>{type_2}</div>
    </div>
  );
}
