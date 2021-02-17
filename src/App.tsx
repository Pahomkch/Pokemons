import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import { AppStateType } from "./redux/store";
import { getPokemonAbility } from "./api/api";
import { addPokemonThunk } from "./redux/pokemonReducer";
import PokemonCards from "./Components/PokemonCards";
import PokemonPage from "./Components/PokemonPage";
import AbilitiPage from "./Components/AbilitiPage";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppPropsType,
  AppTMapStateToProps,
  AppTMapDispatchToProps,
  AppTOwnProps,
} from "./Types/App";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const App: React.FC<AppPropsType> = (props) => {
  const { pokemonList, addPokemonThunk } = props;
  const classes = useStyles();
  const [pokemonsCount] = useState(20);

  useEffect(() => {
    addPokemonThunk(pokemonsCount);
  }, [pokemonsCount, addPokemonThunk]);

  if (pokemonList.length < pokemonsCount) {
    const leftToDownloadPokemons: number = pokemonsCount - pokemonList.length;
    return (
      <div>
        <Backdrop className={classes.backdrop} open>
          <CircularProgress color="inherit" />
          We are waiting {leftToDownloadPokemons} pokemons
        </Backdrop>
      </div>
    );
  }
  return (
    <div>
      <Switch>
        <Route
          path="/abiliti/:abilityNumber"
          render={() => <AbilitiPage getAbility={getPokemonAbility} />}
        />
        <Route path="/:id" render={() => <PokemonPage />} />
        <Route path="/" render={() => <PokemonCards pokemons={pokemonList} />} />
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
