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
import { Avatar } from "@mui/material";
import ProductImageList from "./ProductImageList";
import SectionList from "./SectionList";

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

  interface RenderSectionsProps {
    menuItems: IMenuItems;
  }

  const RenderSections: React.FC<RenderSectionsProps> = (
    props: RenderSectionsProps
  ) => {
    const { menuItems } = props;
    return menuItems.sections?.map((section) => {
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
    });
  };

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
            <Accordion flush open={open} toggle={toggle}>
              <AccordionItem key={1}>
                <AccordionHeader targetId="1">
                  <h3>Burgers</h3>
                </AccordionHeader>
                <ProductImageList sectionId={242403} menuItems={loadedMenu} />
              </AccordionItem>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
