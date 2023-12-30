import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "reactstrap";

import { RootState } from "@/store";
import { IMenuItems, initialState } from "@/store/slices/menuSlice";
import { fetchData } from "@/utils/api";
import NavMenu from "./ui/NavMenu";
import SearchInput from "./ui/SearchInput";

import "./App.scss";
import Header from "./ui/Header";

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

  useEffect(() => {
    if (loadedMenu) {
      console.log(loadedMenu.id, "!Loaded");
    }
  }, [loadedMenu]);

  return (
    <Fragment>
      <NavMenu />
      <Header />
      <SearchInput />
      <Container fluid>
        <div style={{ background: "red" }}>
          {loadedMenu?.id}
          <Row sm={"3"}>
            <Col sm="3" className="bg-light border media-test">
              .col
            </Col>
            <Col className="bg-light border media-test">.col</Col>
            <Col className="bg-light border media-test">.col</Col>
          </Row>
        </div>
      </Container>
    </Fragment>
  );
}
