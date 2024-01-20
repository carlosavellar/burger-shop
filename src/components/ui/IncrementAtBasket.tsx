import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./Increment.scss";
import { updateBaskedProduct } from "@/store/slices/basketSlice";

interface IIncrement<T> {
  onIncrement: (value: T) => void;
  incNum: T;
  productId: number;
}

const Increment: React.FC<IIncrement<number>> = (props: IIncrement<number>) => {
  const dispatch = useDispatch();
  const { onIncrement, incNum, productId } = props;
  const [countValue, setCountValue] = useState<number>(0);

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
    onIncrement(countValue);
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
