import React, { ChangeEvent, useEffect, useState } from "react";
import OnePokemon from "./OnePokemon";

import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { TPokemon } from "../Types/Pokemon";

const useStyles = makeStyles((theme) => ({
  search: {
    margin: "0",
    width: "100%",
  },
}));

type PropsType = {
  pokemons: Array<TPokemon>;
};

const PokemonCards: React.FC<PropsType> = (props) => {
  const classes = useStyles();

  const pokemons = props.pokemons;
  const [pokemonsArr, setPokemonsArr] = useState(pokemons);
  const [nameSearch, setNameSearch] = useState("");
  useEffect(() => {
    setPokemonsArr(pokemons);
  }, [pokemons, setPokemonsArr]);

  const changeNameInput = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("adsaddas");
    setNameSearch(e.target.value);
    setPokemonsArr(
      pokemons.filter((p) => {
        return p.name.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1;
      })
    );
  };

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

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}>
        {pokemonsArr.map((pokemon) => (
          <OnePokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonCards;
