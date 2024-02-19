import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateItem } from "@/store/slices/basketSlice";

import "./Increment.scss";
import { RootState } from "@/store";

interface IIncrement<T> {
  onIncrement: (value: T) => void;
  incNum: T;
  id: number;
}

const Increment: React.FC<IIncrement<number>> = (props: IIncrement<number>) => {
  const dispatch = useDispatch();
  const { onIncrement, incNum, id } = props;
  const [countValue, setCountValue] = useState(0);
  const { basketItems } = useSelector((state: RootState) => state.basket);

  const handleIncrement = () => {
    // dispatch(updateItem({ id, count: incNum }));
    onIncrement(incNum + 1);
  };

  const handleDecrement = () => {
    // onIncrement(incNum > 0 ? incNum - 1 : 0);
  };

  useEffect(() => {
    console.log(basketItems);
  }, [basketItems]);

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
