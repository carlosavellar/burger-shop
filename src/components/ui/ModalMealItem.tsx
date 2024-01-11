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
import Increment from "./Increment";

type MealTypes = IBurger | IDrink | IDessert;
interface IModalMealItemProps {
  item: MealTypes;
  itemId: number;
  closeModal: () => void;
  onOpenCart: () => void;
}

const ModalMealItem: React.FC<IModalMealItemProps> = (
  props: IModalMealItemProps
) => {
  const { item, itemId, closeModal, onOpenCart } = props;
  const [modal, setModal] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggle = () => closeModal();

  const closeBtn = (
    <button className="close" onClick={toggle} type="button">
      &times;
    </button>
  );

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(event.target.value as any);
  };

  const HandlerModifiers = React.memo(() => {
    if (item && item.modifiers) {
      const modifiersArr: Array<object[]> = [];
      for (let mod of item.modifiers) {
        modifiersArr.push(mod.items as any);
      }
      let mod2Item: any = [];
      for (let modItem of modifiersArr) {
        mod2Item = modItem;
      }
      return mod2Item.map((mod: any) => {
        return (
          <FormGroup className="container-flex radio-form">
             
            <label className="label-modifier" htmlFor={mod.id}>
              {mod.name}
              <span>R$ {mod.price.toFixed(2)}</span>
            </label>
            <input
              type="radio"
              id={mod.id}
              name="modifier"
              value={mod.name.trim()}
            />
          </FormGroup>
        );
      });
    }
  });

  return (
    <Modal
      isOpen={itemId !== null && itemId === item.id ? true : false}
      toggle={toggle}
    >
      <ModalHeader
        onClick={closeModal}
        close={closeBtn}
        className="header-close-button"
      ></ModalHeader>
      {item?.images && (
        <img
          alt={item?.images ? item.name : "No image"}
          src={item.images[0].image}
        />
      )}

      <ModalHeader toggle={toggle} close={closeBtn} className="header-title">
        {item.name}
      </ModalHeader>
      <Card
        style={{
          width: "18rem",
        }}
      >
        <CardBody>
          <CardText>{item.description}</CardText>

          {item.hasOwnProperty("modifiers") && (
            <>
              <CardSubtitle className="cardSubTitle">
                Choose your size
              </CardSubtitle>
              <CardSubtitle> Select 1 option</CardSubtitle>
              <Container fluid>
                <Row>
                  <Col md="12 p-0">
                    <Form className="mod-form">
                      <HandlerModifiers />
                    </Form>
                  </Col>
                </Row>
              </Container>
            </>
          )}
          <Increment />
          <Button className="btn-round button-buy" onClick={onOpenCart}>
            Add to Order ●{" "}
          </Button>
        </CardBody>
      </Card>
    </Modal>
  );
};
export default ModalMealItem;
