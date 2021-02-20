import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import pokemonchiki from "./pokemonsSlice";

let allReducers = combineReducers({
  pokemons: pokemonchiki,
});

const store = configureStore({ reducer: allReducers });

type rootReducer = typeof allReducers;
export type TAppStateType = ReturnType<rootReducer>;
export type TDispatch = typeof store.dispatch;

export default store;
