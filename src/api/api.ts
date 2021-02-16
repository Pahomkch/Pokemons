import axios from "axios";
import { TPokemon, TPokemonAbility } from "../Types/Pokemon";

const instance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});

export const getPokemon = (id: number) => {
  return instance.get<TPokemon>(`pokemon/${id}`).then((res) => res.data);
};

export const getPokemonAbility = (id: number) => {
  return instance.get<TPokemonAbility>("ability/" + id).then((res) => res.data);
};
