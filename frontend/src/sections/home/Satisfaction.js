import React from "react";
import styled from "styled-components";

const SatifcationImage =
  "https://res.cloudinary.com/dddxwdp7v/image/upload/v1644282971/cbroofing/satisfaction_lh7elq.png";

const SatisfactionImg = styled.img`
  position: fixed;
  top: 150px;
  right: 0px;
  width: 300px;
  opacity: 0.8;
  transition: all 1s;

  @media screen and (max-height: 500px) {
    display: none;
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const Satisfaction = () => {
  return (
    <SatisfactionImg
      alt="Satisfaction Image"
      src={SatifcationImage}
    ></SatisfactionImg>
  );
};

export default Satisfaction;
