import React, { useState } from "react";
import Navbar from "./Navbar";
import Usercard from "./components/Usercard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Card } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const Users = () => {
  const initialUsers = [
    {
      nom: "Fischer",
      prenom: "Amaury",
      age: "??",
    },
    {
      nom: "Aimé",
      prenom: "Melvin",
      age: "18ans",
    },
    {
      nom: "Heymes",
      prenom: "Paul",
      age: "??",
    },
    {
      nom: "Aimé",
      prenom: "Ethan",
      age: "13ans",
    },
    {
      nom: "Aimé",
      prenom: "Lenny",
      age: "10ans",
    },
    {
      nom: "Aimé",
      prenom: "Xavier",
      age: "48ans",
    },
    {
      nom: "Artero-Saez",
      prenom: "Theo",
      age: "17ans",
    },
    {
      nom: "Brevet",
      prenom: "Steve",
      age: "18ans",
    },
    {
      nom: "Fortes-Vasconcelos",
      prenom: "Solano",
      age: "18ans",
    },
    {
      nom: "Haicault",
      prenom: "Mathieu",
      age: "18ans",
    },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [age, setAge] = useState("");

  const onInputChangeNom = (event) => {
    setNom(event.target.value);
  };

  const onInputChangePrenom = (event) => {
    setPrenom(event.target.value);
  };

  const onInputChangeAge = (event) => {
    setAge(event.target.value);
  };

  const listItems = users.map((user) => <Usercard user={user} />);

  const delectUsers = () => {
    setUsers([]);
  };

  const resetUsers = () => {
    setUsers(initialUsers);

    toast.error("Vous venez de reinitialiser les utilisateurs");
  };

  const addUser = () => {
    const newUser = {
      nom: nom,
      prenom: prenom,
      age: age,
    };

    setUsers([...users, newUser]);

    setNom("");
    setPrenom("");
    setAge("");

    toast.success("Félicitation, vous avez ajouté un utilisateur !");
  };

  return (
    <div>
      <Navbar />
      <h2>Vous etes sur la page : Users</h2>
      <Card style={{ margin: "2em", padding: "2em" }}>
        <div>
          <TextField
            label="Nom :"
            onChange={onInputChangeNom}
            placeholder="Entrez un Nom"
            multiline
            value={nom}
          />
        </div>
        <div>
          <TextField
            label="Prénom :"
            onChange={onInputChangePrenom}
            placeholder="Entrez un Prénom Valide"
            multiline
            value={prenom}
          />
        </div>
        <div>
          <TextField
            label="Age :"
            onChange={onInputChangeAge}
            placeholder="Entrez un Age"
            multiline
            value={age}
          />
        </div>
      </Card>
      <Button onClick={delectUsers}>Supprimer tout les Utilisateurs</Button>
      <Button onClick={resetUsers}>Supprimer les nouveaux Utilisateurs</Button>
      <Button onClick={addUser}>Ajouter un utilisateur</Button>
      <ul style={{ display: "flex", flexWrap: "wrap" }}>{listItems}</ul>
      <ToastContainer />
    </div>
  );
};

export default Users;
