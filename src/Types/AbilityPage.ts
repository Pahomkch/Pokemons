import { TPokemonAbility } from "./Pokemon";

export type TPropsType = {
  getAbility: (id: number) => Promise<TPokemonAbility>;
};
