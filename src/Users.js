import React, { useState } from "react";
import Navbar from "./Navbar";
import Usercard from "./components/Usercard";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button, Card } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const Users = () => {
  const initialUsers = [
    {
      nom: "Fischer",
      prenom: "Amaury",
      date: "??",
    },
    {
      nom: "Aimé",
      prenom: "Melvin",
      date: "18ans",
    },
    {
      nom: "Heymes",
      prenom: "Paul",
      date: "??",
    },
    {
      nom: "Aimé",
      prenom: "Ethan",
      date: "13ans",
    },
    {
      nom: "Aimé",
      prenom: "Lenny",
      date: "10ans",
    },
    {
      nom: "Aimé",
      prenom: "Xavier",
      date: "48ans",
    },
    {
      nom: "Artero-Saez",
      prenom: "Theo",
      date: "17ans",
    },
    {
      nom: "Brevet",
      prenom: "Steve",
      date: "18ans",
    },
    {
      nom: "Fortes-Vasconcelos",
      prenom: "Solano",
      date: "18ans",
    },
    {
      nom: "Haicault",
      prenom: "Mathieu",
      date: "18ans",
    },
  ];

  const [users, setUsers] = useState(initialUsers);
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [date, setDate] = useState("");

  const onInputChangeNom = (event) => {
    setNom(event.target.value);
  };

  const onInputChangePrenom = (event) => {
    setPrenom(event.target.value);
  };

  const handleChangeDate = (event) => {
    setDate(event.target.value);
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
      date: date,
    };

    setUsers([...users, newUser]);

    setNom("");
    setPrenom("");
    setDate("");

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
            placeholder="Entrez un Prénom"
            multiline
            value={prenom}
          />
        </div>
        <div>
          <TextField
            label="Date de naissance"
            type="date"
            onChange={handleChangeDate}
            InputLabelProps={{
              shrink: true,
            }}
            value={date}
          />
        </div>
      </Card>
      <Button onClick={delectUsers}>Supprimer tout les utilisateurs</Button>
      <Button onClick={resetUsers}>Supprimer les nouveaux utilisateurs</Button>
      <Button onClick={addUser}>Ajouter un utilisateur</Button>
      <ul style={{ display: "flex", flexWrap: "wrap" }}>{listItems}</ul>
      <ToastContainer />
    </div>
  );
};

export default Users;
