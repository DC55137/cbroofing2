// @mui
import { styled, alpha } from "@mui/material/styles";
import { Grid, Container, Typography, Box } from "@mui/material";
// components
import Image from "../../components/Image";
import { MotionInView, varFade } from "../../components/animate";

// ----------------------------------------------------------------------

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

const LogoImage = styled(Image)(({ theme }) => ({
  width: "100%",
}));

// ----------------------------------------------------------------------

export default function SuppliersElement() {
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
                  Metal Roofing Brands
                </Typography>
              </MotionInView>
              <MotionInView variants={varFade().inUp}>
                <Typography variant="h2" sx={{ mb: 3, color: "common.white" }}>
                  Highest Quality <br />
                  Products
                </Typography>
              </MotionInView>
              <MotionInView variants={varFade().inUp}>
                <Typography sx={{ color: "common.white" }}>
                  You can rest assured that only the highest quality materials
                  will be use on your roofing project. Chris Board Metal Roofing
                  sources only the highest quality materials from the most
                  reliable suppliers in the Gold Coast and Brisbane. Chris Board
                  Metal Roofing works closely with these suppliers to ensure the
                  highest quality end product for our clients.
                </Typography>
              </MotionInView>
            </Box>
          </Grid>

          <Grid
            item
            xs={12}
            md={6}
            sx={{ position: "relative", marginX: "auto", marginY: "auto" }}
          >
            <Grid spacing={4} container>
              <Grid
                item
                xs={6}
                md={6}
                sx={{ position: "relative", marginX: "auto", marginY: "auto" }}
              >
                <LogoImage
                  disabledEffect
                  alt="light mode"
                  src="https://res.cloudinary.com/dddxwdp7v/image/upload/v1644282971/cbroofing/bluescope_kkeuhe.png"
                />
              </Grid>
              <Grid
                item
                xs={6}
                md={6}
                sx={{ position: "relative", marginX: "auto", marginY: "auto" }}
              >
                <LogoImage
                  alt="dark mode"
                  src="https://colorbond.com/themes/b3colorbond/logo.svg"
                />
              </Grid>
              <Grid
                item
                xs={6}
                md={6}
                sx={{ position: "relative", marginX: "auto", marginY: "auto" }}
              >
                <LogoImage
                  alt="light mode"
                  src="https://res.cloudinary.com/dddxwdp7v/image/upload/v1644282972/cbroofing/steeline_h7in3y.jpg"
                />
              </Grid>
              <Grid
                item
                xs={6}
                md={6}
                sx={{ position: "relative", marginX: "auto", marginY: "auto" }}
              >
                <LogoImage
                  alt="dark mode"
                  src="https://res.cloudinary.com/dddxwdp7v/image/upload/v1644282971/cbroofing/unicote_lnixde.png"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
