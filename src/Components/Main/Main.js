import { useEffect, useState } from 'react';
import usePokemon from '../../Hooks/usePokemon';
import { fetchPokemon } from '../../services/fetch-utils';
import useFilter from '../Filter/Filter';
import Pokemon from '../Pokemon/Pokemon';




export default function Main() {
  const { pokemonList } = usePokemon();
  const { type, typeList, setType } = useFilter();
  console.log('temp1', typeList);
//   let temp = usePokemon();
  // {pokemonList.map((aPokemon) => 
  //   console.log(aPokemon)
  //   // <Pokemon key={aPokemon.id} pokemon={pokemon} url_image={url_image} />
  // );}
  return (
    <>
      {pokemonList.map((aPokemon) => (
        <Pokemon key={aPokemon.id} pokemon={aPokemon.pokemon} url_image={aPokemon.url_image} />
      ))} 
    </>
  );
//   setPokemon(fetchPokemon);
}