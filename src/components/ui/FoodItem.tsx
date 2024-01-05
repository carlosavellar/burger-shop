import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardImg,
  CardBody,
  Card,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import PropTypes from "prop-types";
import { IBurger } from "@/interfaces/IBurger";
import { IDessert } from "@/interfaces/IDessert";
import { IDrink } from "@/interfaces/IDrink";

import "./FoodItem.scss";
interface IFoodItem {
  item: IBurger | IDrink | IDessert;
}

const FoodItem: React.FC<IFoodItem> = (props: IFoodItem) => {
  const { item } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const closeBtn = (
    <button className="close" onClick={toggle} type="button">
      &times;
    </button>
  );

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <img alt="Sample" src="https://picsum.photos/300/200" />

        <ModalHeader toggle={toggle} close={closeBtn}>
          {item.name}
        </ModalHeader>
        <Card
          style={{
            width: "18rem",
          }}
        >
          <CardImg
            top
            width="100%"
            src="your-image-url.jpg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">{item.name}</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card‘s content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </Modal>
    </div>
  );
};
export default FoodItem;
