import { useEffect } from "react";

import { Link as RouterLink } from "react-router-dom";
// @mui

import {
  Card,
  Table,
  TableRow,
  TableBody,
  TableCell,
  Container,
  Typography,
  TableContainer,
  Grid,
  CardActionArea,
} from "@mui/material";

// hooks
import useSettings from "../../hooks/useSettings";

// components
import Page from "../../components/Page";

import Scrollbar from "../../components/Scrollbar";

// redux
import { useDispatch, useSelector } from "../../redux/store";
import { getJobs } from "../../redux/slices/jobs";

// sections
import { UserListHead } from "../../sections/@dashboard/user/list";

import { AppWidgetSummary } from "../../sections/@dashboard/general/app";

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "stage", label: "Stage", alignRight: false },
  { id: "name", label: "Name", alignRight: false },
  { id: "phone", label: "Phone", alignRight: false },
  { id: "email", label: "Email", alignRight: false },
  { id: "address", label: "Address", alignRight: false },
];

// ----------------------------------------------------------------------

export default function UserList() {
  const dispatch = useDispatch();

  const { jobs, isLoading } = useSelector((state) => state.jobs);
  const leads = jobs.filter(
    (job) => job.stage === "lead" && !job.discuss && !job.highlight && !job.good
  );
  const highlights = jobs.filter((job) => job.highlight);
  const inspect = jobs.filter((job) => job.stage === "inspect" && !job.discuss);
  const discuss = jobs.filter((job) => job.discuss);

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  const { themeStretch } = useSettings();

  return (
    <Page title="User: List">
      <Container maxWidth={themeStretch ? false : "lg"}>
        {isLoading ? (
          <h1>Loading... Just wait 2 sec Chris</h1>
        ) : (
          <>
            <Typography variant="h2" noWrap>
              highlights
            </Typography>
            <Typography variant="subtitle2" noWrap>
              This are the jobs that I need you to look at the most urgently
            </Typography>
            <Card>
              <Scrollbar>
                <TableContainer sx={{ minWidth: 800 }}>
                  <Table>
                    <UserListHead headLabel={TABLE_HEAD} />
                    <TableBody>
                      {highlights.map((row) => {
                        const { _id, stage, name, mobile, email, address } =
                          row;
                        return (
                          <TableRow
                            hover
                            key={_id}
                            to={`/dashboard/job/${_id}`}
                            component={RouterLink}
                            sx={{
                              textDecoration: "none",
                            }}
                          >
                            <TableCell
                              sx={{ display: "flex", alignItems: "center" }}
                            >
                              <Typography variant="subtitle2" noWrap>
                                {stage}
                              </Typography>
                            </TableCell>
                            <TableCell align="left">{name}</TableCell>
                            <TableCell align="left">{mobile}</TableCell>
                            <TableCell align="left">{email}</TableCell>
                            <TableCell align="left">{address}</TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Scrollbar>
            </Card>
            <Grid container spacing={3} sx={{ my: 5 }}>
              <Grid item xs={12} md={4}>
                <CardActionArea
                  to={`/dashboard/jobs/lead`}
                  component={RouterLink}
                >
                  <AppWidgetSummary title="Sent" total={leads.length} />
                </CardActionArea>
              </Grid>

              <Grid item xs={12} md={4}>
                <CardActionArea
                  to={`/dashboard/jobs/inspect`}
                  component={RouterLink}
                >
                  <AppWidgetSummary title="Inspect" total={inspect.length} />
                </CardActionArea>
              </Grid>

              <Grid item xs={12} md={4}>
                <CardActionArea
                  to={`/dashboard/jobs/discuss`}
                  component={RouterLink}
                >
                  <AppWidgetSummary title="To Discuss" total={discuss.length} />
                </CardActionArea>
              </Grid>
            </Grid>
          </>
        )}
      </Container>
    </Page>
  );
}

// ----------------------------------------------------------------------
