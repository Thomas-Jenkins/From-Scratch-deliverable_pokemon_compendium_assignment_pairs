import usePokemon from '../../Hooks/usePokemon';
import Pokemon from '../Pokemon/Pokemon';
import Select from '../Select/Select';
import SearchPokemon from '../Search/Search';
import './Main.css';

export default function Main() {
  const { loading, pokemonList, setPokemonList, typeList, setType, inputValue, setInputValue, type } = usePokemon();
  if (loading) return <div className='lds-ripple'><div></div><div></div></div>;
  return (
    <div className='main'>
      <div className="nav">
        <SearchPokemon type={type} inputValue={inputValue} setInputValue={setInputValue} setPokemonList={setPokemonList}/>
        <Select typeList={typeList} setType={setType} />
      </div>
      <div className='pokemans'>
        {pokemonList.map((aPokemon) => (
          <Pokemon key={aPokemon.id} { ...aPokemon } />
        ))} 
      </div>
    </div>
  );
}