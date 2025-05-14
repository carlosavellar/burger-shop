import React, { useEffect, useState } from "react";
import { Table } from "reactstrap";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { IItemBasket, updateBaskedProduct, addTotal } from "@/store/slices/basketSlice";
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
  const [totalBasket, setTotalBasket] = useState<number>(0);



  useEffect(() => {
    console.log("Total:", basket.total)
    setBasketLocalItems(basketItems);
  }, [basketItems, basketLocalItems]);

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

  const updateTotal = (objArr: Array<IItemBasket>) => {
    let total = 0;
    for (let item of objArr) {
      console.log(item)
      let totalAcc = item.price * item.quantity
      total += totalAcc
    }
    console.log(" ⭐", total)
    setTotalBasket(total)
  }

  useEffect(() => {
    updateTotal(basketItems)
  }, [updateTotal]);

  return (
    <>
      <h4>Basket</h4>
      {basket.total > 0 ? (
        <Table>
          <tbody>
            {basketLocalItems.map((basketItem) => {
              return (
                <tr key={basketItem.id}>
                  <td className="col-8">
                    <div className={basketItem.name}>
                      <div>
                        {basketItem.name}
                        {basketItem.modifierName}
                        {/* <span>
                          ({basketItem.quantity} *{" "}
                          {basketItem.price}.00)
                        </span> */}
                      </div>

                    </div>
                  </td>
                  <td><IncrementAtBasket
                    style={{ border: "10px solid red" }}
                    productId={basketItem.id}
                    incNum={basketItem.quantity}
                    onIncrement={(value: number) => {
                      setupUpdatedQuantity(
                        (value * basketItem.price) as any
                      );
                    }}
                    onHandleUpdatedProductQta={handleUpdatedProductQta}
                  /></td>
                  <td className="text-end">
                    <div className="text-end">{basketItem.updatedPrice}.00</div>
                  </td>
                  {/* <td>
                    <div>{basketItem.quantity}</div>
                  </td> */}
                </tr>
              );
            })}
            <tr>
              <td>Total</td>
              <td>{totalBasket},00</td>
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
