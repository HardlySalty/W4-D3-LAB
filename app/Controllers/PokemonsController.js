import { appState } from "../AppState.js";
import { Pokemon } from "../Models/TempPokemon.js";
import { poke_api } from "../Services/AxiosService.js";
import { pokemonService } from "../Services/PokemonsService.js";


async function _getPokemon(){
  await pokemonService.getPokemon()
}

export class PokemonsController{
  constructor(){
    _getPokemon()
  }
}