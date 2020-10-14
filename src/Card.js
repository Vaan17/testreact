import React from "react";

const Card = (props) => {
  return (
    <div
      style={{
        width: "150px",
        marginBottom: "5px",
        border: "solid",
        color: "blue",
      }}
    >
      Case Numéro : {props.number}, children : {props.children}
    </div>
  );
};

export default Card;
