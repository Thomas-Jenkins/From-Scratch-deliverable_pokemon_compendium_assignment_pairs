import { useState } from 'react';

export default function SearchPokemon({ inputValue, setInputValue, setPokemonList }) {
  return (
    <>
      <input onChange={(e) => setInputValue(e.target.value)}></input>
      <button onClick={ async () => {
        const resp = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${inputValue}`);
        
        const data = await resp.json();
        setPokemonList(data.results);
        
      }}>Search</button>
    </>
  );
}


