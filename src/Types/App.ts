import { TPokemon, TPokemonAbility } from "./Pokemon";

export type AppTOwnProps = {};

export type AppTMapStateToProps = {
  pokemonList: Array<TPokemon>;
};
export type AppTMapDispatchToProps = {
  addPokemonThunk: any;
  getPokemonAbility: (id: number) => Promise<TPokemonAbility>;
};

export type AppPropsType = AppTMapStateToProps & AppTMapDispatchToProps & AppTOwnProps;
