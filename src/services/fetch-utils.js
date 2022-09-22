export async function fetchPokemon(type) {
  const params = new URLSearchParams();
  if (type !== 'All') {
    params.set('type', type);
  }
  const resp = await fetch(
    `https://pokedex-alchemy.herokuapp.com/api/pokedex?perPage=1500&${params.toString()}`
  );
    // eslint-disable-next-line no-console
  console.log('fetchResp', resp);
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