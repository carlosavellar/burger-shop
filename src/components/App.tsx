import React, { Fragment, ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import {
  Button,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "reactstrap";
import { Card, CardImg, CardBody } from "reactstrap";
import Image from "react-bootstrap/Image";
import tempImage from "./../assets/temp.png";
import { IBurger } from "@/interfaces/IBurger";

import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";

import { RootState } from "@/store";
import { IMenuItems, initialState } from "@/store/slices/menuSlice";
import { fetchData } from "@/utils/api";
import NavMenu from "./ui/NavMenu";
import SearchInput from "./ui/SearchInput";
import { loadAllFoods } from "@/store/slices/menuSlice";

import "./App.scss";
import Header from "./ui/Header";
import { Avatar } from "@mui/material";

export default function App() {
  const [loadedMenu, setLoadedMenu] = useState<IMenuItems>(initialState);
  const dispatch = useDispatch();
  const { sections, loading, error } = useSelector(
    (state: RootState) => state.menuItems
  );

  const [open, setOpen] = useState("");
  const toggle = (id: any) => {
    if (open === id) {
      setOpen("");
    } else {
      setOpen(id);
    }
  };

  useEffect(() => {
    dispatch(fetchData() as any);
  }, [dispatch]);

  useEffect(() => {
    if (sections || sections === null) {
      setLoadedMenu(sections as any);
    }
  }, [sections]);

  const filterSection = (sectionId: number) => {
    for (let key = 0; key < loadedMenu.sections?.length; key++) {
      let sectionItem = loadedMenu.sections[key];
      if (sectionItem.id === sectionId) {
        return sectionItem;
      }
    }
  };

  interface RenderSectionProps {}
  const RenderSectionList: React.FC<RenderSectionProps> = (
    props: RenderSectionProps
  ) => {
    const arrayList = filterSection(242403);
    console.log(arrayList?.images[0]?.image !== undefined);
    return arrayList?.items.map((item) => {
      return (
        <AccordionBody accordionId="1">
          <Card className="d-flex flex-row">
            <CardBody>
              <CardTitle tag="h6">{item.name}</CardTitle>
              <data className="amount" value="18000.00">
                R${item.price}
              </data>
            </CardBody>
            {/* // description */}
            {arrayList?.images[0]?.image !== undefined && (
              <CardImg
                top
                width="100px"
                src={item.images[0].image}
                alt="Card image cap"
              />
            )}
          </Card>
        </AccordionBody>
      );
    });
  };

  return (
    <Fragment>
      <NavMenu />
      <Header />
      <SearchInput />
      <Container className="">
        <Row>
          {loadedMenu.sections?.map((section) => {
            return (
              <>
                <Col
                  id="section-button"
                  className="bg-white media-test  align-items-center justify-content-center vh-50"
                  key={section.id}
                >
                  <div className="bg-white media-test d-flex align-items-center justify-content-center">
                    <Avatar
                      alt="Remy Sharp"
                      src={section.images[0].image}
                      style={{ width: "75px", height: "75px" }}
                      className="bg-white media-test d-flex align-items-center justify-content-center vh-50"
                    />
                  </div>
                  <div className="bg-white media-test d-flex align-items-center justify-content-center section-name">
                    {section.name}
                  </div>
                </Col>
              </>
            );
          })}
        </Row>
        <Row className="burger-list">
          <Col>
            <Accordion flush open={open} toggle={toggle}>
              <AccordionItem key={1}>
                <AccordionHeader targetId="1">
                  <h3>Burgers</h3>
                </AccordionHeader>
                <RenderSectionList />
              </AccordionItem>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
