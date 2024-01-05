import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CardImg,
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
        <ModalBody>
          {item.name}
          {/* <CardImg
            top
            width="100px"
            src={item.images[0].image}
            alt="Card image cap"
          />  */}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default FoodItem;
