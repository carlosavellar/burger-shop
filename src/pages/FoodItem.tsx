import React, { Fragment, useEffect, useState } from "react";
import {
  Badge,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import { useParams } from "react-router-dom";

import { RootState } from "@/store";
import { IMenuItems, initialState } from "@/store/slices/menuSlice";
import NavMenu from "../components/ui/NavMenu";

import "./Information.scss";
import Header from "../components/ui/Header";
import { useSelector } from "react-redux";

export default function FoodItem() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loadedMenu, setLoadedMenu] = useState<IMenuItems>(initialState);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [foodItem, setFodItem] = useState<object>({});

  const { id } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { sections, loading, error } = useSelector(
    (state: RootState) => state.menuItems,
  );

  useEffect(() => {
    if (!sections || sections === null) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setLoadedMenu(sections as any);
    }
  }, [sections]);

  // useEffect(() => {
  //   if (loadedMenu) {
  //     for (let i in loadedMenu.sections) {
  //       console.log(loadedMenu.sections);
  //       console.log(loadedMenu.sections[i].id, id);
  //       console.log(loadedMenu.sections[i].id.toString() === id);
  //     }
  //   }
  // }, [loadedMenu]);

  return (
    <Fragment>
      <NavMenu />
      <Header />
      <Container className=''>
        <Row>
          <Card>
            <CardBody>
              <CardTitle tag='h5'>{id}Your Title Here</CardTitle>
              <CardText></CardText>
            </CardBody>
          </Card>
        </Row>
        <Row className='info'>
          <Col fluid>
            <Badge color='white'>View allergy information</Badge>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
