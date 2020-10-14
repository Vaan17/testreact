import React from "react";

const Card = (props) => {
  return (
    <div
      style={{
        width: "150px",
        marginBottom: "3px",
        border: "solid",
        color: "yellow",
      }}
    >
      Case Numéro : {props.number}, children : {props.children}
    </div>
  );
};

export default Card;
