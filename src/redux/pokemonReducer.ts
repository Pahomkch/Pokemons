import { ThunkAction } from "redux-thunk";
import { getPokemon } from "../api/api";
import { TPokemon } from "../Types/Pokemon";
import { TAddPokemonAC } from "../Types/Redux";
import { AppStateType } from "./store";

export const ADD_POKEMONS = "test-assignment/pokeAPI/ADD_POKEMONS";

type TInitialPokemonState = {
  pokemonsList: Array<TPokemon>;
};

export type ActionsType = TAddPokemonAC;

const initialState = {
  pokemonsList: [] as Array<TPokemon>,
};

export const pokemonReducer = (state = initialState, action: ActionsType): TInitialPokemonState => {
  switch (action.type) {
    case ADD_POKEMONS:
      //delete sta
      return {
        ...state,
        pokemonsList: [...state.pokemonsList, action.payload],
      };
    default:
      return state;
  }
};

export const addPokemonAC = (payload: TPokemon): TAddPokemonAC => ({ type: ADD_POKEMONS, payload });

// ***************** Thunk *****************
export const addPokemonThunk = (
  id: number
): ThunkAction<void, AppStateType, unknown, ActionsType> => async (dispatch) => {
  for (let index = 1; index <= id; index++) {
    getPokemon(index).then((pokemon) => {
      dispatch(addPokemonAC(pokemon));
    });
  }
};
