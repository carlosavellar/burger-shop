import React, { ChangeEvent, useCallback, useEffect, useState } from "react";
import { Button, Modal, ModalHeader, CardBody, Card } from "reactstrap";
import { IBurger } from "@/interfaces/IBurger";
import { IDessert } from "@/interfaces/IDessert";
import { IDrink } from "@/interfaces/IDrink";

import "./ModalMealItem.scss";
import Basket from "./Basket";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store";

type MealTypes = IBurger | IDrink | IDessert;
interface IModalMealItemProps {
  closeModal: () => void;
  isCart: boolean;
  prodDefaultValue: number;
  item: MealTypes;
}

const ModalCart: React.FC<IModalMealItemProps> = (
  props: IModalMealItemProps
) => {
  const { closeModal, isCart: cartIsOpen, prodDefaultValue, item } = props;
  const toggle = () => closeModal();

  const closeBtn = (
    <button className="close" onClick={toggle} type="button">
      &times;
    </button>
  );

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
          <Basket prodDefaultValue={prodDefaultValue} item={item} />
          <Button className="btn-round button-buy">Checkout now</Button>
        </CardBody>
      </Card>
    </Modal>
  );
};
export default ModalCart;
