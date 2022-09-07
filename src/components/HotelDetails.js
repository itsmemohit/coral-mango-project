import React, { useEffect, useState } from "react";
import Fooddata from "./FoodData";
import { useLocation } from "react-router-dom";
import "./style.css";
import Form from "react-bootstrap/Form";
import { Button, Col, Row, FormGroup, Label, Input } from "reactstrap";
import Cards from "./Cards";
import Set from "./Set";
import logo from "../assets/logo.png";
import { CardImg, Card, CardBody, CardTitle, CardText } from "reactstrap";

const HotelDetails = ({ data }) => {
  const location = useLocation();
  console.log("location", location.state);

  return (
    <>
      {/* {data.map((element, k) => { */}
      <div className="ml-4">
        <section className="iteam_section mt-4 container">
          <h2 className="px-4" style={{ fontWeight: 400 }}>
            Restaurants Details
          </h2>
        </section>
        <Card className="my-2 ml-4">
          <CardImg
            alt="Card image cap"
            src={location.state.imgdata}
            style={{
              height: 500,
              width: 800,
            }}
            top
            width="50%"
          />
          <CardBody>
            <CardTitle tag="h5">{location.state.rname}</CardTitle>
            <CardText>
              A restaurant is a business that prepares and serves food and
              drinks to customers. Meals are generally served and eaten on the
              premises, but many restaurants also offer take-out and food
              delivery services.
            </CardText>
            <CardText>{location.state.address}</CardText>
            <CardText>
              <small className="text-muted">Last updated 3 mins ago</small>
            </CardText>
          </CardBody>
        </Card>
        <Form>
          <Row className="row-cols-lg-auto g-3 align-items-center">
            <Col>
              <Label className="visually-hidden" for="comment">
                Review
              </Label>
              <Input
                id="comment"
                name="review"
                placeholder="Comment anonymously"
                type="review"
              />
            </Col>
            <Col>
              <Button>Submit</Button>
            </Col>
          </Row>
        </Form>
      </div>
      {/* })} */}
    </>
  );
};

export default HotelDetails;
