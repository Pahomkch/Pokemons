import { ThunkAction } from "redux-thunk";
import { getPakemonApi, TPokemon } from "../api/api";
import { AppStateType } from "./store";

const ADD_POKEMONS = "test-assignment/pokeAPI/ADD_POKEMONS";

type TInitialPokemonState = {
  pokemonsList: Array<TPokemon>;
};

export type ActionsType = TAddPokemonAC;

const initialState = {
  pokemonsList: [
    {
      id: 0,
      name: "zero",
      base_experience: 0,
      height: 2,
      is_default: false,
      order: 0,
      weight: 1,
      abilities: [{ is_hidden: true, slot: 0, ability: { name: "a", url: "zer" } }],
      forms: [{ name: "a", url: "zer" }],
      game_indices: [{ game_index: 0, version: { name: "a", url: "zer" } }],
      held_items: [{ item: { name: "a", url: "zer" }, version_details: "any" }],
      location_area_encounters: "string",
      moves: [{ move: { name: "a", url: "zer" }, version_group_details: "any" }],
      sprites: {
        front_default: "https://via.placeholder.com/96",
        front_shiny: "string",
        front_female: "string",
        front_shiny_female: "string",
        back_default: "string",
        back_shiny: "string",
        back_female: "string",
        back_shiny_female: "string",
      },
      stats: [{ stat: { name: "a", url: "zer" }, effort: 0, base_stat: 0 }],
      types: [{ slot: 0, type: { name: "a", url: "zer" } }],
      species: { name: "a", url: "zer" },
    },
  ],
};

export const pokemonReducer = (state = initialState, action: ActionsType): TInitialPokemonState => {
  switch (action.type) {
    case ADD_POKEMONS:
      return {
        ...state,
        pokemonsList: [...state.pokemonsList, action.payload],
      };
    default:
      return state;
  }
};

type TAddPokemonAC = {
  type: typeof ADD_POKEMONS;
  payload: TPokemon;
};

export const addPokemonAC = (payload: TPokemon): TAddPokemonAC => ({ type: ADD_POKEMONS, payload }); //changePokemon

// ***************** Thunk *****************
export const addPokemonThunk = (
  id: number
): ThunkAction<void, AppStateType, unknown, ActionsType> => async (dispatch) => {
  for (let index = 1; index <= id; index++) {
    getPakemonApi(index).then((pokemon) => {
      dispatch(addPokemonAC(pokemon));
    });
  }
};
