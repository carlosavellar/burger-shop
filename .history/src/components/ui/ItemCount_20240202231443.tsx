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
    return item.id === id;
  });

  console.log(filteredProduct, "w");
  if (!filteredProduct) {
    return <div>.</div>;
  }

  return <div>{filteredProduct.quantity}</div>;
};
