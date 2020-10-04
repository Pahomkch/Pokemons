import React, { MouseEvent, useEffect, useState } from 'react'
import {  useHistory, useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import { TPokemon, getPakemonApi } from '../api/api'
import { AppStateType } from '../redux/store'
import AbilityPokemon from './AbilityPokemon'


type TMapStateToProps = {
    pokemonList: Array<TPokemon>
}
type TMapDispatchToProps = {
    getPakemonApi: (id: number) => Promise<TPokemon>
}
type TOwnProps = {
}
type PropsType = TMapStateToProps & TMapDispatchToProps & TOwnProps

const PokemonPage: React.FC<PropsType> = (props) => {
    const history = useHistory()
    //@ts-ignore
    const { id } = useParams()
    const pokemonWithCurrentId = props.pokemonList
    const [currentPokemon, setCurrentPokemon] = useState<TPokemon>(pokemonWithCurrentId[0])

    const clickToMain = (e: MouseEvent<HTMLButtonElement>) => {
        history.push('/')
    }
    useEffect(() => {

        getPakemonApi(id).then(res => {
            setCurrentPokemon(res)
        })

    }, [id])

    return (
        <div>
            <button onClick={clickToMain}>To main</button>
            <div>

                <img src={currentPokemon.sprites.front_default} alt="" />
            </div>
            <p>name: {currentPokemon.name.toString()}</p>
            <p>order: {currentPokemon.order.toString()}</p>
            <p>id: {currentPokemon.id.toString()}</p>
            <p>is_default: {currentPokemon.is_default.toString()}</p>
            <p>height: {currentPokemon.height.toString()}</p>
            <p>base_experience: {currentPokemon.base_experience.toString()}</p>
            <p>weight: {currentPokemon.weight.toString()}</p>
            <p>abilities:
                <ul>
                    {currentPokemon.abilities.map(abilities =>
                        <li key={abilities.ability.name}>
                            <AbilityPokemon abiliti={abilities.ability} />
                            {/* <NavLink to={'/abiliti'}>Details</NavLink> */}

                        </li>)}
                </ul>
            </p>
            <p>forms: {currentPokemon.forms.map(form => `${form.name} `)}</p>
            <p>species: {currentPokemon.species.name}</p>
            <p>stats: {currentPokemon.stats.map(stats => `${stats.base_stat} ${stats.stat.name} |` )}</p>
            <p>types: {currentPokemon.types.map(types => `${types.type.name} | `)}</p>
        </div>
    )
}

const mapStateToProps = (state: AppStateType): TMapStateToProps => ({
    pokemonList: state.pokemons.pokemonsList
})



export default connect<TMapStateToProps, TMapDispatchToProps, TOwnProps, AppStateType>(mapStateToProps, { getPakemonApi })(PokemonPage)