import React, { ChangeEvent, useEffect, useState } from "react";
import OnePokemon from "./OnePokemon";

import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import { TPokemon } from "../Types/Pokemon";
import { TPropsType } from "../Types/PokemonCards";

const useStyles = makeStyles((theme) => ({
  search: {
    margin: "0",
    width: "100%",
  },
  pokemonsCard: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
}));

const PokemonCards: React.FC<TPropsType> = (props) => {
  const pokemons = props.pokemons;
  const classes = useStyles();
  const [pokemonsArr, setPokemonsArr] = useState<TPokemon[]>(pokemons);
  const [nameSearch, setNameSearch] = useState("");

  useEffect(() => {
    setPokemonsArr(pokemons);
  }, [pokemons, setPokemonsArr]);

  const changeNameInput = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    setNameSearch(input);
    setPokemonsArr(
      pokemons.filter((p) => {
        return p.name.toLowerCase().indexOf(input.toLowerCase()) !== -1;
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

      <div className={classes.pokemonsCard}>
        {pokemonsArr.map((pokemon) => (
          <OnePokemon key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default PokemonCards;
