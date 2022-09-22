import { useEffect, useState } from 'react';
import usePokemon from '../../Hooks/usePokemon';
import { fetchPokemon, fetchPokeTypes } from '../../services/fetch-utils';
import useFilter from '../Filter/Filter';
import Pokemon from '../Pokemon/Pokemon';
import Select from '../Select/Select';
import SearchPokemon from '../Search/Search';
import './Main.css';


export default function Main() {
  const { loading, pokemonList, setPokemonList, type, typeList, setType, inputValue, setInputValue } = usePokemon();
  if (loading) return <div className='lds-ripple'><div></div><div></div></div>;
  // console.log('temp1', pokemonList);
//   let temp = usePokemon();
  // {pokemonList.map((aPokemon) => 
  //   console.log(aPokemon)
  //   // <Pokemon key={aPokemon.id} pokemon={pokemon} url_image={url_image} />
  // );}
  return (
    <div className='main'>
      
      <div className="nav">
        <SearchPokemon inputValue={inputValue} setInputValue={setInputValue} setPokemonList={setPokemonList}/>
        <Select typeList={typeList} setType={setType} />
      </div>
      <div className='pokemans'>
        {pokemonList.map((aPokemon) => (
          <Pokemon key={aPokemon.id} { ...aPokemon } />
        ))} 
      </div>
    </div>
  );
//setPokemon(fetchPokemon);
}