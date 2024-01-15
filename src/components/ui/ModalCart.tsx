import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  CardBody,
  Card,
  CardSubtitle,
  CardText,
  Table,
  Input,
  FormGroup,
  Label,
  Container,
  Row,
  Form,
  Col,
} from "reactstrap";
import { IBurger } from "@/interfaces/IBurger";
import { IDessert } from "@/interfaces/IDessert";
import { IDrink } from "@/interfaces/IDrink";

import "./ModalMealItem.scss";
import Basket from "./Basket";
import { useSelector, useDispatch } from "react-redux";
import { fetchBasketSuccess } from "@/store/slices/basketSlice";
import { RootState } from "@/store";

type MealTypes = IBurger | IDrink | IDessert;
interface IModalMealItemProps {
  closeModal: () => void;
  isCart: boolean;
}

const ModalCart: React.FC<IModalMealItemProps> = (
  props: IModalMealItemProps
) => {
  const { closeModal, isCart: cartIsOpen } = props;
  const toggle = () => closeModal();
  const dispatch = useDispatch();
  const { basketItems } = useSelector((state: RootState) => state.basket);
  const { basket } = useSelector((state: RootState) => state);

  const closeBtn = (
    <button className="close" onClick={toggle} type="button">
      &times;
    </button>
  );

  useEffect(() => {
    // console.log(basketItems);
    // console.log(basket, "__+_");
  }, [basketItems, basket]);

  const handleAddToBasket = () => {
    // dispatch(fetchBasketSuccess());
  };

  return (
    <Modal isOpen={cartIsOpen} toggle={toggle}>
      <ModalHeader
        onClick={closeModal}
        close={closeBtn}
        className="header-close-button"
      ></ModalHeader>

      <ModalHeader toggle={toggle} close={closeBtn} className="header-title">
        Basket
      </ModalHeader>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <CardBody>
          <Basket />
          <Button className="btn-round button-buy">Checkout now</Button>
        </CardBody>
      </Card>
    </Modal>
  );
};
export default ModalCart;
