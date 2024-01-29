import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  FormText,
  Input,
  Label,
  Row,
} from "reactstrap";

import { Accordion, AccordionHeader, AccordionItem } from "reactstrap";

import { RootState } from "@/store";
import { IMenuItems, initialState } from "@/store/slices/menuSlice";
import { fetchData } from "@/utils/api";
import NavMenu from "../components/ui/NavMenu";
import SearchInput from "../components/ui/SearchInput";

import "./Login.scss";
import Header from "../components/ui/Header";
import ProductImageList from "../components/ProductImageList";
import SectionList from "../components/SectionList";
import useToggle from "@/utils/toggleHook";

export default function Login() {
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
          <Col>
            <Form>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="with a placeholder"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input
                  id="examplePassword"
                  name="password"
                  placeholder="password placeholder"
                  type="password"
                />
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Select</Label>
                <Input id="exampleSelect" name="select" type="select">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelectMulti">Select Multiple</Label>
                <Input
                  id="exampleSelectMulti"
                  multiple
                  name="selectMulti"
                  type="select"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input id="exampleText" name="text" type="textarea" />
              </FormGroup>
              <FormGroup>
                <Label for="exampleFile">File</Label>
                <Input id="exampleFile" name="file" type="file" />
                <FormText>
                  This is some placeholder block-level help text for the above
                  input. It‘s a bit lighter and easily wraps to a new line.
                </FormText>
              </FormGroup>
              <FormGroup tag="fieldset">
                <legend>Radio Buttons</legend>
                <FormGroup check>
                  <Input name="radio1" type="radio" />{" "}
                  <Label check>
                    Option one is this and that—be sure to include why it‘s
                    great
                  </Label>
                </FormGroup>
                <FormGroup check>
                  <Input name="radio1" type="radio" />{" "}
                  <Label check>
                    Option two can be something else and selecting it will
                    deselect option one
                  </Label>
                </FormGroup>
                <FormGroup check disabled>
                  <Input disabled name="radio1" type="radio" />{" "}
                  <Label check>Option three is disabled</Label>
                </FormGroup>
              </FormGroup>
              <FormGroup check>
                <Input type="checkbox" /> <Label check>Check me out</Label>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
