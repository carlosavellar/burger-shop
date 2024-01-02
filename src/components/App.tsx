import React, { Fragment, ReactNode, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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

  useEffect(() => {
    dispatch(fetchData() as any);
  }, [dispatch]);

  useEffect(() => {
    if (sections || sections === null) {
      console.log(sections, "!");
      setLoadedMenu(sections as any);
    }
  }, [sections]);
  ("");

  useEffect(() => {
    console.log(loadedMenu.id, "Menu");
  }, [loadedMenu]);

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
                  className="bg-white media-test d-flex align-items-center justify-content-center vh-50"
                  key={section.id}
                >
                  <Avatar alt="Remy Sharp" src={section.images[0].image} />
                  {/* <Card
                    style={{
                      width: "18rem",
                    }}
                    className="bg-white media-test d-flex align-items-center justify-content-center vh-50"
                  >
                    <Avatar alt="Remy Sharp" src={section.images[0].image} />
                    <CardBody>
                      <CardTitle tag="h5">{section.name}</CardTitle>
                      <CardSubtitle
                        className="mb-2 text-muted align-items-center justify-content-center"
                        tag="h6"
                      ></CardSubtitle>
                    </CardBody>
                  </Card> */}
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </Fragment>
  );
}
