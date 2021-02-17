import { TPokemon } from "./Pokemon";

export type TPropsType = TMapStateToProps & TMapDispatchToProps & TOwnProps;
export type TOwnProps = {};
export type TMapStateToProps = {};
export type TMapDispatchToProps = {
  getPokemon: (id: number) => Promise<TPokemon>;
};
