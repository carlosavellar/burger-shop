import { RootState } from "@/store";
import React from "react";
import { useSelector } from "react-redux";
import "./ItemCount.scss";

interface IItemCountFlag {
  id: number;
}

export const ItemCountFlag = (props: IItemCountFlag) => {
  const { id } = props;
  const basketItems = useSelector(
    (state: RootState) => state.basket.basketItems
  );
  console.log(id, "itemCount");

  const filteredProduct = basketItems.find((item) => {
    return item.id === id;
  });

  if (!filteredProduct) {
    return <></>;
  }

  return <div>{filteredProduct.quantity}</div>;
};
