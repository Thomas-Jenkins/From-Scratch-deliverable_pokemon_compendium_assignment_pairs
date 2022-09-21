export async function fetchPokemon() {
  const resp = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?=perpage=150`
  );
  const data = await resp.json();
  return data.results;
}
export async function fetchPokeTypes() {
  const resp = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex/types`
  );
  const data = await resp.json();
  return data;
}