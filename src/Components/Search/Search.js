import { fetchPokemon } from '../../services/fetch-utils';
import './Search.css';

export default function SearchPokemon({ inputValue, setInputValue, setPokemonList, type }) {
  return (
    <div className='search'>
      <label>Search by Name</label>  
      <input onChange={(e) => setInputValue(e.target.value)}></input>
      <button onClick={ async () => {
        if (inputValue === '') {
          setPokemonList(await fetchPokemon(type));
        }
        const resp = await fetch(`https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${inputValue}&perPage=1500`);
        const data = await resp.json();
        setPokemonList(data.results);

      }}>Search</button>
    </div>
  );
}


