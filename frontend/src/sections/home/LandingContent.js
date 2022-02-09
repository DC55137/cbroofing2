import React from "react";
import styled from "styled-components";
import { Button } from "@mui/material";
import { IoMdArrowRoundForward } from "react-icons/io";

const Arrow = styled(IoMdArrowRoundForward)`
  margin-left: 0.5rem;
`;

const HeroContent = styled.div`
  position: absolute;
  background-color: white;
  top: 250px;
  left: 0px;
  width: 400px;
  z-index: 10;
  padding-bottom: 100px;
  box-shadow: 0px 20px #01539a;
  text-transform: uppercase;
  opacity: 0.8;
  padding-left: 50px;
  z-index: 999;
  transition: all 1s;

  @media screen and (max-height: 500px) {
    display: none;
  }

  h1 {
    font-size: 40px;
    font-weight: 400;
    text-transform: uppercase;
    text-shadow: 0px 0px 20px rgba(0, 0, 0, 0.4);
    text-align: left;
    margin-bottom: 0.8rem;
    color: black;
  }
  h1 strong {
    font-size: 50px;
    color: #01539a;
  }
`;

const LandingContent = () => {
  return (
    <HeroContent>
      <h1 className="pt-5" data-aos="fade-down" data-aos-duration="600">
        <strong>Chris Board</strong> <br /> Metal Roofing
      </h1>
      <Button
        data-aos="zoom-out"
        data-aos-duration="1000"
        data-aos-delay="200"
        primary="true"
      >
        Get a free quote <Arrow />
      </Button>
    </HeroContent>
  );
};

export default LandingContent;
