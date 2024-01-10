import React, { useEffect, useState } from "react";
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
  Table,
} from "reactstrap";
import PropTypes from "prop-types";
import { IBurger } from "@/interfaces/IBurger";
import { IDessert } from "@/interfaces/IDessert";
import { IDrink } from "@/interfaces/IDrink";

import "./ModalMealItem.scss";

type MealTypes = IBurger | IDrink | IDessert;
interface IModalMealItemProps {
  item: MealTypes;
}

const ModalMealItem: React.FC<IModalMealItemProps> = (
  props: IModalMealItemProps
) => {
  const { item } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const closeBtn = (
    <button className="close" onClick={toggle} type="button">
      &times;
    </button>
  );

  useEffect(() => {
    if (item && item.modifiers) {
      for (let mod of item.modifiers) {
        console.log(mod.name);
      }
    }
  }, [item]);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader
          toggle={toggle}
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
              <div>
                <CardSubtitle className="cardSubTitle">
                  Choose your size
                </CardSubtitle>
                <CardSubtitle> Select 1 option</CardSubtitle>
                <Table>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>John Doe</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            )}
            <Button className="btn-round">Add to Order ● </Button>
          </CardBody>
        </Card>
      </Modal>
    </div>
  );
};
export default ModalMealItem;
