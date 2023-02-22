import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    backgroundColor: "#e0e0e0",
  },
  media: {
    height: 140,
  },
  texts: {
    display: "flex",
    fontWeight: "bold",
    justifyContent: "space-between",
  },
});

export default function PokemonCard({ name, image, types }) {
  const classes = useStyles();
  const typesHandler = () => {
    if (types[1]) {
      let douType = types[0].type.name + " / " + types[1].type.name;
      return douType.toUpperCase();
    }
    let onType = types[0].type.name;
    return onType.toUpperCase();
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent className={classes.texts}>
          <Typography gutterBottom variant="BUTTON TEXT" component="h2">
            {name}
          </Typography>
        </CardContent>
        <CardMedia
          className={classes.media}
          image={image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Box className={classes.texts}>
            <Typography gutterBottom variant="BUTTON TEXT" component="h4">
              {`TYPE: ${typesHandler()}`}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
