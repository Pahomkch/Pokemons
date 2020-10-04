import React, { MouseEvent, useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { TPokemonAbility } from '../api/api'

type PropsType = {
    getAbility: (id: number) => Promise<TPokemonAbility>
}

const AbilitiPage: React.FC<PropsType> = (props) => {
    const { getAbility } = props
    const { abilityNumber } = useParams()
    const history = useHistory()
    const [ability, setAbility] = useState<TPokemonAbility>({
        "id": 1,
        "name": "stench",
        "is_main_series": true,
        "generation": {
          "name": "generation-iii",
          "url": "https://pokeapi.co/api/v2/generation/3/"
        },
        "names": [
          {
            "name": "Stench",
            "language": {
              "name": "en",
              "url": "https://pokeapi.co/api/v2/language/9/"
            }
          }
        ],
        "effect_entries": [
          {
            "effect": "This Pokémon's damaging moves have a 10% chance to make the target [flinch]{mechanic:flinch} with each hit if they do not already cause flinching as a secondary effect.\n\nThis ability does not stack with a held item.\n\nOverworld: The wild encounter rate is halved while this Pokémon is first in the party.",
            "short_effect": "Has a 10% chance of making target Pokémon [flinch]{mechanic:flinch} with each hit.",
            "language": {
              "name": "en",
              "url": "https://pokeapi.co/api/v2/language/9/"
            }
          }
        ],
        "effect_changes": [
          {
            "version_group": {
              "name": "black-white",
              "url": "https://pokeapi.co/api/v2/version-group/11/"
            },
            "effect_entries": [
              {
                "effect": "Has no effect in battle.",
                "language": {
                  "name": "en",
                  "url": "https://pokeapi.co/api/v2/language/9/"
                }
              }
            ]
          }
        ],
        "flavor_text_entries": [
          {
            "flavor_text": "è‡­ãã¦ã€€ç›¸æ‰‹ãŒ\nã²ã‚‹ã‚€ã€€ã“ã¨ãŒã‚ã‚‹ã€‚",
            "language": {
              "name": "ja-kanji",
              "url": "https://pokeapi.co/api/v2/language/11/"
            },
            "version_group": {
              "name": "x-y",
              "url": "https://pokeapi.co/api/v2/version-group/15/"
            }
          }
        ],
        "pokemon": [
          {
            "is_hidden": true,
            "slot": 3,
            "pokemon": {
              "name": "gloom",
              "url": "https://pokeapi.co/api/v2/pokemon/44/"
            }
          }
        ]
      })
    useEffect(() => {
        getAbility(abilityNumber).then(res => setAbility(res))
    }, [abilityNumber, getAbility])

    const clickToBackButton = (e: MouseEvent<HTMLButtonElement>) => {
        history.goBack()
    }


    return (
        <div>
            <button onClick={clickToBackButton}>Back</button>
            <div>
                <p>id: {ability.id}</p>
                <p>name: {ability.name}</p>
                <p>names: {ability.names.map(u => `${u.name}  `)}</p>
                <p>effect_entries: {ability.effect_entries[0].effect}</p>
                <p>effect_changes: {ability.effect_changes[0]?.effect_entries[0].effect}</p>
                <p>pokemon: {ability.pokemon.map(poke => `${poke.pokemon.name} `)}</p>
            </div>
        </div>
    )
}

export default AbilitiPage