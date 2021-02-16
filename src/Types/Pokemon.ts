export type TPokemonAbility = {
  id: number;
  name: string;
  is_main_series: boolean;
  generation: TNamedAPIResource;
  names: Array<TName>;
  effect_entries: Array<TVerboseEffect>;
  effect_changes: Array<TAbilityEffectChange>;
  flavor_text_entries: Array<TAbilityFlavorText>;
  pokemon: Array<TAbilityPokemon>;
};

export type TAbilityPokemon = {
  is_hidden: boolean;
  slot: number;
  pokemon: TNamedAPIResource;
};

export type TAbilityFlavorText = {
  flavor_text: string;
  language: TNamedAPIResource;
  version_group: TNamedAPIResource;
};

export type TAbilityEffectChange = {
  effect_entries: Array<TEffect>;
  version_group: TNamedAPIResource;
};

export type TEffect = {
  effect: string;
  language: TNamedAPIResource;
};

export type TVerboseEffect = {
  effect: string;
  short_effect: string;
  language: TNamedAPIResource;
};

export type TName = {
  name: string;
  language: TNamedAPIResource;
};

export type TAbility = {
  is_hidden: boolean;
  slot: number;
  ability: TNamedAPIResource;
};

export type TNamedAPIResource = {
  name: string;
  url: string;
};

export type TVersionGameIndex = {
  game_index: number;
  version: TNamedAPIResource;
};

export type TPokemonHeldItem = {
  item: TNamedAPIResource;
  version_details: any;
};

export type TPokemonMove = {
  move: TNamedAPIResource;
  version_group_details: any;
};

export type TPokemonSprites = {
  front_default: string;
  front_shiny: string;
  front_female: string;
  front_shiny_female: string;
  back_default: string;
  back_shiny: string;
  back_female: string;
  back_shiny_female: string;
};

export type TPokemonStat = {
  stat: TNamedAPIResource;
  effort: number;
  base_stat: number;
};

export type TPokemonType = {
  slot: number;
  type: TNamedAPIResource;
};

export type TPokemon = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: Array<TAbility>;
  forms: Array<TNamedAPIResource>;
  game_indices: Array<TVersionGameIndex>;
  held_items: Array<TPokemonHeldItem>;
  location_area_encounters: string;
  moves: Array<TPokemonMove>;
  sprites: TPokemonSprites;
  stats: Array<TPokemonStat>;
  types: Array<TPokemonType>;
  species: TNamedAPIResource;
};
