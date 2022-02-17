import { useParams } from "react-router-dom";
import { useEffect } from "react";
// @mui
import { Card, Grid, Container, Typography } from "@mui/material";
// redux
import { useDispatch, useSelector } from "../redux/store";
import { getGallery, startLoading } from "../redux/slices/gallery";

// hooks
import useSettings from "../hooks/useSettings";
// components
import Page from "../components/Page";

import { SkeletonProduct } from "../components/skeleton";
// sections
import { ProductDetailsCarousel } from "../sections/@dashboard/e-commerce/product-details";

// ----------------------------------------------------------------------

// const gallery = {
//   cover:
//     "https://res.cloudinary.com/dddxwdp7v/image/upload/v1644893661/cbroofing/Gallery/Springfield/img5_nvhgih.jpg",
//   images: [
//     "https://res.cloudinary.com/dddxwdp7v/image/upload/v1644893661/cbroofing/Gallery/Springfield/img5_nvhgih.jpg",
//     "https://res.cloudinary.com/dddxwdp7v/image/upload/v1644893661/cbroofing/Gallery/Springfield/img3_tgiwmy.jpg",
//     "https://res.cloudinary.com/dddxwdp7v/image/upload/v1644893662/cbroofing/Gallery/Springfield/img4_ch88aw.jpg",
//     "https://res.cloudinary.com/dddxwdp7v/image/upload/v1644893664/cbroofing/Gallery/Springfield/img2_xzotsw.jpg",
//     "https://res.cloudinary.com/dddxwdp7v/image/upload/v1644893664/cbroofing/Gallery/Springfield/img1_iu2en4.jpg",
//   ],
//   location: "Springfield",
//   reviews: "Very happ with the word Chris and the team have done.",
//   date: "01/01/21",
//   duration: 4,
//   description: "Roof replacement due to hail damage",
//   recap:
//     "There was a lot of concern in this area after the hail storm. It was really rewarding easing Raj's concern and replacing the damaged roof.",
// };

export default function EcommerceProductDetails() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const { id = "" } = useParams();

  useEffect(() => {
    dispatch(startLoading());
    dispatch(getGallery(id));
  }, [dispatch, id]);

  const { gallery, isLoading } = useSelector((state) => state.gallery);

  return (
    <Page title="Gallery: Project">
      <Container maxWidth={themeStretch ? false : "lg"} sx={{ mt: "100px" }}>
        {gallery && !isLoading && (
          <>
            <Card>
              <Grid container>
                <Grid item xs={12} md={6} lg={7}>
                  <ProductDetailsCarousel product={gallery} />
                </Grid>
                <Grid item xs={12} md={6} lg={5}>
                  <Typography
                    variant="overline"
                    sx={{
                      mt: 2,
                      mb: 1,
                      display: "block",
                    }}
                  >
                    Decription
                  </Typography>
                  <Typography
                    sx={{
                      mt: 2,
                      mb: 1,
                      display: "block",
                    }}
                  >
                    {gallery.description}
                  </Typography>
                  <Typography
                    variant="overline"
                    sx={{
                      mt: 2,
                      mb: 1,
                      display: "block",
                    }}
                  >
                    Client Feedback
                  </Typography>
                  <Typography
                    sx={{
                      mt: 2,
                      mb: 1,
                      display: "block",
                    }}
                  >
                    {gallery.review}
                  </Typography>
                  <Typography
                    variant="overline"
                    sx={{
                      mt: 2,
                      mb: 1,
                      display: "block",
                    }}
                  >
                    Recap
                  </Typography>
                  <Typography
                    sx={{
                      mt: 2,
                      mb: 1,
                      display: "block",
                    }}
                  >
                    {gallery.recap}
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </>
        )}

        {!gallery && <SkeletonProduct />}

        {/* {error && <Typography variant="h6">404 Product not found</Typography>} */}
      </Container>
    </Page>
  );
}
