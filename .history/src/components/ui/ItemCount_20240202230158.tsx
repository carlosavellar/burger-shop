import { RootState } from "@/store";
import React from "react";
import { useSelector } from "react-redux";

interface IItemCountFlag {
  id: number;
}

export const ItemCountFlag = (props: IItemCountFlag) => {
  const { id } = props;
  console.assert(id, "itemCount");
  const basketItems = useSelector(
    (state: RootState) => state.basket.basketItems
  );

  const filteredProduct = basketItems.find((item) => {
    debugger;
    item.id === id;
  });

  if (!filteredProduct) {
    return <div>.</div>;
  }

  return <div>{filteredProduct.quantity}</div>;
};
