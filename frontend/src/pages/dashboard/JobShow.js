import { useParams } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { useEffect } from "react";
// @mui
import { Card, Grid, Container, Typography, Button } from "@mui/material";
// redux
import { useDispatch, useSelector } from "../../redux/store";
import { getJob, startLoading } from "../../redux/slices/jobs";

// hooks
import useSettings from "../../hooks/useSettings";
// components
import Page from "../../components/Page";

import { SkeletonProduct } from "../../components/skeleton";
// sections
import { ProductDetailsCarousel } from "../../sections/@dashboard/e-commerce/product-details";

// ----------------------------------------------------------------------

export default function EcommerceProductDetails() {
  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const { id = "" } = useParams();

  useEffect(() => {
    dispatch(startLoading());
    dispatch(getJob(id));
  }, [dispatch, id]);

  const { job, isLoading } = useSelector((state) => state.jobs);

  return (
    <Page title="Job: Show">
      <Container maxWidth={themeStretch ? false : "lg"} sx={{ mt: "100px" }}>
        <Button to={`/dashboard/app`} component={RouterLink}>
          Back Button
        </Button>
        {job && !isLoading && (
          <>
            <Card>
              <Grid container>
                <Grid item xs={12} md={6} lg={7}>
                  <ProductDetailsCarousel product={job} />
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
                    Job Number
                  </Typography>
                  <Typography
                    sx={{
                      mt: 2,
                      mb: 1,
                      display: "block",
                    }}
                  >
                    {job.number}
                  </Typography>
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
                    {job.notes}
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </>
        )}

        {!job && <SkeletonProduct />}

        {/* {error && <Typography variant="h6">404 Product not found</Typography>} */}
      </Container>
    </Page>
  );
}
