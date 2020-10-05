import React from 'react'
import { NavLink } from 'react-router-dom'
import { NamedAPIResource } from '../api/api'

type PropsType = {
    abiliti: NamedAPIResource
}

const AbilityPokemon: React.FC<PropsType> = (props) => {
    const { abiliti } = props
    const idAbiliti = abiliti.url.substr(-4).replace(/\//gi, '')
    return (
        <NavLink to={`/abiliti/${idAbiliti}`}>{abiliti.name}</NavLink>
    )
}

export default AbilityPokemon