import PropTypes from "prop-types";
// @mui
import { alpha, styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Grid,
  Link,
  Paper,
  Rating,
  Container,
  Typography,
} from "@mui/material";
// hooks
import useResponsive from "../../hooks/useResponsive";
// utils
import cssStyles from "../../utils/cssStyles";
// components
import Iconify from "../../components/Iconify";
import { MotionInView, varFade } from "../../components/animate";

// ----------------------------------------------------------------------

const TESTIMONIALS = [
  {
    name: "Paul, Nerang",
    rating: 5,
    dateCreate: "September 19, 2021",
    content: `Genuinely the best value service on the coast. Chris Board Metal Roofing provided an asbestos roof removal and installation of a new metal roof and the finished work is absolute top notch. 100% recommend`,
  },
  {
    name: "Peter, Isle of Capri",
    rating: 5,
    dateCreate: "March 19, 2021",
    content: `Engaged their services on behalf of my Mother who needed a leaking asbestos roof removed and replaced. After extensive research found these guys the easiest to deal with and their quote was itemised and clear.`,
  },
  {
    name: "Greg Gibbards, Miami",
    rating: 5,
    dateCreate: "December 5, 2020",
    content:
      "He delivered on what he said he was going to do. Within 48 hours of us speaking he had inspected the site and provided the quote I requested. Along with the quote he supplied photographs of the damaged area to assist the body corporate to make a decission.",
  },
  {
    name: "Mick Skehan, Coombabah",
    rating: 5,
    dateCreate: "January 21, 2021",
    content: `Through professional. Chris and Daniel were in constant communication and gave feedback on progress. Very happy with process. 100% recommendation.`,
  },
  {
    name: "Raj, Springfield Lakes",
    rating: 5,
    dateCreate: "February 04, 2021",
    content: `I contacted Chris to replace tiled roof to colorbond that was damaged during hail storm after calling more than dozen companies. Chris and Daniel were both were excellent at all aspects right from giving a quote to cleanup. Would highly recommend CB for all roofing jobs.`,
  },
  {
    name: "Julie, Isle of Capri",
    rating: 5,
    dateCreate: "April 4, 2021",
    content: `Fantastic job by all, very efficiecont and quick, they even reinstalled the foam gutter again. Came back another day to check that all was done properly`,
  },
];

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(10, 0),
  backgroundSize: "cover",
  backgroundImage: `linear-gradient(to right, ${alpha(
    theme.palette.grey[900],
    0.8
  )} , ${alpha(
    theme.palette.grey[900],
    0.8
  )}), url(https://res.cloudinary.com/dddxwdp7v/image/upload/v1644287827/cbroofing/homeImages/metalRoofing_q6o3sn.png)`,
  backgrounSize: "cover",
  backgroundAttachment: "fixed",
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    padding: 0,
    height: 840,
    overflow: "hidden",
  },
}));

// ----------------------------------------------------------------------

export default function HomeTestimonials() {
  const isDesktop = useResponsive("up", "md");

  return (
    <RootStyle>
      <Container sx={{ position: "relative", height: "100%" }}>
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent={{ xs: "center", md: "space-between" }}
          sx={{ height: "100%" }}
        >
          <Grid item xs={10} md={4}>
            <Box sx={{ maxWidth: { md: 360 } }}>
              <MotionInView variants={varFade().inUp}>
                <Typography
                  component="p"
                  variant="overline"
                  sx={{ mb: 2, color: "text.secondary" }}
                >
                  Testimonials
                </Typography>
              </MotionInView>

              <MotionInView variants={varFade().inUp}>
                <Typography variant="h2" sx={{ mb: 3, color: "common.white" }}>
                  Who love <br />
                  Our work
                </Typography>
              </MotionInView>

              <MotionInView variants={varFade().inUp}>
                <Typography sx={{ color: "common.white" }}>
                  Our goal is to become the local roofing company that people in
                  the Gold Coast and in Brisbane can trust. It means a great
                  deal to CBMR when the clients we work for are satfisified with
                  our service. We are constantly striving to surpass our clients
                  expectations, such that CBMR become the first name people
                  think of when it comes to roofing.
                </Typography>
              </MotionInView>

              {!isDesktop && (
                <Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
                  <MotionInView variants={varFade().inUp}>
                    <TestimonialLink />
                  </MotionInView>
                </Box>
              )}
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={7}
            lg={6}
            sx={{
              right: { md: 24 },
              position: { md: "absolute" },
            }}
          >
            <Grid container spacing={isDesktop ? 3 : 0} alignItems="center">
              <Grid item xs={12} md={6}>
                {TESTIMONIALS.slice(0, 3).map((testimonial) => (
                  <MotionInView
                    key={testimonial.name}
                    variants={varFade().inUp}
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </MotionInView>
                ))}
              </Grid>

              <Grid item xs={12} md={6}>
                {TESTIMONIALS.slice(3, 6).map((testimonial) => (
                  <MotionInView
                    key={testimonial.name}
                    variants={varFade().inUp}
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </MotionInView>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        {isDesktop && (
          <Box sx={{ bottom: 60, position: "absolute" }}>
            <MotionInView variants={varFade().inLeft}>
              <TestimonialLink />
            </MotionInView>
          </Box>
        )}
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

function TestimonialLink() {
  return (
    <Link
      href="/testimonials"
      variant="subtitle2"
      sx={{ display: "flex", alignItems: "center" }}
    >
      Read more testimonials
      <Iconify
        icon={"ic:round-arrow-right-alt"}
        sx={{ ml: 1, width: 20, height: 20 }}
      />
    </Link>
  );
}

TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    content: PropTypes.string,
    dateCreate: PropTypes.string,
    name: PropTypes.string,
    rating: PropTypes.number,
  }),
};

function TestimonialCard({ testimonial }) {
  const theme = useTheme();
  const { name, rating, dateCreate, content } = testimonial;

  return (
    <Paper
      sx={{
        mt: 3,
        p: 3,
        color: "common.white",
        ...cssStyles().bgBlur({
          color: theme.palette.common.white,
          opacity: 0.04,
        }),
      }}
    >
      <Typography variant="subtitle1" gutterBottom>
        {name}
      </Typography>
      <Typography
        gutterBottom
        component="p"
        variant="caption"
        sx={{ color: "grey.500" }}
      >
        {dateCreate}
      </Typography>
      <Rating value={rating} readOnly size="small" />
      <Typography variant="body2" sx={{ mt: 1.5 }}>
        {content}
      </Typography>
    </Paper>
  );
}
