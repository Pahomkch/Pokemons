import { TPokemon } from "./Pokemon";
import { ADD_POKEMONS } from "../redux/pokemonReducer";

export type TAddPokemonAC = {
  type: typeof ADD_POKEMONS;
  payload: TPokemon;
};
