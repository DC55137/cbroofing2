// @mui
import { styled } from "@mui/material/styles";
import { Divider, Grid, Container } from "@mui/material";
// components
import Page from "../components/Page";
import { AboutHero, AboutWhat, AboutTestimonials } from "../sections/about";
import { ContactForm } from "src/sections/contact";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function About() {
  return (
    <Page title="About us | Gold Coast Brisbane Metal Roofing">
      <RootStyle>
        <AboutHero />

        <Container sx={{ my: 10 }}>
          <ContactForm />
        </Container>
        <AboutWhat />

        <Divider
          orientation="vertical"
          sx={{ my: 10, mx: "auto", width: 2, height: 40 }}
        />

        {/* <AboutTeam /> */}

        <AboutTestimonials />
      </RootStyle>
    </Page>
  );
}
