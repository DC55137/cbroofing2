import PropTypes from "prop-types";
// @mui
import { alpha, styled, useTheme } from "@mui/material/styles";
import { Grid, Paper, Rating, Container, Typography } from "@mui/material";
// hooks

// utils
import cssStyles from "../../utils/cssStyles";
// components

import { MotionInView, varFade } from "../../components/animate";
import { testimonialData as TESTIMONIALS } from "./TestimonialData";

// ----------------------------------------------------------------------

// const TESTIMONIALS = [
//   {
//     name: "Paul, Nerang",
//     rating: 5,
//     dateCreate: "September 19, 2021",
//     content: `Genuinely the best value service on the coast. Chris Board Metal Roofing provided an asbestos roof removal and installation of a new metal roof and the finished work is absolute top notch. 100% recommend`,
//   },
//   {
//     name: "Peter, Isle of Capri",
//     rating: 5,
//     dateCreate: "March 19, 2021",
//     content: `Engaged their services on behalf of my Mother who needed a leaking asbestos roof removed and replaced. After extensive research found these guys the easiest to deal with and their quote was itemised and clear.`,
//   },
//   {
//     name: "Greg Gibbards, Miami",
//     rating: 5,
//     dateCreate: "December 5, 2020",
//     content:
//       "He delivered on what he said he was going to do. Within 48 hours of us speaking he had inspected the site and provided the quote I requested. Along with the quote he supplied photographs of the damaged area to assist the body corporate to make a decission.",
//   },
//   {
//     name: "Mick Skehan, Coombabah",
//     rating: 5,
//     dateCreate: "January 21, 2021",
//     content: `Through professional. Chris and Daniel were in constant communication and gave feedback on progress. Very happy with process. 100% recommendation.`,
//   },
//   {
//     name: "Raj, Springfield Lakes",
//     rating: 5,
//     dateCreate: "February 04, 2021",
//     content: `I contacted Chris to replace tiled roof to colorbond that was damaged during hail storm after calling more than dozen companies. Chris and Daniel were both were excellent at all aspects right from giving a quote to cleanup. Would highly recommend CB for all roofing jobs.`,
//   },
//   {
//     name: "Julie, Isle of Capri",
//     rating: 5,
//     dateCreate: "April 4, 2021",
//     content: `Fantastic job by all, very efficiecont and quick, they even reinstalled the foam gutter again. Came back another day to check that all was done properly`,
//   },
// ];

const half = Math.ceil(TESTIMONIALS.length / 2);

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
  backgroundAttachment: "fixed",
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    overflow: "visible",
  },
}));

// ----------------------------------------------------------------------

export default function FaqsTestimonials() {
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
          <Grid item xs={12} md={12} lg={12}>
            <Grid container spacing={3} alignItems="center">
              <Grid item xs={12} md={6}>
                {TESTIMONIALS.slice(0, half).map((testimonial) => (
                  <MotionInView
                    key={testimonial.name}
                    variants={varFade().inUp}
                  >
                    <TestimonialCard testimonial={testimonial} />
                  </MotionInView>
                ))}
              </Grid>

              <Grid item xs={12} md={6}>
                {TESTIMONIALS.slice(half, -1).map((testimonial) => (
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
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

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
