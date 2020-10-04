import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Switch, Route} from 'react-router-dom'
import { compose } from 'redux';

import './App.css';
import { TPokemon } from './api/api';
import PokemonCards from './Components/PokemonCards';
import { addPokemonThunk } from './redux/pokemonReducer';
import { AppStateType } from './redux/store';
import PokemonPage from './Components/PokemonPage';
import AbilityPokemon from './Components/AbilityPokemon';

type TMapStateToProps = {
  pokemonList: Array<TPokemon>
}
type TMapDispatchToProps = {
  addPokemonThunk: any
}
type TOwnProps = {
  
}
type PropsType = TMapStateToProps & TMapDispatchToProps & TOwnProps

const App: React.FC<PropsType> = (props) => {
  const { pokemonList, addPokemonThunk } = props

  const [pokemonsCount] = useState(20)

  useEffect(() => {
    addPokemonThunk(pokemonsCount)
  }, [pokemonsCount, addPokemonThunk])

  return (
    <div>
      <Switch>
        <Route path='/:id' render={() => <PokemonPage />} />
        <Route path='/' exact render={() => <PokemonCards pokemons={pokemonList}  /> } />
      </Switch>
      {/* <div >{pokemonList.map(p => <div key={p.id} style={{ border: 'solid 2px red' }}><p>{p.id} {p.name}</p>
        <img src={p.sprites?.front_default} alt="1" />

      </div>)} </div> */}
    </div>
  );
}

const mapStateToProps = (state: AppStateType): TMapStateToProps => ({
  pokemonList: state.pokemons.pokemonsList
})

export default compose(
  // withRouter,  useHistory for routing
  connect<TMapStateToProps, TMapDispatchToProps, TOwnProps, AppStateType>(mapStateToProps, { addPokemonThunk })
)(App)
