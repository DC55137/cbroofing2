import { useParams, useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import { useEffect, useState } from "react";
// @mui
import {
  Card,
  Grid,
  Container,
  Typography,
  Button,
  Input,
} from "@mui/material";
// redux
import { useDispatch, useSelector } from "../../redux/store";
import { getJob, startLoading, updateJob } from "../../redux/slices/jobs";

// hooks
import useSettings from "../../hooks/useSettings";
// components
import Page from "../../components/Page";

import { SkeletonProduct } from "../../components/skeleton";
// sections
import { ProductDetailsCarousel } from "../../sections/@dashboard/e-commerce/product-details";
import { PATH_DASHBOARD } from "../../routes/paths";

// ----------------------------------------------------------------------

export default function EcommerceProductDetails() {
  const [notes, setNotes] = useState("");

  const { themeStretch } = useSettings();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id = "" } = useParams();
  console.log(id);

  useEffect(() => {
    dispatch(startLoading());
    dispatch(getJob(id));
  }, [dispatch, id]);

  const { job, isLoading } = useSelector((state) => state.jobs);

  const onGoodHandler = () => {
    let good = {
      good: true,
      forChris: false,
      highlight: false,
      notesChris: notes,
    };
    dispatch(updateJob(id, good));
    navigate(PATH_DASHBOARD.general.app);
  };
  const onBadHandler = () => {
    let good = {
      discuss: true,
      forChris: true,
      highlight: false,
      notesChris: notes,
      stage: "lead",
    };
    dispatch(updateJob(id, good));
    navigate(PATH_DASHBOARD.general.app);
  };

  return (
    <Page title="Job: Show">
      <Container maxWidth={themeStretch ? false : "lg"}>
        <Button
          to={`/dashboard/app`}
          component={RouterLink}
          size="large"
          variant="contained"
        >
          Home Button
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
                    variant="h4"
                    sx={{
                      mt: 2,
                      mb: 1,
                      display: "block",
                    }}
                  >
                    {job.name}
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{
                      mt: 2,
                      mb: 1,
                      display: "block",
                    }}
                  >
                    {job.address}
                  </Typography>
                  <Typography
                    variant="overline"
                    sx={{
                      mt: 2,
                      mb: 1,
                      display: "block",
                    }}
                  >
                    {job.mobile}
                  </Typography>
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
                  <Button
                    onClick={onGoodHandler}
                    size="large"
                    variant="contained"
                    color="primary"
                    sx={{ m: "20px 20px" }}
                  >
                    Good
                  </Button>
                  <Button
                    onClick={onBadHandler}
                    size="large"
                    variant="contained"
                    color="error"
                    sx={{ m: "20px 20px" }}
                  >
                    To Discuss
                  </Button>
                </Grid>
              </Grid>
            </Card>
            <Grid container>
              <Grid item xs={12} md={12} lg={12}>
                <Input
                  autoFocus
                  fullWidth
                  disableUnderline
                  multiline={true}
                  placeholder="Notes"
                  onChange={(event) => setNotes(event.target.value)}
                />
              </Grid>
            </Grid>
          </>
        )}

        {!job && <SkeletonProduct />}

        {/* {error && <Typography variant="h6">404 Product not found</Typography>} */}
      </Container>
    </Page>
  );
}
