import React, { useState } from "react";
import "./StateTutorial.css";

const StateTutorial = () => {
  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter">
      {count}
      <button onClick={clickHandler}>+</button>
    </div>
  );
};

export default StateTutorial;
