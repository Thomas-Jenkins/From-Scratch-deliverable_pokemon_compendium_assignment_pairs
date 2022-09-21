import { fetchPokemon } from '../services/fetch-utils';
import { useState, useEffect } from 'react';


export default function usePokemon() {
  const [pokemonList, setPokemonList] = useState([]);


  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchPokemon();
        setPokemonList(data);
      } catch (e) {
    // eslint-disable-next-line no-console
        console.error(e);
      }
    };
  
    loadData();
  }, []);
  return { pokemonList };
}