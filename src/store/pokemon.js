import {create} from 'zustand'
import { mountStoreDevtool } from "simple-zustand-devtools";

const usePokemonStore = create((set)=>({
    filter : "",
    pokemons: [],
    setPokemons : pokemons => set((state)=> ({ ...state, pokemons })),
    setFilter : filter => set((state)=> ({...state, filter}))
}))
if (process.env.NODE_ENV === "development") {
    mountStoreDevtool("Store", usePokemonStore);
  }

export default usePokemonStore