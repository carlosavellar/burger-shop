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
  const { prodDefaultValue, item } = props;
  const dispatch = useDispatch();
  const basketItems = useSelector(
    (state: RootState) => state.basket.basketItems
  );
  const basket = useSelector((state: RootState) => state.basket);
  const [updatedProdPrice, setUpdatedProdPrice] = useState<number>(0);
  const [updatedProduct, setUpdatedProduct] = useState<IItemBasket>({
    id: 0,
    name: "",
    quantity: 0,
    modifierName: "",
    modifierQta: 0,
    price: 0,
  });

  useEffect(() => {
    // const basketCurrentItem = basketItems.find((basketItem) => {
    //   return basketItem.id === item.id;
    // });
    // if (basketCurrentItem?.price) {
    //   console.log("No object property");
    // }
    // setUpdatedProduct(basketCurrentItem as IItemBasket);
  }, [updatedProdPrice]);

  // useEffect(() => {
  //   dispatch(updateBaskedProduct(updatedProduct as IItemBasket));
  // }, [updatedProduct]);

  return (
    <Table>
      <tbody>
        {/* {basketItems.map((basketItem) => {
          return (
            <tr key={Math.random() * 0.3}>
              <td>
                {basketItem.name}
                <div>
                  {basketItem.modifierName} ({basketItem.quantity} *{" "}
                  {item.price}.00)
                </div>
                <IncrementAtBasket
                  productId={basketItem.id}
                  incNum={basketItem.quantity}
                  onIncrement={(value: number) => {
                    setUpdatedProdPrice(value * item.price);
                  }}
                />
              </td>

              <td>
                <div>
                  {basketItem.quantity} {prodDefaultValue}
                </div>
                {basketItem.quantity * item.price}.00
              </td>
            </tr>
          );
        })} */}
        {basketItems.map((basketItem) => {
          return (
            <tr key={basketItem.id}>
              <td>
                <div>
                  {basketItem.name}
                  <div>
                    {basketItem.modifierName} ({basketItem.quantity} *{" "}
                    {item.price}.00)
                  </div>
                  <IncrementAtBasket
                    productId={basketItem.id}
                    incNum={basketItem.quantity}
                    onIncrement={(value: number) => {
                      setUpdatedProduct((value * item.price) as any);
                    }}
                  />
                </div>
              </td>
              <td>
                <div>{basketItem.price}.00</div>
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
