import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { AppStateType } from "./redux/store";
import { getPokemonAbility } from "./api/api";
import { addPokemonThunk } from "./redux/pokemonReducer";
import PokemonCards from "./Components/PokemonCards";
import PokemonPage from "./Components/PokemonPage";
import AbilityPage from "./Components/AbilityPage";
import {
  AppPropsType,
  AppTMapStateToProps,
  AppTMapDispatchToProps,
  AppTOwnProps,
} from "./Types/App";
import Loading from "./Common/Loading";

const App: React.FC<AppPropsType> = (props) => {
  const { pokemonList, addPokemonThunk } = props;
  const [pokemonsCount] = useState(20);

  useEffect(() => {
    addPokemonThunk(pokemonsCount);
  }, [pokemonsCount, addPokemonThunk]);

  if (pokemonList.length < pokemonsCount) {
    const leftToDownloadPokemons: number = pokemonsCount - pokemonList.length;
    return (
      <Loading>
        <h4>We are waiting {leftToDownloadPokemons} pokemons</h4>
      </Loading>
    );
  }
  return (
    <div>
      <Switch>
        <Route path="/abiliti/:abilityNumber">
          <AbilityPage getAbility={getPokemonAbility} />
        </Route>
        <Route path="/:id">
          <PokemonPage />
        </Route>
        <Route path="/">
          <PokemonCards pokemons={pokemonList} />
        </Route>
      </Switch>
    </div>
  );
};

const mapStateToProps = (state: AppStateType): AppTMapStateToProps => ({
  pokemonList: state.pokemons.pokemonsList,
});

export default connect<AppTMapStateToProps, AppTMapDispatchToProps, AppTOwnProps, AppStateType>(
  mapStateToProps,
  { addPokemonThunk, getPokemonAbility }
)(App);
