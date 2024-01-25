import React, { useEffect, useState } from "react";
import "./Increment.scss";

interface IIncrement<T> {
  onIncrement: (value: T) => void;
  onHandleUpdatedProductQta: (id: number, num: number) => void;
  incNum: T;
  productId: number;
}

const Increment: React.FC<IIncrement<number>> = (props: IIncrement<number>) => {
  const { onIncrement, incNum, onHandleUpdatedProductQta, productId } = props;
  const [countValue, setCountValue] = useState<number>(incNum);

  useEffect(() => {
    setCountValue(incNum);
  }, [incNum]);

  const handleIncrement = () => {
    setCountValue((prevCount: number) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCountValue(countValue > 0 ? (prevCount: number) => prevCount - 1 : 0);
  };

  useEffect(() => {
    onHandleUpdatedProductQta(productId, countValue);
  }, [countValue]);

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
