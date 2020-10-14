import React from "react";
import MyComponent from "./MyComponent";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar user={8} />
      <h2>Vous etes sur la page : Home</h2>
      <MyComponent></MyComponent>
    </div>
  );
};

export default Home;
