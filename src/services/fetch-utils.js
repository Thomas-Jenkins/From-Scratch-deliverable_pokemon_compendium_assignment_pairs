export async function fetchPokemon() {
  const resp = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?perPage=150`
  );
  const data = await resp.json();
  return data.results;
}