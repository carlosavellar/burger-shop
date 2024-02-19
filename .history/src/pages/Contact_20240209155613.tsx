import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import Form from "react-bootstrap/Form";

import { Accordion, AccordionHeader, AccordionItem } from "reactstrap";

import { RootState } from "@/store";
import { IMenuItems, initialState } from "@/store/slices/menuSlice";
import { fetchData } from "@/utils/api";
import NavMenu from "../components/ui/NavMenu";
import SearchInput from "../components/ui/SearchInput";

import "./Information.scss";
import Header from "../components/ui/Header";
import ProductImageList from "../components/ProductImageList";
import SectionList from "../components/SectionList";
import useToggle from "@/utils/toggleHook";
import Footer from "@/components/ui/Footer";

export default function Information() {
  const [loadedMenu, setLoadedMenu] = useState<IMenuItems>(initialState);
  const dispatch = useDispatch();
  const { sections, loading, error } = useSelector(
    (state: RootState) => state.menuItems
  );

  const { open: openBurger, toggle: toggleBurger } = useToggle("");
  const { open: openDrinks, toggle: toggleDrinks } = useToggle("");

  const [sectionToggle, setSectionToggle] = useState<string>("");
  const [sectionToggleDrink, setSectionToggleDrink] = useState<string>("");

  useEffect(() => {
    if (openBurger) {
      setSectionToggle((prevState) => (prevState = "1"));
    } else {
      setSectionToggle((prevState) => (prevState = ""));
    }

    if (openDrinks) {
      setSectionToggleDrink((prevState) => (prevState = "1"));
    } else {
      setSectionToggleDrink((prevState) => (prevState = ""));
    }
  }, [openBurger, openDrinks]);

  useEffect(() => {
    dispatch(fetchData() as any);
  }, [dispatch]);

  useEffect(() => {
    if (sections || sections === null) {
      setLoadedMenu(sections as any);
    }
  }, [sections]);

  interface RenderSectionsProps {
    menuItems: IMenuItems;
  }

  return (
    <Fragment>
      <NavMenu />
      <Header />
      <Container className="">
        <Row>
          <Card>
            <CardBody>
              <CardTitle tag="h5">Contact</CardTitle>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                >
                  <Form.Label>Example textarea</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
              </Form>
            </CardBody>
          </Card>
        </Row>
        <Footer />
      </Container>
    </Fragment>
  );
}
