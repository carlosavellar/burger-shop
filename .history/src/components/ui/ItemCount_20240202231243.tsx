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

  const productIndex = basketItems.findIndex((item) => {
    return item.id === id;
  });

  console.log(basketItems[productIndex].quantity, "w");
  console.log(productIndex, "w");
  // if (!filteredProduct) {
  //   return <div>.</div>;
  // }

  return <div>{basketItems[productIndex].quantity}</div>;
};
