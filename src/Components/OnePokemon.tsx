import React from 'react'
import { NavLink } from 'react-router-dom'
import { TPokemon } from '../api/api'


import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

type PropsType = {
    pokemon: TPokemon
}
const useStyles = makeStyles({
    root: {
        width: 190,

        margin: 5
    },
    media: {
        height: 100,
        width: 190,
        

    }
});

const OnePokemon: React.FC<PropsType> = (props) => {
    const { pokemon } = props
    const classes = useStyles();

    return (
        <div >
            <NavLink to={`/${pokemon.id}`}>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={pokemon.sprites.front_default}
                            title={pokemon.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h3">
                                {pokemon.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                <p>ID: {pokemon.id}</p>
                                <p>ORDER: {pokemon.order}</p>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </NavLink>
        </div>
    )
}

export default OnePokemon
