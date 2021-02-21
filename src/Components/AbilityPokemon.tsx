import React from "react";
import { NavLink } from "react-router-dom";
import { TPropsType } from "../Types/AbilityPokemon";

const AbilityPokemon = (props: TPropsType) => {
  const { abiliti } = props;
  const idAbiliti = abiliti.url.substr(-4).replace(/\//gi, "");
  return <NavLink to={`/abiliti/${idAbiliti}`}>{abiliti.name}</NavLink>;
};

export default AbilityPokemon;
