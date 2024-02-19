import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Badge, Card, Col, Container, Row } from "reactstrap";

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

import { IncrementProvider } from "@/context/IncrementContext";
import Basket from "@/components/ui/Basket";
import Footer from "@/components/ui/Footer";

export default function App() {
  const dispatch = useDispatch();
  const { sections, loading, error } = useSelector(
    (state: RootState) => state.menuItems
  );
  const [loadedMenu, setLoadedMenu] = useState<IMenuItems>(initialState);
  const { basketItems } = useSelector((state: RootState) => state.basket);

  const { open: openBurger, toggle: toggleBurger } = useToggle("");
  const { open: openDrinks, toggle: toggleDrinks } = useToggle("");

  const [sectionToggle, setSectionToggle] = useState<string>("");
  const [sectionToggleDrink, setSectionToggleDrink] = useState<string>("");

  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

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

  useEffect(() => {
    console.log(basketItems);
  }, [basketItems]);

  return (
    <Fragment>
      <NavMenu />
      <Header />
      <SearchInput />
      <Container>
        <Row>
          <Col className="" md={8} lg={8} xl={8}>
            <Card className="shadow p-4">
              <Container>
                <Row>
                  <Col>
                    <Row>
                      <SectionList
                        menuItems={loadedMenu}
                        onToggleBurger={toggleBurger}
                        onToggleDrinks={toggleDrinks}
                      />
                    </Row>
                    <Row className="burger-list">
                      <Col>
                        <Accordion
                          flush
                          open={sectionToggle}
                          toggle={toggleBurger}
                        >
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
                        <Accordion
                          flush
                          open={sectionToggleDrink}
                          toggle={toggleDrinks}
                        >
                          <AccordionItem key={1}>
                            <AccordionHeader targetId="1">
                              <h3>Drinks</h3>
                            </AccordionHeader>
                            <ProductImageList
                              sectionId={242404}
                              menuItems={loadedMenu}
                            />
                          </AccordionItem>
                        </Accordion>
                      </Col>
                    </Row>
                    <Footer />
                  </Col>
                </Row>
              </Container>
            </Card>
          </Col>
          <Col className="p-10" md={4} lg={4}>
            <Card className="shadow p-4">
              <Basket />
            </Card>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
