import React from "react";
import { Table } from "reactstrap";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { IItemBasket } from "@/store/slices/basketSlice";
import Increment from "./Increment";
import { useIncrement } from "@/context/IncrementContext";

function Basket() {
  const basketItems = useSelector(
    (state: RootState) => state.basket.basketItems
  );
  const basket = useSelector((state: RootState) => state.basket);

  // const basketSlice =

  return (
    <Table>
      <tbody>
        {basketItems.map((basketItem) => {
          return (
            <tr key={basketItem.id}>
              <td>
                {basketItem.name}
                <div>
                  {basketItem.modifierName} ({basketItem.modifierQta} *{" "}
                  {basketItem.price}.00)
                </div>
                {/* <Increment incNum={basketItem.quantity} /> */}
              </td>
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
