import { useEffect } from "react";
import usePokemonStore from "./store/pokemon";

function App() {
  const pokemons = usePokemonStore(state => state.pokemons)
  const filter = usePokemonStore (state => state.filter)
  const setFilter = usePokemonStore (state => state.setFilter)
  const setPokemons = usePokemonStore(state => state.setPokemons)
  const POKEMON_URL = "https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/0658aeff401d196dece7ec6fe6c726c6adc1cc00/gistfile1.txt";

  useEffect(()=>{
  fetch(POKEMON_URL)
  .then((resp) => resp.json())
  .then((pokemon) =>
    setPokemons(pokemon)
  );
  },[])

  return (
    <div>
      <input value={filter} onChange={(e)=> setFilter(e.target.value) }/>
      <table width="100%">
      <tbody>
       {
        pokemons.filter((item)=> item.name.english.toLowerCase().includes(filter.toLowerCase()) ).map((pokemon)=>{
         return <tr key={pokemon.id}>
            <td> {pokemon.name.english} </td>
            <td> {pokemon.type.join(', ')}</td>
          </tr>
        })
       }
      </tbody>
    </table>
    </div>
  );
}

export default App;
