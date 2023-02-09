import { appState } from "../AppState.js"
import { Pokemon } from "../Models/Pokemon.js"
import { poke_api } from "./AxiosService.js"


class PokemonService{
  async getPokemon() {
    let pokemons = []
    const res = await poke_api.get()
    let rawData = res.data.results
    pokemons = rawData.map(e => {
      return axios.get(e.url).then(res => {
        return new Pokemon(res.data)
      })
    })
    
    await Promise.all(pokemons).then(pokemons => {
      appState.pokemons = pokemons
    })
  }

  setPokemon(){
    let pokemons = appState.pokemons
    let randomIndex = Math.floor(Math.random() * pokemons.length)
    appState.pokemon = pokemons[randomIndex]
  }

  checkGuess(formData){
    let guess = formData.guess.toLowerCase()
    if(guess == appState.pokemon.name){
      appState.myPokemons.push(new Pokemon(appState.pokemon))
      let usedPokemonIndex = appState.pokemons.findIndex(e => e.name == appState.pokemon.name)
      appState.pokemons.splice(usedPokemonIndex, 1)
      this.setPokemon()
      appState.emit('myPokemons')
      console.log(appState.myPokemons)
    }else{
      this.setPokemon()
    }
  }
}


export const pokemonService = new PokemonService()