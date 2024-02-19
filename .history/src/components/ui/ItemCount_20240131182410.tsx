import { RootState } from "@/store";
import React from "react";
import { useSelector } from "react-redux";

interface IItemCountFlag {
  id: number;
}

export const ItemCountFlag = (props: IItemCountFlag) => {
  const basketItems = useSelector((state: RootState) => state.basketItems);
  const { quantity } = props;
  return <div>{quantity}</div>;
};
