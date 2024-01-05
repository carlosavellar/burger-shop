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
      <Modal isOpen={modal} toggle={toggle} className={"d"}>
        <ModalHeader toggle={toggle} close={closeBtn}>
          {item.name}
        </ModalHeader>
        <Card
          style={{
            width: "18rem",
          }}
        >
          <img alt="Sample" src="https://picsum.photos/300/200" />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle className="mb-2 text-muted" tag="h6">
              Card subtitle
            </CardSubtitle>
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
