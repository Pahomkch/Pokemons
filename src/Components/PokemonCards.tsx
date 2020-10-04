import React, { ChangeEvent, useEffect, useState } from 'react'
import { TPokemon } from '../api/api'
import OnePokemon from './OnePokemon'

type PropsType = {
    pokemons: Array<TPokemon>
}

const PokemonCards: React.FC<PropsType> = (props) => {
    const pokemons = props.pokemons.filter(p => p.id !== 0)
    const [pokemonsArr, setPokemonsArr] = useState(pokemons)
    const [nameSearch, setNameSearch] = useState('')
    useEffect(() => {
        setPokemonsArr(pokemons)
    }, [pokemons])
    

    const changeNameInput = (e: ChangeEvent<HTMLInputElement>) => {
        setNameSearch(e.target.value)
        setPokemonsArr(pokemons.filter(pok => {
            return pok.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
        }))
    }


    return (
        <div >
            <input type='text' value={nameSearch} onChange={changeNameInput} />
            {pokemonsArr.map(pokemon => <OnePokemon key={pokemon.id} pokemon={pokemon} /> )}
        </div>
    )
}

export default PokemonCards