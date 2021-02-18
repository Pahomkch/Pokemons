import { TPokemon } from "./Pokemon";
import { ADD_POKEMONS } from "../redux/pokemonReducer";

export type TAddPokemonAC = {
  type: typeof ADD_POKEMONS;
  payload: TPokemon;
};

export type TInitialPokemonState = {
  pokemonsList: Array<TPokemon>;
};

export type ActionsType = TAddPokemonAC;
