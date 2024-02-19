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
import { fetchData } from "@/utils/api";
import NavMenu from "../components/ui/NavMenu";
import SearchInput from "../components/ui/SearchInput";

import "./Information.scss";
import Header from "../components/ui/Header";
import useToggle from "@/utils/toggleHook";
import { useSelector } from "react-redux";
interface FoodItemProps {
  sectionId: number;
  menuItems: IMenuItems;
  isSectionImage?: boolean;
}

export default function FoodItem() {
  const [loadedMenu, setLoadedMenu] = useState<IMenuItems>(initialState);
  const [foodItem, setFodItem] = useState<{}>({});

  const { id } = useParams();
  const { sections, loading, error } = useSelector(
    (state: RootState) => state.menuItems
  );

  useEffect(() => {
    if (!sections || sections === null) {
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
      <Container className="">
        <Row>
          <Card>
            <CardBody>
              <CardTitle tag="h5">{id}Your Title Here</CardTitle>
              <CardText></CardText>
            </CardBody>
          </Card>
        </Row>
        <Row className="info">
          <Col fluid>
            <Badge color="white">View allergy information</Badge>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
