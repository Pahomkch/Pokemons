import React from 'react'
import { NavLink } from 'react-router-dom'
import { TPokemon } from '../api/api'

type PropsType = {
    pokemon: TPokemon
}

const OnePokemon: React.FC<PropsType> = (props) => {
    const { pokemon } = props

    return (
        <div style={{ border: 'solid 1px red' }} >
            Pokemon name is {pokemon.name}
            <NavLink to={`/${pokemon.id}`}>
                <img src={pokemon.sprites.front_default} alt="pokemon_img" />
            </NavLink>
        </div>
    )
}

export default OnePokemon
