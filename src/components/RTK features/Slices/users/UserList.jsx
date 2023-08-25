import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./userSlice";
import { Box, Container, Grid, Skeleton, Typography } from "@mui/material";
import UserCard from "../../../Pages/HomePages/Home/UserCard";

const UserList = () => {
  const data = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <Box>
      <Typography
        variant="h2"
        color="inherit"
        sx={{ mt: 10, textAlign: "center" }}
      >
        List of Users
      </Typography>
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
        <Container>
          <Grid container spacing={3}>
            {data.data.map((user) => (
              <Grid item key={user.id} xs={12} md={6} lg={4}>
                <UserCard user={user} />
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : null}
    </Box>
  );
};

export default UserList;
