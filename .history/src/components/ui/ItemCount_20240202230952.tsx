import { RootState } from "@/store";
import React from "react";
import { useSelector } from "react-redux";

interface IItemCountFlag {
  id: number;
}

export const ItemCountFlag = (props: IItemCountFlag) => {
  const { id } = props;
  console.log(id, "itemCount");
  const basketItems = useSelector(
    (state: RootState) => state.basket.basketItems
  );

  const filteredProduct = basketItems.find((item) => {
    item.id === id;
  });

  if (!filteredProduct) {
    return <div>.</div>;
  }

  console.log(filteredProduct, "w");

  return <div>{filteredProduct.quantity}</div>;
};
