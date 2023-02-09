import { appState } from "../AppState.js";
import { pokemonService } from "../Services/PokemonsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";



async function _getPokemon(){
  try {
    await pokemonService.getPokemon()
    _setPokemon()
  } catch (error) {
    console.error(error)
    Pop.error(error)
  }
}

function _setPokemon(){
  pokemonService.setPokemon()
}

function _drawPokemons(){
  let template = ''
  appState.myPokemons.forEach(e => {
    template += e.pokemonListTemplate
  })
  setHTML('pokemons-container', template)
}

function _drawPokemon(){
  setHTML('game-container', appState.pokemon.pokemonTemplate)
  console.log(appState.pokemon.name)
}

export class PokemonsController{
  constructor(){
    _getPokemon()
    appState.on('myPokemons', _drawPokemons)
    appState.on('pokemon', _drawPokemon)
  }

  checkGuess(){
    window.event.preventDefault()
    const form = window.event.target
    const formData = getFormData(form)
    pokemonService.checkGuess(formData)
    form.reset()
  }
}