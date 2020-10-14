import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Navbar = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around" }}>
      <Link to="/">
        <Button>Home</Button>
      </Link>

      <Link to="/Users">
        <Button>Users</Button>
      </Link>

      <Link to="/Meteo">
        <Button>Meteo</Button>
      </Link>

      <Link to="/Mappemonde">
        <Button>Mappemonde</Button>
      </Link>
    </div>
  );
};

export default Navbar;
