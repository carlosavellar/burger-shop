import React from "react";
import { Table } from "reactstrap";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { IItemBasket } from "@/store/slices/basketSlice";

function Basket() {
  const basketItems = useSelector(
    (state: RootState) => state.basket.basketItems
  );
  const basket = useSelector((state: RootState) => state.basket);
  const calcTotal = (items: IItemBasket[]) => {
    // return items.reduce((acc: any, val: IItemBasket) => {
    //   debugger;
    //   console.log(acc.price, val.price);
    // }, 0);
  };

  calcTotal(basketItems);

  return (
    <Table>
      <tbody>
        {basketItems.map((basketItem) => {
          return (
            <tr key={basketItem.id}>
              <td>{basketItem.name}</td>
              <td>{basketItem.price}.00</td>
            </tr>
          );
        })}
        <tr>
          <td>Subtotal</td>
          <td>{basket.total},00</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>{basket.total},00</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default Basket;
