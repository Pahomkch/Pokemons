import React from "react";
import { NavLink } from "react-router-dom";
import { TPropsType } from "../Types/AbilityPokemon";

const AbilityPokemon: React.FC<TPropsType> = (props) => {
  const { abiliti } = props;
  const idAbiliti = abiliti.url.substr(-4).replace(/\//gi, "");
  return <NavLink to={`/abiliti/${idAbiliti}`}>{abiliti.name}</NavLink>;
};

export default AbilityPokemon;
