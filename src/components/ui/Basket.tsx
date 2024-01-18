import React from "react";
import { Table } from "reactstrap";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { IItemBasket } from "@/store/slices/basketSlice";
import Increment from "./Increment";
import { useIncrement } from "@/context/IncrementContext";
import { useDispatch } from "react-redux";
import IncrementAtBasket from "./IncrementAtBasket";

function Basket() {
  const dispatch = useDispatch();
  const basketItems = useSelector(
    (state: RootState) => state.basket.basketItems
  );
  const basket = useSelector((state: RootState) => state.basket);

  const handleIncrement = () => {};

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
                <IncrementAtBasket
                  incNum={basketItem.quantity}
                  onIncrement={(value: number) =>
                    console.log(value, "Pietra e Deus")
                  }
                />
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
