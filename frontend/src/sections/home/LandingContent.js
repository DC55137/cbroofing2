import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { m } from "framer-motion";
import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { MotionContainer, varFade } from "../../components/animate";
import Iconify from "../../components/Iconify";
import { PATH_PAGE } from "../../routes/paths";

const HeroContent = styled(m.div)(({ theme }) => ({
  position: "fixed",
  backgroundColor: "white",
  top: "250px",
  left: "0px",
  width: "500px",
  paddingBottom: "100px",
  boxShadow: "0px 20px #01539a",
  textTransform: "uppercase",
  paddingLeft: "50px",
  transition: "all 1s",
  "& h1": {
    fontSize: "40px",
    fontWeight: "400",
    textTransform: "uppercase",
    textShadow: "0px 0px 20px rgba(0, 0, 0, 0.4)",
    textAlign: "left",
    marginBottom: "0.8rem",
    color: "black",
  },
  "& h1 strong": {
    fontSize: "50px",
    color: "#01539a",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100vw",
  },
}));

const LandingContent = () => {
  return (
    <MotionContainer>
      <HeroContent>
        <m.h1 variants={varFade().inUp} style={{ paddingTop: "15px" }}>
          <strong>Chris Board</strong> <br />
          Metal Roofing
        </m.h1>
        <br />
        <Button
          variant="outlined"
          color="inherit"
          size="large"
          component={RouterLink}
          to={PATH_PAGE.about}
          endIcon={
            <Iconify icon={"ic:round-arrow-right-alt"} width={24} height={24} />
          }
        >
          Get A free quote
        </Button>
      </HeroContent>
    </MotionContainer>
  );
};

export default LandingContent;
