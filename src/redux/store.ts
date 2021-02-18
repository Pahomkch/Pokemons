import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import thunk from "redux-thunk";
import { pokemonReducer } from "./pokemonReducer";
import pokemonchiki from "./pokemonsSlice";

let allReducers = combineReducers({
  pokemons: pokemonReducer,
  newPokemons: pokemonchiki,
});

type rootReducer = typeof allReducers;
export type AppStateType = ReturnType<rootReducer>;

const store = configureStore({ reducer: allReducers });

export default store;
