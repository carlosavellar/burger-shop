import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Col, Container, Row } from "reactstrap";

import { Accordion, AccordionHeader, AccordionItem } from "reactstrap";

import { RootState } from "@/store";
import { IMenuItems, initialState } from "@/store/slices/menuSlice";
import { fetchData } from "@/utils/api";
import NavMenu from "../components/ui/NavMenu";
import SearchInput from "../components/ui/SearchInput";

import "./App.scss";
import Header from "../components/ui/Header";
import ProductImageList from "../components/ProductImageList";
import SectionList from "../components/SectionList";
import useToggle from "@/utils/toggleHook";
import { Link } from "react-router-dom";

export default function App() {
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
  }, [openBurger, openDrinks]);

  useEffect(() => {
    if (openDrinks) {
      setSectionToggleDrink((prevState) => (prevState = "1"));
    } else {
      setSectionToggleDrink((prevState) => (prevState = ""));
    }
  }, [openDrinks]);

  useEffect(() => {
    dispatch(fetchData() as any);
  }, [dispatch]);

  useEffect(() => {
    if (sections || sections === null) {
      setLoadedMenu(sections as any);
    }
  }, [sections]);

  return (
    <Fragment>
      <NavMenu />
      <Header />
      <SearchInput />
      <Container className="">
        <Row>
          <SectionList
            menuItems={loadedMenu}
            onToggleBurger={toggleBurger}
            onToggleDrinks={toggleDrinks}
          />
        </Row>
        <Row className="burger-list">
          <Col>
            <Accordion flush open={sectionToggle} toggle={toggleBurger}>
              <AccordionItem key={1}>
                <AccordionHeader targetId="1">
                  <h3>Burgers</h3>
                </AccordionHeader>
                <ProductImageList
                  sectionId={242403}
                  menuItems={loadedMenu}
                  isSectionImage={true}
                />
              </AccordionItem>
            </Accordion>
          </Col>
        </Row>
        <Row className="drink-list">
          <Col>
            <Accordion flush open={sectionToggleDrink} toggle={toggleDrinks}>
              <AccordionItem key={1}>
                <AccordionHeader targetId="1">
                  <h3>Drinks</h3>
                </AccordionHeader>
                <ProductImageList sectionId={242404} menuItems={loadedMenu} />
              </AccordionItem>
            </Accordion>
          </Col>
        </Row>
        <Row className="info">
          <Col fluid>
            <Link to="/allergy-information" className="nav-link">
              <Badge color="white">View allergy information</Badge>
            </Link>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
