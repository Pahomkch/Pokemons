import React, { MouseEvent, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Button } from "@material-ui/core";
import { TPokemonAbility } from "../Types/Pokemon";
import { TPropsType } from "../Types/AbilityPage";

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  main: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  listElement: {
    listStyleType: "none",
    marginLeft: 15,
  },
  center: {
    display: "flex",
    flexDirection: "column",
  },
  textArea: {
    maxWidth: 400,
    padding: 10,
    textTransform: "capitalize",
  },
  ulMargin: {
    margin: 0,
  },
});

const AbilityPage: React.FC<TPropsType> = (props) => {
  const { getAbility } = props;
  const classes = useStyles();
  const history = useHistory();

  const { abilityNumber } = useParams<{ abilityNumber: string }>();
  const [ability, setAbility] = useState<TPokemonAbility>({} as TPokemonAbility);
  const [abilityDescr, setAbilityDescr] = useState("abilityDescr");

  useEffect(() => {
    getAbility(+abilityNumber).then((res) => {
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
    <div className={classes.main}>
      <Button fullWidth onClick={clickToBackButton} variant="contained" color="primary">
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
              Effect description: {abilityDescr}
            </Typography>

            <Typography variant="h6" color="textSecondary" component="span">
              Pokemons wich have that ability :{" "}
              <ul className={classes.ulMargin}>
                {ability.pokemon?.map((p) => (
                  <li key={p.pokemon.name.toString()} className={classes.listElement}>
                    {p.pokemon.name.toString()}
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

export default AbilityPage;
