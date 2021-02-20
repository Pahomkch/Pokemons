import { ThunkAction } from "redux-thunk";
import { getPokemon } from "../api/api";
import { TPokemon } from "../Types/Pokemon";
import { ActionsType, TAddPokemonAC, TInitialPokemonState } from "../Types/Redux";
import { TAppStateType } from "./store";

export const ADD_POKEMONS = "test-assignment/pokeAPI/ADD_POKEMONS";

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
  count: number
): ThunkAction<void, TAppStateType, unknown, ActionsType> => async (dispatch) => {
  for (let index = 1; index <= count; index++) {
    getPokemon(index).then((pokemon) => {
      dispatch(addPokemonAC(pokemon));
    });
  }
};
