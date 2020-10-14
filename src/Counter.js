import React, { useState } from "react";
import Button from "@material-ui/core/Button";

function Counter({ initialCount }) {
  const [number, setNumber] = useState(0);

  return (
    <div>
      <Button onClick={() => setNumber(number + 1)}>Bouton 1</Button>
      Total : {number}
    </div>
  );
}

export default Counter;
