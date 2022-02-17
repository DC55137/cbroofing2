// @mui
import { styled } from "@mui/material/styles";
import { Box, Container, Stack } from "@mui/material";
// components

import {
  MotionContainer,
  TextAnimate,
  varFade,
} from "../../components/animate";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  backgroundSize: "cover",
  backgroundImage:
    "url(https://minimal-assets-api.vercel.app/assets/overlay.svg), url(https://res.cloudinary.com/dddxwdp7v/image/upload/v1644287823/cbroofing/homeImages/carousel1_po3twq.jpg)",
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up("md")]: {
    height: 560,
    padding: 0,
  },
}));

const ContentStyle = styled(Stack)(({ theme }) => ({
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    position: "absolute",
    bottom: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

export default function FaqsHero() {
  return (
    <RootStyle>
      <Container
        component={MotionContainer}
        sx={{ position: "relative", height: "100%" }}
      >
        <ContentStyle spacing={5}>
          <div>
            <TextAnimate
              text="CBMR"
              sx={{ color: "primary.main" }}
              variants={varFade().inRight}
            />
            <br />
            <Box sx={{ display: "inline-flex", color: "common.white" }}>
              <TextAnimate text="TESTIMONIALS" />
            </Box>
          </div>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
