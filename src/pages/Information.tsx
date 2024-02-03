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
              <CardTitle tag="h5">Your Title Here</CardTitle>
              <CardText>
                Nunc non mollis sapien. Cras molestie ipsum justo, vel feugiat
                neque pharetra nec. Vivamus eleifend vitae tortor sed dictum.
                Cras vel luctus lectus. Ut molestie, ipsum in venenatis rhoncus,
                dui odio aliquam mi, vel ultricies metus turpis vel velit.
                Aenean vel varius ex. Nulla vitae condimentum mi, a sodales ex.
                Nulla vestibulum, tellus eu maximus varius, dui ante porta arcu,
                nec condimentum ex enim sit amet nibh. Sed et orci nisi. Donec
                quis lectus metus. Vestibulum nec libero mi. Ut libero metus,
                rutrum sed placerat imperdiet, pretium ut est. Aliquam sodales
                tincidunt dui, vel bibendum quam ornare sed.
              </CardText>
              <CardText>
                Vivamus bibendum, sapien tempus mollis imperdiet, sem enim
                eleifend neque, eget feugiat orci purus eget ex. Duis eget
                gravida augue. Sed tempus consequat magna, in lacinia eros
                fringilla vitae. In ultrices nunc vel lectus tempor
                pellentesque. Praesent blandit laoreet nisi. Pellentesque eu
                pellentesque tortor, vitae viverra tellus. In eu aliquet enim.
                Curabitur luctus est porta tincidunt hendrerit. Aenean
                ullamcorper dictum laoreet.{" "}
              </CardText>
            </CardBody>
          </Card>
        </Row>
        <Footer />
      </Container>
    </Fragment>
  );
}
