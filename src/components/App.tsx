import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";

import { Accordion, AccordionHeader, AccordionItem } from "reactstrap";

import { RootState } from "@/store";
import { IMenuItems, initialState } from "@/store/slices/menuSlice";
import { fetchData } from "@/utils/api";
import NavMenu from "./ui/NavMenu";
import SearchInput from "./ui/SearchInput";

import "./App.scss";
import Header from "./ui/Header";
import ProductImageList from "./ProductImageList";
import SectionList from "./SectionList";
import useToggle from "@/utils/toggleHook";

export default function App() {
  const [loadedMenu, setLoadedMenu] = useState<IMenuItems>(initialState);
  const dispatch = useDispatch();
  const { sections, loading, error } = useSelector(
    (state: RootState) => state.menuItems
  );

  const { open: openBurger, toggle: toggleBurger } = useToggle("");
  const { open: openDrinks, toggle: toggleDrinks } = useToggle("");

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
      <SearchInput />
      <Container className="">
        <Row>
          <SectionList menuItems={loadedMenu} />
        </Row>
        <Row className="burger-list">
          <Col>
            <Accordion flush open={openBurger} toggle={toggleBurger}>
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
            <Accordion flush open={openDrinks} toggle={toggleDrinks}>
              <AccordionItem key={1}>
                <AccordionHeader targetId="1">
                  <h3>Drinks</h3>
                </AccordionHeader>
                <ProductImageList sectionId={242404} menuItems={loadedMenu} />
              </AccordionItem>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
