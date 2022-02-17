import React from "react";
import { BsStarFill as Star } from "react-icons/bs";
import { Row, Col } from "react-bootstrap";
import { Button } from "../Button";
import Testimonial from "./Testimonial";
import styled, { css } from "styled-components/macro";
import BackrgoundImg from "../../images/carousel1.jpg";
import { testimonialData as testimonials } from "./TestimonialData";
import TestimonailImage from "../../images/carousel8.jpg";

const Strip = styled.div`
  background-image: url(${BackrgoundImg});
  background-size: cover;
  background-attachment: fixed;
`;

const Stripfront = styled.div`
  background-color: rgb(1, 83, 154, 0.9);
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  max-width: 600px;
  max-height: 400px;
  object-fit: cover;
  margin: auto 1rem;
`;

const Header = styled.div``;

const Information = () => {
  return (
    <Strip>
      <Stripfront>
        <div>
          <Header
            className="container py-5"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-easing="ease-in-sine"
            data-aos-once="true"
            data-aos-anchor-placement="bottom-bottom"
          >
            <Row className="pt-5">
              <Col md={2}>
                <hr className="lineAdded" />
              </Col>
              <div className="col-10">
                <h1> Testimonials</h1>
              </div>
            </Row>
            <div className="row pt-2 text-left">
              <div class="offset-2 col-10">
                <h4>
                  <strong>
                    Here's what others say about Chris Board Metal Roofing
                  </strong>
                </h4>
              </div>
            </div>
          </Header>
          <Image
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-easing="ease-in-sine"
            data-aos-once="true"
            data-aos-anchor-placement="bottom-bottom"
            src={TestimonailImage}
          />
          <div class="container pb-5">
            <div class="row mt-5">
              {testimonials.map((testimonial, index) => {
                return <Testimonial testimonial={testimonial} key={index} />;
              })}
            </div>
          </div>
          <Button>See More Testimonials</Button>
        </div>
      </Stripfront>
    </Strip>
  );
};

export default Information;
