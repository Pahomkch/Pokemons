import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { pokemonReducer } from "./pokemonReducer";

let allReducers = combineReducers({
  pokemons: pokemonReducer,
});

export type AppStateType = ReturnType<typeof allReducers>;

const store = createStore(allReducers, applyMiddleware(thunk));

export default store;
