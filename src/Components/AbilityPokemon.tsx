import React from "react";
import { NavLink } from "react-router-dom";
import { TNamedAPIResource } from "../Types/Pokemon";

type PropsType = {
  abiliti: TNamedAPIResource;
};

const AbilityPokemon: React.FC<PropsType> = (props) => {
  const { abiliti } = props;
  const idAbiliti = abiliti.url.substr(-4).replace(/\//gi, "");
  return <NavLink to={`/abiliti/${idAbiliti}`}>{abiliti.name}</NavLink>;
};

export default AbilityPokemon;
