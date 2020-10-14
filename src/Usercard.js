import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const Usercard = (props) => {
  return (
    <div style={{ margin: 15 }}>
      <Card>
        <CardContent>
          <h2>Nom : {props.user.nom}</h2>
          <h3>
            Prénom : {props.user.prenom}
            <br></br>
            Age : {props.user.age}
          </h3>
        </CardContent>
        <CardActions>
          <Button size="medium">Envoyer</Button>
        </CardActions>
        <CardActions>
          <Button size="medium">
            Supprimer
            <DeleteForeverIcon />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Usercard;
