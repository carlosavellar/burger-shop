import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { IItemBasket, updateBaskedProduct } from "@/store/slices/basketSlice";
import Increment from "./Increment";
import { useIncrement } from "@/context/IncrementContext";
import { useDispatch } from "react-redux";
import IncrementAtBasket from "./IncrementAtBasket";
import { MealTypes } from "@/interfaces/CardTypes";
import IBurger from "@/interfaces/IBurger";

interface Basket {
  prodDefaultValue: number;
  item: any;
}

const Basket = (props: Basket) => {
  const { sections, loading, error } = useSelector(
    (state: RootState) => state.menuItems
  );
  const { prodDefaultValue, item } = props;
  const dispatch = useDispatch();
  const basketItems = useSelector(
    (state: RootState) => state.basket.basketItems
  );
  const basket = useSelector((state: RootState) => state.basket);
  const [updatedQuantity, setupUpdatedQuantity] = useState<number>(1);

  const handleUpdatedProductQta = (id: number, incrementNum: number) => {
    const updatedItem = basketItems.find((basket) => {
      return basket.id === id;
    });
    setupUpdatedQuantity(incrementNum);
    if (updatedItem) {
      let newP = {
        ...updatedItem,
        updatedPrice: incrementNum * updatedItem.price,
        quantity: incrementNum,
      };
      dispatch(updateBaskedProduct(newP));
    }
  };

  useEffect(() => {
    console.log(basketItems, updatedQuantity);
  }, [basketItems, updatedQuantity, item]);

  return (
    <Table>
      <tbody>
        {basketItems.map((basketItem) => {
          return (
            <tr key={basketItem.id}>
              <td>
                <div>
                  {basketItem.name}
                  <div>
                    {basketItem.modifierName} ({basketItem.quantity} *{" "}
                    {basketItem.price}.00)
                  </div>
                  <IncrementAtBasket
                    productId={basketItem.id}
                    incNum={basketItem.quantity}
                    onIncrement={(value: number) => {
                      setupUpdatedQuantity((value * item.price) as any);
                    }}
                    onHandleUpdatedProductQta={handleUpdatedProductQta}
                  />
                </div>
              </td>
              <td>
                <div>{basketItem.updatedPrice}.00</div>
              </td>
              <td>
                <div>{basketItem.quantity}</div>
              </td>
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
};

export default Basket;
