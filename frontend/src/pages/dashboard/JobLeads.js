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
  Button,
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

// ----------------------------------------------------------------------

const TABLE_HEAD = [
  { id: "stage", label: "Stage", alignRight: false },
  { id: "name", label: "Name", alignRight: false },
  { id: "phone", label: "Phone", alignRight: false },
  { id: "email", label: "Email", alignRight: false },
  { id: "address", label: "Address", alignRight: false },
  { id: "" },
];

// ----------------------------------------------------------------------

export default function UserList() {
  const dispatch = useDispatch();

  const { jobs, isLoading } = useSelector((state) => state.jobs);
  const leads = jobs.filter(
    (job) => job.stage === "lead" && !job.discuss && !job.highlight
  );

  useEffect(() => {
    dispatch(getJobs());
  }, [dispatch]);

  const { themeStretch } = useSettings();

  return (
    <Page title="User: List">
      <Container maxWidth={themeStretch ? false : "lg"}>
        <Button
          to={`/dashboard/app`}
          component={RouterLink}
          size="large"
          variant="contained"
          sx={{ my: "20px" }}
        >
          Home Button
        </Button>
        {isLoading ? (
          <h1>Loading... Just wait 2 sec Chris</h1>
        ) : (
          <>
            <h1>Sent</h1>
            <Card>
              <Scrollbar>
                <TableContainer sx={{ minWidth: 800 }}>
                  <Table>
                    <UserListHead headLabel={TABLE_HEAD} />
                    <TableBody>
                      {leads.map((row) => {
                        const { _id, stage, name, mobile, email, address } =
                          row;
                        return (
                          <TableRow
                            hover
                            key={_id}
                            to={`/dashboard/job/${_id}`}
                            component={RouterLink}
                            sx={{ textDecoration: "none" }}
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
          </>
        )}
      </Container>
    </Page>
  );
}
