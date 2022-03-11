import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
// @mui
import { alpha, useTheme, styled } from "@mui/material/styles";
import {
  Box,
  Grid,
  Button,
  Container,
  Typography,
  LinearProgress,
} from "@mui/material";
//ROUTES
import { PATH_PAGE } from "../../routes/paths";
// hooks
import useResponsive from "../../hooks/useResponsive";
// utils
import { fPercent } from "../../utils/formatNumber";
// components
import Image from "../../components/Image";
import Iconify from "../../components/Iconify";
import { MotionInView, varFade } from "../../components/animate";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  paddingTop: theme.spacing(20),
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
  },
}));

// ----------------------------------------------------------------------

export default function AboutWhat() {
  const theme = useTheme();

  const isDesktop = useResponsive("up", "md");

  const isLight = theme.palette.mode === "light";
  const shadow = `-40px 40px 80px ${alpha(
    isLight ? theme.palette.grey[500] : theme.palette.common.black,
    0.48
  )}`;

  return (
    <RootStyle>
      <Container>
        <Grid container spacing={3}>
          {isDesktop && (
            <Grid item xs={12} md={6} lg={7} sx={{ pr: { md: 7 } }}>
              <Grid container spacing={3} alignItems="flex-end">
                <Grid item xs={6}>
                  <MotionInView variants={varFade().inUp}>
                    <Image
                      src="https://res.cloudinary.com/dddxwdp7v/image/upload/v1644287824/cbroofing/homeImages/carousel6_ka2cow.jpg"
                      ratio="3/4"
                      sx={{
                        borderRadius: 2,
                        boxShadow: shadow,
                      }}
                    />
                  </MotionInView>
                </Grid>
                <Grid item xs={6}>
                  <MotionInView variants={varFade().inUp}>
                    <Image
                      src="https://res.cloudinary.com/dddxwdp7v/image/upload/v1644287825/cbroofing/homeImages/metalRoof2_h13mfl.png"
                      ratio="1/1"
                      sx={{ borderRadius: 2 }}
                    />
                  </MotionInView>
                </Grid>
              </Grid>
            </Grid>
          )}

          <Grid item xs={12} md={6} lg={5}>
            <MotionInView variants={varFade().inRight}>
              <Typography variant="h2" sx={{ mb: 3 }}>
                Chris Board Metal Roofing
              </Typography>
            </MotionInView>

            <MotionInView variants={varFade().inRight}>
              <Typography
                sx={{
                  color: (theme) =>
                    theme.palette.mode === "light"
                      ? "text.secondary"
                      : "common.white",
                }}
              >
                CBMR started in 2003 here in South East Queensland. Over the
                past 19 years CBMR has developed the skills and workforce
                required to complete any roofing project. CBMR has consistantly
                exceeded clients expectations and has developed into a company
                locals can rely on for high quality service within strict
                timelines.
              </Typography>
            </MotionInView>

            <MotionInView variants={varFade().inRight}>
              <Button
                variant="outlined"
                color="inherit"
                size="large"
                component={RouterLink}
                to={PATH_PAGE.gallery}
                endIcon={
                  <Iconify
                    icon={"ic:round-arrow-right-alt"}
                    width={24}
                    height={24}
                  />
                }
              >
                Check out our work
              </Button>
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

ProgressItem.propTypes = {
  progress: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.number,
  }),
};

function ProgressItem({ progress }) {
  const { label, value } = progress;

  return (
    <Box sx={{ mt: 3 }}>
      <Box sx={{ mb: 1.5, display: "flex", alignItems: "center" }}>
        <Typography variant="subtitle2">{label}&nbsp;-&nbsp;</Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {fPercent(value)}
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={value}
        sx={{
          "& .MuiLinearProgress-bar": { bgcolor: "grey.700" },
          "&.MuiLinearProgress-determinate": { bgcolor: "divider" },
        }}
      />
    </Box>
  );
}
