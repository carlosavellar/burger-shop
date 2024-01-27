import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { IItemBasket, updateBaskedProduct } from "@/store/slices/basketSlice";
import { useDispatch } from "react-redux";
import IncrementAtBasket from "./IncrementAtBasket";
import "./Basket.scss";

const Basket = () => {
  const dispatch = useDispatch();
  const basketItems = useSelector(
    (state: RootState) => state.basket.basketItems
  );
  const basket = useSelector((state: RootState) => state.basket);
  const [updatedQuantity, setupUpdatedQuantity] = useState<number>(1);
  const [basketLocalItems, setBasketLocalItems] = useState<IItemBasket[]>([]);

  useEffect(() => {
    setBasketLocalItems(basketItems);
  }, [basketItems]);

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

  return (
    <>
      <h4>Basket</h4>
      {basket.total > 0 ? (
        <Table>
          <tbody>
            {basketLocalItems.map((basketItem) => {
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
                          setupUpdatedQuantity(
                            (value * basketItem.price) as any
                          );
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
      ) : (
        <p>Your basket is empty</p>
      )}
    </>
  );
};

export default Basket;
