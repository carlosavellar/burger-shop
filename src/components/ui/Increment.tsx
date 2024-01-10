import React, { useState } from "react";

import "./Increment.scss";

const Increment = () => {
  const [countValue, setCountValue] = useState(0);

  const handleIncrement = () => {
    setCountValue(countValue + 1);
  };

  const handleDecrement = () => {
    setCountValue(countValue > 0 ? countValue - 1 : 0);
  };

  return (
    <div className="increment-controller">
      <button onClick={handleDecrement} className="dec">
        <span>_</span>
      </button>
      <p className="count-number">{countValue}</p>
      <button onClick={handleIncrement} className="inc">
        <span>+</span>+
      </button>
    </div>
  );
};

export default Increment;
