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
import { IItemBasket } from "@/store/slices/basketSlice";

import "./ModalMealItem.scss";
import Increment from "./Increment";
import { addToBasket, addTotal } from "@/store/slices/basketSlice";
import { useDispatch } from "react-redux";

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
  const dispatch = useDispatch();
  const { item, itemId, closeModal, onOpenCart } = props;
  const toggle = () => closeModal();

  const [productState, setProductState] = useState<IItemBasket>({
    id: 0,
    name: "",
    quantity: 0,
    price: 0,
  });
  const [incrementNum, setIncrementNum] = useState<number>(0);
  const [priceState, setPriceState] = useState<number>(0);

  const [selectedModValue, setSelectedModValue] = useState<number>(0);

  const closeBtn = (
    <button className="close" onClick={toggle} type="button">
      &times;
    </button>
  );

  const handleIncrement = (numVal: number) => {
    setIncrementNum(numVal);
    handlerAddItemProduct();
  };

  useEffect(() => {
    setPriceState(incrementNum * item.price);
  }, [item, incrementNum]);

  const handlerAddItemProduct = () => {
    setProductState({
      id: item.id,
      name: item.name,
      quantity: incrementNum,
      price: incrementNum * item.price,
    });
  };

  useEffect(() => {
    handlerAddItemProduct();
  }, [incrementNum]);

  const handleAddToCart = () => {
    dispatch(addToBasket(productState));
  };

  const HandlerModifiers = React.memo(() => {
    if (item && item.modifiers) {
      const modifiersArr: Array<object[]> = [];
      for (let mod of item.modifiers) modifiersArr.push(mod.items as any);
      let mod2Item: any = [];
      for (let modItem of modifiersArr) mod2Item = modItem;
      return mod2Item.map((mod: any) => {
        console.log(Array.isArray(mod));
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
              value={mod.price}
              onChange={(e) => {
                console.log(mod.name.trim());
                setSelectedModValue(e.target.value as any);
              }}
            />
          </FormGroup>
        );
      });
    }
  });

  const handleSetModifier = (modVal: number) => {
    setSelectedModValue(modVal);
  };

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
          <Increment onIncrement={handleIncrement} incNum={incrementNum} />
          <Button
            className="btn-round button-buy"
            disabled={!incrementNum}
            onClick={() => {
              onOpenCart();
              handleAddToCart();
            }}
          >
            Add to Order ● R$ {priceState && priceState},00
          </Button>
        </CardBody>
      </Card>
    </Modal>
  );
};
export default ModalMealItem;
