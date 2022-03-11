// @mui
import { styled } from "@mui/material/styles";
// components
import Page from "../components/Page";
import { FaqsTestimonials } from "../sections/faqs";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function Testimonials() {
  return (
    <Page title="Testimonials | Gold Coast Brisbane Metal Roofing">
      <RootStyle>
        <FaqsTestimonials />
      </RootStyle>
    </Page>
  );
}
