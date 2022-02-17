import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import styled from "styled-components";
import Asbestos1 from "../../images/Asbestos/Manly/asbestosManly.jpg";
import Asbestos1Change from "../../images/Asbestos/Manly/asbestsoManlyChange.jpg";
import Asbestos2 from "../../images/Asbestos/tugun/tugunAsbestosBefore.jpg";
import Asbestos2Change from "../../images/Asbestos/tugun/tugunAsbestos.jpg";
import Asbestos3 from "../../images/Asbestos/Roachedale/RoachedaleBefore.jpg";
import Asbestos3Change from "../../images/Asbestos/Roachedale/RochedaleAfter.jpg";
import AsbestosChange from "./AsbestosChange";
import { testimonialData2 } from "../../data/TestimonialData";

const Strip = styled.div`
  background-color: white;
  color: #01539a;
`;

const Img = styled.img`
  width: 100%;
  &:hover {
    transform: scale(0.9) translate(0);
  }
`;

const ImgBottom = styled.img`
  width: 500px;
  border: solid 2px #01539a;
  border-radius: 10px;
  position: absolute;
`;
const ImgTop = styled.img`
  width: 500px;
  border: solid 2px #01539a;
  border-radius: 10px;
  position: absolute;
`;

const WhiteStrip = () => {
  return (
    <Strip className="pb-5">
      <Container className="py-5">
        <div className="suppliers-header pt-5">
          <Row className="pt-5">
            <Col lg={8}>
              <h1>Asbestos Removalist</h1>
              <hr />
            </Col>
          </Row>
          <h1
            data-aos="fade-bottom"
            data-aos-duration="500"
            data-aos-easing="ease-in-sine"
            data-aos-once="true"
            data-aos-anchor-placement="top-bottom"
            className="py-3 text-center"
          >
            <strong>We've transformed over 100 Asbestos houses!!!</strong>
          </h1>
          <Row>
            <Col>
              <p>
                Having an asbestos roof is something that has weighed on the
                minds of many home owners in South East Queensland. Concerns
                over safety, over cost and much more. It is understandable that
                some house owner may think that the prospect of replacing the
                roof might appear out of reach, but CBMR believes this is not
                the case. With our expertise and our wealth of experience, we
                believe we can not only provide an affordable price but provide
                peace of mind to those seeking a new roof. We have helped many
                Gold Coast house owners over the years, and we would like the
                opportunity to help you as well.
              </p>
            </Col>
          </Row>
        </div>
        <AsbestosChange
          picture1={Asbestos1}
          picture2={Asbestos1Change}
          message={"Manly"}
        />
        <AsbestosChange
          picture1={Asbestos2}
          picture2={Asbestos2Change}
          message={"Wynnum"}
        />
        <AsbestosChange
          picture1={Asbestos3}
          picture2={Asbestos3Change}
          message={"Wynnum"}
        />
      </Container>
    </Strip>
  );
};

export default WhiteStrip;
