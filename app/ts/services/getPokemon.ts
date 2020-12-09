import { randomNumber } from "../utils/index";


const baseUrl = "https://pokeapi.co/api/v2";

export class PokemonServiceRandom {
   getWhoPokemon() {
  return  fetch(baseUrl + "/pokemon/" + randomNumber())
  .then((res) => res.json())
  .then((dados) => {
    let pokemon = {
      name : dados.name,
      img: dados.sprites.other.dream_world.front_default,
      types: dados.types,
      stats: dados.stats,
      abilities: dados.abilities
    }
    return pokemon

  } )
  .catch((erro) => console.log(erro))
  }
}
