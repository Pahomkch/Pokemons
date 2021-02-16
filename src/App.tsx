import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import "./App.css";
import { TPokemon, getPokemonAbilitu, TPokemonAbility } from "./api/api";
import PokemonCards from "./Components/PokemonCards";
import { addPokemonThunk } from "./redux/pokemonReducer";
import { AppStateType } from "./redux/store";
import PokemonPage from "./Components/PokemonPage";
import AbilitiPage from "./Components/AbilitiPage";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff",
  },
}));

const App: React.FC<PropsType> = (props) => {
  const { pokemonList, addPokemonThunk } = props;
  const classes = useStyles();

  const [pokemonsCount] = useState(20);

  useEffect(() => {
    addPokemonThunk(pokemonsCount);
  }, [pokemonsCount, addPokemonThunk]);

  if (pokemonList.length < pokemonsCount) {
    return (
      <div>
        <Backdrop className={classes.backdrop} open>
          <CircularProgress color="inherit" />
          We are waiting {pokemonsCount - pokemonList.length} pokemons
        </Backdrop>
      </div>
    );
  }
  return (
    <div>
      <Switch>
        <Route
          path="/abiliti/:abilityNumber"
          render={() => <AbilitiPage getAbility={getPokemonAbilitu} />}
        />
        <Route path="/:id" render={() => <PokemonPage />} />
        <Route path="/" render={() => <PokemonCards pokemons={pokemonList} />} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state: AppStateType): TMapStateToProps => ({
  pokemonList: state.pokemons.pokemonsList.filter((p) => p.id !== 0),
});

export default connect<TMapStateToProps, TMapDispatchToProps, TOwnProps, AppStateType>(
  mapStateToProps,
  { addPokemonThunk, getPokemonAbilitu }
)(App);

type PropsType = TMapStateToProps & TMapDispatchToProps & TOwnProps;

type TMapStateToProps = {
  pokemonList: Array<TPokemon>;
};
type TMapDispatchToProps = {
  addPokemonThunk: any;
  getPokemonAbilitu: (id: number) => Promise<TPokemonAbility>;
};
type TOwnProps = {};
