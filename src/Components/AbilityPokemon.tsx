import React from 'react'
import { NavLink } from 'react-router-dom'
import {NamedAPIResource} from '../api/api'

type PropsType = {
    abiliti: NamedAPIResource
}

const AbilityPokemon: React.FC<PropsType> = (props) => {
    const {abiliti} = props
    const idAbiliti = abiliti.url.substr(-4).replace(/\//gi, '')
    return (
        <div>
            i abiliti {abiliti.name}
            <NavLink to={`/abiliti/${idAbiliti}`}>Details</NavLink>
        </div>
    )
}

export default AbilityPokemon