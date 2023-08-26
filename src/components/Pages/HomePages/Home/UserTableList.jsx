import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "../../../RTK features/Slices/users/userSlice";
import {
  Box,
  Paper,
  Skeleton,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { Stack, TableContainer, Table } from "@mui/material";
import { StyledSection } from "../../../Style/AccessThemes";

const UserTableList = () => {
  const data = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <StyledSection>
      <Stack
        spacing={2}
        sx={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          pt: "90px",
          pb: "7px",
          width: "100%",
          height: 800,
        }}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography variant="h2" color="inherit">
            Specific Details About Users :
          </Typography>
        </Box>
        {data.loading && (
          <Typography variant="h2" color="inherit">
            <Skeleton
              variant="rectangular"
              animation="wave"
              width={350}
              height={250}
            />
          </Typography>
        )}
        {!data.loading && data.error ? (
          <Typography variant="h2" color="inherit">
            Error: {data.error}
          </Typography>
        ) : null}
        {!data.loading && data.data.length ? (
          <TableContainer component={Paper} sx={{ maxHeight: "500px" }}>
            <Table
              aria-label="simple table"
              sx={{ minWidth: 1050 }}
              stickyHeader
            >
              <TableHead>
                <TableRow>
                  <TableCell>Id</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell align="center">User Name</TableCell>
                  <TableCell align="center">E-mail</TableCell>
                  <TableCell align="center">Phone</TableCell>
                  <TableCell align="center">Website</TableCell>
                  <TableCell align="center">Address</TableCell>
                  <TableCell align="center">Company</TableCell>
                </TableRow>
              </TableHead>
            </Table>
            <Table>
              <TableBody>
                {data.data.map((user) => (
                  <TableRow
                    key={user.id}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      {user.id}
                    </TableCell>
                    <TableCell align="center">{user.name}</TableCell>
                    <TableCell align="right">{user.username}</TableCell>
                    <TableCell align="right">{user.email}</TableCell>
                    <TableCell align="center">{user.phone}</TableCell>
                    <TableCell align="right">{user.website}</TableCell>
                    <TableCell align="center">
                      {user.address.street},{user.address.suite}
                    </TableCell>
                    <TableCell align="center">{user.company.name},</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        ) : null}
      </Stack>
    </StyledSection>
  );
};

export default UserTableList;
