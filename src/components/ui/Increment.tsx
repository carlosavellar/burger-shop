import React, { useState } from "react";

import "./Increment.scss";

interface IIncrement {
  onIncrement: (value: number) => void;
  incNum: number;
}

const Increment = (props: IIncrement) => {
  const { onIncrement, incNum } = props;
  const [countValue, setCountValue] = useState(0);

  const handleIncrement = () => {
    onIncrement(incNum + 1);
  };

  const handleDecrement = () => {
    onIncrement(incNum > 0 ? incNum - 1 : 0);
  };

  return (
    <div className="increment-controller">
      <button onClick={handleDecrement} className="dec">
        <span>_</span>
      </button>
      <p className="count-number">{incNum}</p>
      <button onClick={handleIncrement} className="inc">
        <span>+</span>+
      </button>
    </div>
  );
};

export default Increment;
