import React, { MouseEvent, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { getPokemon } from "../api/api";
import { AppStateType } from "../redux/store";
import AbilityPokemon from "./AbilityPokemon";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { TPokemon } from "../Types/Pokemon";

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    minWidth: 400,
  },
  listElement: {
    listStyleType: "none",
  },
  center: {
    display: "flex",
    flexDirection: "column",
  },
  media: {
    height: 140,
    width: 120,
  },
  textArea: {
    padding: 0,
  },
  ulMargin: {
    margin: 0,
  },
});

type TMapStateToProps = {
  pokemonList: Array<TPokemon>;
};
type TMapDispatchToProps = {
  getPokemon: (id: number) => Promise<TPokemon>;
};

const PokemonPage: React.FC<PropsType> = (props) => {
  const history = useHistory();
  const classes = useStyles();

  //@ts-ignore
  const { id } = useParams();
  const [currentPokemon, setCurrentPokemon] = useState<TPokemon>(props.pokemonList[0]);

  const clickToMain = (e: MouseEvent<HTMLButtonElement>) => {
    history.push("/");
  };
  useEffect(() => {
    getPokemon(id).then((res) => {
      setCurrentPokemon(res);
    });
  }, [id]);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Button className={classes.root} onClick={clickToMain} variant="contained" color="primary">
        To main page
      </Button>

      <Card className={classes.root}>
        <CardActionArea className={classes.center}>
          <CardMedia
            className={classes.media}
            image={currentPokemon.sprites?.front_default}
            title={currentPokemon.name}
          />
          <CardContent className={classes.textArea}>
            <Typography gutterBottom variant="h3" component="h2">
              {currentPokemon.name}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              Id: {currentPokemon.id.toString()}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              Order: {currentPokemon.order.toString()}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              Is default: {currentPokemon.is_default.toString()}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              Pokemon types:{" "}
              <ul className={classes.ulMargin}>
                {currentPokemon.types.map((types) => {
                  return <li key={types.type.name}>{types.type.name}</li>;
                })}
              </ul>
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              Height: {currentPokemon.height.toString()}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              Weight: {currentPokemon.weight.toString()}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              Base experience: {currentPokemon.base_experience.toString()}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              Abilities:
              <ul className={classes.ulMargin}>
                {currentPokemon.abilities.map((abilities) => (
                  <li key={abilities.ability.name.toString()} className={classes.listElement}>
                    <AbilityPokemon abiliti={abilities.ability} />
                  </li>
                ))}
              </ul>
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              Forms: {currentPokemon.forms.map((form) => `${form.name} `)}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              Species: {currentPokemon.species.name}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              Stats:{" "}
              <ul className={classes.ulMargin}>
                {currentPokemon.stats.map((stats) => (
                  <li key={stats.stat.name} className={classes.listElement}>
                    {stats.stat.name} : {stats.base_stat}
                  </li>
                ))}
              </ul>
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              Types: {currentPokemon.types.map((types) => `${types.type.name} `)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

const mapStateToProps = (state: AppStateType): TMapStateToProps => ({
  pokemonList: state.pokemons.pokemonsList,
});

type TOwnProps = {};
type PropsType = TMapStateToProps & TMapDispatchToProps & TOwnProps;

export default connect<TMapStateToProps, TMapDispatchToProps, TOwnProps, AppStateType>(
  mapStateToProps,
  { getPokemon }
)(PokemonPage);
