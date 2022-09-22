import { fetchPokemon, fetchPokeTypes } from '../services/fetch-utils';
import { useState, useEffect } from 'react';

export default function usePokemon() {
  const [pokemonList, setPokemonList] = useState([]);
  const [type, setType] = useState('All');
  const [typeList, setTypeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [nameFilter, setNameFilter] = useState('');

  useEffect(() => {
    
    const loadData = async () => {
      try {
        // setLoading(true);
        const data = await fetchPokemon(type);
        setPokemonList(data);
        setLoading(false);
      } catch (e) {
    // eslint-disable-next-line no-console
        console.error(e);
      }
    };
      
    loadData();
    
  }, [type]);
  
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchPokeTypes();
        setTypeList(data);
      } catch (e) {
        console.error(e);
      }
    };  
    getData();

  }, []); 
  return { pokemonList, setPokemonList, type, typeList, setType, loading, inputValue, setInputValue, nameFilter, setNameFilter };
}