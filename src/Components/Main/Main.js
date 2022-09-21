import { useEffect, useState } from 'react';
import usePokemon from '../../Hooks/usePokemon';
import { fetchPokemon, fetchPokeTypes } from '../../services/fetch-utils';
import useFilter from '../Filter/Filter';
import Pokemon from '../Pokemon/Pokemon';
import Select from '../Select/Select';


export default function Main() {
  const { pokemonList, type, typeList, setType } = usePokemon();
  console.log('temp1', pokemonList);
//   let temp = usePokemon();
  // {pokemonList.map((aPokemon) => 
  //   console.log(aPokemon)
  //   // <Pokemon key={aPokemon.id} pokemon={pokemon} url_image={url_image} />
  // );}
  return (
    <>
      <Select typeList={typeList} setType={setType} />
      {pokemonList.map((aPokemon) => (
        <Pokemon key={aPokemon.id} { ...aPokemon } />
      ))} 
    </>
  );
//   setPokemon(fetchPokemon);
}