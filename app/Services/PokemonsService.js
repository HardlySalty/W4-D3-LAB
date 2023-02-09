import { appState } from "../AppState.js"
import { TempPokemon } from "../Models/TempPokemon.js"


class PokemonService{
  async getPokemon(){
    const res = await poke_api.get()
    let rawData = res.data.results
    appState.tempPokemons = rawData.map(e => new TempPokemon(e))
    appState.tempPokemons.forEach(e => {
      
    })
    console.log(appState.pokemons)
    }
}

export const pokemonService = new PokemonService()