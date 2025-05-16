import React, { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardTitle,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";

import { RootState } from "@/store";
import { IMenuItems, initialState } from "@/store/slices/menuSlice";
import { fetchData } from "@/utils/api";
import NavMenu from "../components/ui/NavMenu";

import "./Login.scss";
import Header from "../components/ui/Header";

import useToggle from "@/utils/toggleHook";

export default function Login() {
  const [loadedMenu, setLoadedMenu] = useState<IMenuItems>(initialState);
  const dispatch = useDispatch();
  const { sections } = useSelector((state: RootState) => state.menuItems);

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

  return (
    <Fragment>
      <NavMenu />
      <Header />
      <Container className=''>
        <Row>
          <Col sm={4} md={4} className='mx-auto'>
            <Card>
              <CardBody>
                <CardTitle tag='h5'>Login</CardTitle>
                <Form>
                  <FormGroup>
                    <Label for='exampleEmail'>Email</Label>
                    <Input
                      id='exampleEmail'
                      name='email'
                      placeholder='@'
                      type='email'
                    />
                  </FormGroup>
                  <FormGroup>
                    <Label for='examplePassword'>Password</Label>
                    <Input
                      id='examplePassword'
                      name='password'
                      placeholder='...'
                      type='password'
                    />
                  </FormGroup>

                  <Button>Submit</Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className='info'>
          <Col fluid>
            <Badge color='white'>View allergy information</Badge>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
}
