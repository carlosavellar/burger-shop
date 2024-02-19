import React from "react";
import { connect } from "react-redux";

interface IItemCountFlag {
  quantity: number;
  id: number;
}

export const ItemCountFlag = (props: IItemCountFlag) => {
  const { quantity } = props;
  return <div>{quantity}</div>;
};
