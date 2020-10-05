import React, { ChangeEvent, useEffect, useState } from 'react'
import { TPokemon } from '../api/api'
import OnePokemon from './OnePokemon'
import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import SearchIcon from '@material-ui/icons/Search';
const useStyles = makeStyles((theme) => ({
    search: {
        margin: '0',
        width: '100%',
    },
}));

type PropsType = {
    pokemons: Array<TPokemon>
}
const PokemonCard = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

`
const PokemonCards: React.FC<PropsType> = (props) => {
    const classes = useStyles();

    const pokemons = props.pokemons
    const [pokemonsArr, setPokemonsArr] = useState(pokemons)
    const [nameSearch, setNameSearch] = useState('')
    useEffect(() => {
        setPokemonsArr(pokemons)
    }, [pokemons, setPokemonsArr])

    const changeNameInput = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('adsaddas')
        setNameSearch(e.target.value)
        setPokemonsArr(pokemons.filter(p => {
            return p.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
        }))
    }

    return (
        <div>
            <TextField
                className={classes.search}
                value={nameSearch}
                onChange={changeNameInput}
                label="Filter pokemons by name"
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />

            <PokemonCard>
                {pokemonsArr.map(pokemon => <OnePokemon key={pokemon.id} pokemon={pokemon} />)}
            </PokemonCard>
        </div>





    )
}

export default PokemonCards