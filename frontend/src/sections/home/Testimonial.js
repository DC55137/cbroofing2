import React from "react";
import { BsStarFill as Star } from "react-icons/bs";
import styled from "styled-components";

const Test = styled.div`
  height: 100%;
`;

const Par = styled.p`
  font-size: 16px;
`;

const Testimonial = ({ testimonial }) => {
  return (
    <Test
      className="d-flex flex-column justify-content-between"
      data-aos={testimonial.dataAos}
      data-aos-duration="500"
      data-aos-easing="ease-in-sine"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <div className="text-center mt-5">
        <h2 className="text-capitalize">
          <strong>{testimonial.highlight}</strong>
        </h2>
        <h3 className="mb-3">
          <Star className="mx-1" />
          <Star className="mx-1" />
          <Star className="mx-1" />
          <Star className="mx-1" />
          <Star className="mx-1" />
        </h3>
        <Par>{testimonial.testimonial}</Par>
      </div>
      <div>
        <hr />
        <p>- {testimonial.name}</p>
      </div>
    </Test>
  );
};

export default Testimonial;
