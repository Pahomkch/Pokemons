import React, { MouseEvent, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { TPokemonAbility } from "../Types/Pokemon";

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
  textArea: {
    padding: 0,
  },
  ulMargin: {
    margin: 0,
  },
});

type PropsType = {
  getAbility: (id: number) => Promise<TPokemonAbility>;
};

const AbilitiPage: React.FC<PropsType> = (props) => {
  const { getAbility } = props;
  const classes = useStyles();
  const history = useHistory();
  //@ts-ignore
  const { abilityNumber } = useParams();
  const [ability, setAbility] = useState<TPokemonAbility>({
    id: 1,
    name: "stench",
    is_main_series: true,
    generation: {
      name: "generation-iii",
      url: "https://pokeapi.co/api/v2/generation/3/",
    },
    names: [
      {
        name: "Stench",
        language: {
          name: "en",
          url: "https://pokeapi.co/api/v2/language/9/",
        },
      },
    ],
    effect_entries: [
      {
        effect:
          "This Pokémon's damaging moves have a 10% chance to make the target [flinch]{mechanic:flinch} with each hit if they do not already cause flinching as a secondary effect.\n\nThis ability does not stack with a held item.\n\nOverworld: The wild encounter rate is halved while this Pokémon is first in the party.",
        short_effect:
          "Has a 10% chance of making target Pokémon [flinch]{mechanic:flinch} with each hit.",
        language: {
          name: "en",
          url: "https://pokeapi.co/api/v2/language/9/",
        },
      },
    ],
    effect_changes: [
      {
        version_group: {
          name: "black-white",
          url: "https://pokeapi.co/api/v2/version-group/11/",
        },
        effect_entries: [
          {
            effect: "Has no effect in battle.",
            language: {
              name: "en",
              url: "https://pokeapi.co/api/v2/language/9/",
            },
          },
        ],
      },
    ],
    flavor_text_entries: [
      {
        flavor_text: "è‡­ãã¦ã€€ç›¸æ‰‹ãŒ\nã²ã‚‹ã‚€ã€€ã“ã¨ãŒã‚ã‚‹ã€‚",
        language: {
          name: "ja-kanji",
          url: "https://pokeapi.co/api/v2/language/11/",
        },
        version_group: {
          name: "x-y",
          url: "https://pokeapi.co/api/v2/version-group/15/",
        },
      },
    ],
    pokemon: [
      {
        is_hidden: true,
        slot: 3,
        pokemon: {
          name: "gloom",
          url: "https://pokeapi.co/api/v2/pokemon/44/",
        },
      },
    ],
  });

  const [abilityDescr, setAbilityDescr] = useState("initialState");

  console.log(ability.effect_changes);

  useEffect(() => {
    getAbility(abilityNumber).then((res) => {
      setAbility(res);
      res.effect_entries.forEach((effect, idx, arr) => {
        if (effect.language.name === "en") {
          setAbilityDescr(arr[idx].short_effect);
        }
      });
    });
  }, [abilityNumber, getAbility]);

  const clickToBackButton = (e: MouseEvent<HTMLButtonElement>) => {
    history.goBack();
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <Button
        className={classes.root}
        onClick={clickToBackButton}
        variant="contained"
        color="primary">
        Back
      </Button>
      <Card className={classes.root}>
        <CardActionArea className={classes.center}>
          <CardContent className={classes.textArea}>
            <Typography gutterBottom variant="h3" component="h2">
              {ability.name}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              Id: {ability.id}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              Effect entries: {abilityDescr}
            </Typography>

            <Typography variant="h6" color="textSecondary" component="p">
              Pokemon:{" "}
              <ul className={classes.ulMargin}>
                {ability.pokemon.map((poke) => (
                  <li key={poke.pokemon.name.toString()} className={classes.listElement}>
                    {poke.pokemon.name.toString()}
                  </li>
                ))}
              </ul>
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              Languages:{" "}
              <ul className={classes.ulMargin}>
                {ability.names.map((abilities) => (
                  <li key={abilities.name.toString()} className={classes.listElement}>
                    {abilities.name.toString()}
                  </li>
                ))}
              </ul>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default AbilitiPage;
