import { Link as RouterLink } from "react-router-dom";
// @mui
import { alpha, useTheme, styled } from "@mui/material/styles";
import { Box, Grid, Button, Container, Typography } from "@mui/material";
// routes
import { PATH_PAGE } from "../../routes/paths";
// components
import Image from "../../components/Image";
import { MotionInView, varFade } from "../../components/animate";

// ----------------------------------------------------------------------

const image = [
  "https://res.cloudinary.com/dddxwdp7v/image/upload/v1644473791/cbroofing/Asbestos/Roachedale/RochedaleAfter_j8zc8v.jpg",
  "https://res.cloudinary.com/dddxwdp7v/image/upload/v1644473779/cbroofing/Asbestos/Roachedale/RoachedaleBefore_mcqw1i.jpg",
];
const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(24, 0),
}));

const ContentStyle = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    marginBottom: 0,
  },
}));

const ScreenStyle = styled(MotionInView)(({ theme }) => ({
  paddingRight: 2,
  paddingBottom: 1,
  maxWidth: 160,
  borderRadius: 8,
  backgroundColor:
    theme.palette.grey[theme.palette.mode === "light" ? 300 : 800],
  [theme.breakpoints.up("sm")]: {
    maxWidth: 500,
    paddingRight: 4,
    borderRadius: 12,
  },
  "& img": {
    borderRadius: 8,
    [theme.breakpoints.up("sm")]: {
      borderRadius: 12,
    },
  },
}));

const COMMON = {
  scaleX: 0.86,
  skewY: 8,
  skewX: 0,
  scaleY: 1,
  translateX: 0,
  translateY: 0,
  opacity: 0,
};

const variantScreenLeft = {
  initial: COMMON,
  animate: { ...COMMON, translateX: "-30%", translateY: 40, opacity: 1 },
};
const variantScreenRight = {
  initial: COMMON,
  animate: { ...COMMON, translateX: "30%", translateY: -40, opacity: 1 },
};

// ----------------------------------------------------------------------

export default function AsbestosElement() {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";
  const isRTL = theme.direction === "rtl";

  const screenLeftAnimate = variantScreenLeft;
  const screenRightAnimate = variantScreenRight;

  return (
    <RootStyle>
      <Container>
        <Grid container spacing={5} justifyContent="center">
          <Grid
            item
            xs={12}
            md={4}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <ContentStyle>
              <MotionInView variants={varFade().inUp}>
                <Typography
                  component="div"
                  variant="overline"
                  sx={{ mb: 2, color: "text.disabled" }}
                >
                  Asbestos
                </Typography>
              </MotionInView>

              <MotionInView variants={varFade().inUp}>
                <Typography variant="h2" sx={{ mb: 3 }}>
                  Licensed Asbestos <br />
                  Removalist
                </Typography>
              </MotionInView>

              <MotionInView variants={varFade().inUp}>
                <Typography
                  sx={{
                    mb: 5,
                    color: isLight ? "text.secondary" : "common.white",
                  }}
                >
                  Asbestos has weighed on the minds of many Queenslanders. Put
                  your mind to ease and let the experts remove this hazard from
                  your home.
                </Typography>
              </MotionInView>

              <MotionInView variants={varFade().inUp}>
                <Button
                  size="large"
                  color="inherit"
                  variant="outlined"
                  component={RouterLink}
                  to={PATH_PAGE.gallery}
                >
                  View Gallery
                </Button>
              </MotionInView>
            </ContentStyle>
          </Grid>

          <Grid item xs={12} md={8} dir="ltr">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                justifyContent: "center",
              }}
            >
              {[...Array(2)].map((_, index) => (
                <ScreenStyle
                  key={index}
                  threshold={0.72}
                  variants={{
                    ...(index === 0 && screenLeftAnimate),
                    ...(index === 1 && screenRightAnimate),
                  }}
                  transition={{ duration: 0.72, ease: "easeOut" }}
                  sx={{
                    boxShadow: `${isRTL ? -80 : 80}px -40px 80px ${alpha(
                      isLight
                        ? theme.palette.grey[600]
                        : theme.palette.common.black,
                      0.48
                    )}`,
                    ...(index === 0 && {
                      zIndex: 3,
                      position: "absolute",
                    }),
                    ...(index === 1 && { zIndex: 2 }),
                    ...(index === 2 && {
                      zIndex: 1,
                      position: "absolute",
                      boxShadow: "none",
                    }),
                  }}
                >
                  <Image
                    disabledEffect
                    alt={`screen ${index + 1}`}
                    src={image[index]}
                  />
                </ScreenStyle>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
