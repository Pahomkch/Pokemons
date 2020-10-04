import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2/'
})

export const getPakemonApi = (id: number) => {
    return instance.get<TPokemon>(`pokemon/${id}`).then(res => res.data)
}

export const getPokemonAbilitu = (id: number) => {
    return instance.get<TPokemonAbility>('ability/' + id).then(res => res.data)
}

export type TPokemonAbility = {
    id: number
    name: string
    is_main_series: boolean
    generation: NamedAPIResource
    names: Array<Name>
    effect_entries: Array<VerboseEffect>
    effect_changes: Array<AbilityEffectChange>
    flavor_text_entries: Array<AbilityFlavorText>
    pokemon: Array<AbilityPokemon>
}

type AbilityPokemon = {
    is_hidden: boolean
    slot: number
    pokemon: NamedAPIResource
}

type AbilityFlavorText = {
    flavor_text: string
    language: NamedAPIResource
    version_group: NamedAPIResource
}

type AbilityEffectChange = {
    effect_entries: Array<Effect>
    version_group: NamedAPIResource
}

type Effect = {
    effect: string
    language: NamedAPIResource
}

type VerboseEffect = {
    effect: string
    short_effect: string
    language: NamedAPIResource
}
type Name = {
    name: string
    language: NamedAPIResource
}
export type PokemonAbility = {
    is_hidden: boolean
    slot: number
    ability: NamedAPIResource
}

export type NamedAPIResource = {
    name: string
    url: string
}

type VersionGameIndex = {
    game_index: number
    version: NamedAPIResource
}

type PokemonHeldItem = {
    item: NamedAPIResource
    version_details: any
}
type PokemonMove = {
    move: NamedAPIResource
    version_group_details: any
}

type PokemonSprites = {
    front_default: string
    front_shiny: string
    front_female: string
    front_shiny_female: string
    back_default: string
    back_shiny: string
    back_female: string
    back_shiny_female: string
}

type PokemonStat = {
    stat: NamedAPIResource
    effort: number
    base_stat: number
}

type PokemonType = {
    slot: number
    type: NamedAPIResource
}

export type TPokemon = {
    id: number
    name: string
    base_experience: number
    height: number
    is_default: boolean
    order: number
    weight: number
    abilities: Array<PokemonAbility>
    forms: Array<NamedAPIResource>
    game_indices: Array<VersionGameIndex>
    held_items: Array<PokemonHeldItem>
    location_area_encounters: string
    moves: Array<PokemonMove>
    sprites: PokemonSprites
    stats: Array<PokemonStat>
    types: Array<PokemonType>
    species: NamedAPIResource
}