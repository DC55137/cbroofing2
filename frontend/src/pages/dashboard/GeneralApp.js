import { useEffect } from "react";
// @mui

import { Container, Box } from "@mui/material";
// hooks

// components
import Page from "../../components/Page";

//Job
import { JobCard } from "src/sections/jobs";
import { SkeletonProductItem } from "src/components/skeleton";
// redux
import { useDispatch, useSelector } from "../../redux/store";
import { getJobs } from "../../redux/slices/jobs";

// ----------------------------------------------------------------------

export default function GeneralApp() {
  const dispatch = useDispatch();

  const { jobs, isLoading } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  return (
    <Page title="General: App">
      <Container sx={{ my: 10 }}>
        <Box
          sx={{
            display: "grid",
            gap: 3,
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
          }}
        >
          {(isLoading ? [...Array(12)] : jobs).map((job, index) =>
            job ? (
              <JobCard key={job._id} job={job} />
            ) : (
              <SkeletonProductItem key={index} />
            )
          )}
        </Box>
      </Container>
    </Page>
  );
}
