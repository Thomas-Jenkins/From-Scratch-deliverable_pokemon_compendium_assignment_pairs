import { useEffect, useState } from 'react';
import usePokemon from '../../Hooks/usePokemon';
import { fetchPokemon } from '../../services/fetch-utils';




export default function Main() {
  const { pokemon } = usePokemon();
//   let temp = usePokemon();
  console.log(pokemon);

//   setPokemon(fetchPokemon);
}