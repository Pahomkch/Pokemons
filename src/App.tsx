import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import { getPokemonAbility } from "./api/api";
import { fetchPokemon } from "./redux/pokemonsSlice";
import PokemonCards from "./Components/PokemonCards";
import PokemonPage from "./Components/PokemonPage";
import AbilityPage from "./Components/AbilityPage";

import Loading from "./Common/Loading";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";

const App = () => {
  const pokemons = useAppSelector((state) => state.pokemons.pokemons);
  const dispatch = useAppDispatch();
  const [pokemonsCount] = useState(20);

  useEffect(() => {
    for (let i = 1; i <= pokemonsCount; i++) {
      dispatch(fetchPokemon(i));
    }
  }, [pokemonsCount, dispatch]);

  if (pokemons.length < pokemonsCount) {
    const leftToDownloadPokemons: number = pokemonsCount - pokemons.length;
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
          <PokemonCards pokemons={pokemons} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
