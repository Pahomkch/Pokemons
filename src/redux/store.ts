import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { pokemonReducer } from "./pokemonReducer";

let allReducers = combineReducers({
  pokemons: pokemonReducer
});

type rootReducer = typeof allReducers
export type AppStateType = ReturnType<rootReducer>

const store = createStore(allReducers, applyMiddleware(thunk));

export default store;