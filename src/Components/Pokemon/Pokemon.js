import React from 'react';

export default function Pokemon({ pokemon, url_image }) {
  return (
    <div>
      <h1>{pokemon}</h1>
      <img src={url_image}></img>
    </div>
  );
}
