import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

const Formulaire = (props) => {
  return (
    <div style={{ margin: 15 }}>
      <Card>
        <CardContent>
          <h2>Nom : {props.form.nom}</h2>
          <h3>
            Prénom : {props.form.prenom}
            <br></br>
            Age : {props.form.age}
          </h3>
        </CardContent>
        <CardActions>
          <Button size="medium">Valider</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Formulaire;
