import React from "react";
import { useState } from "react";

const MyComponent = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [age, setAge] = useState("");

  const onInputChange = (event) => {
    setNom(event.target.nom);
    setPrenom(event.target.prenom);
    setAge(event.target.age);
  };

  return (
    <div>
      <input onChange={onInputChange} nom={nom} />
      <input onChange={onInputChange} prenom={prenom} />
      <input onChange={onInputChange} age={age} />
    </div>
  );
};

export default MyComponent;
