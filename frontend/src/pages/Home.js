// @mui
import { styled } from "@mui/material/styles";
// components
import Page from "../components/Page";
// sections
import {
  Hero,
  HomeTestimonials,
  HomeMinimal,
  SuppliersElement,
  AsbestosElement,
} from "../sections/home";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(() => ({
  height: "100%",
}));

const ContentStyle = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  backgroundColor: theme.palette.background.default,
}));

// ----------------------------------------------------------------------

export default function HomePage() {
  return (
    <Page title="Metal Roofing">
      <RootStyle>
        <Hero />
        <ContentStyle>
          <HomeMinimal />
          <SuppliersElement />
          <AsbestosElement />
          <HomeTestimonials />
        </ContentStyle>
      </RootStyle>
    </Page>
  );
}
