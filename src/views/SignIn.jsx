import React from "react";
import { Button, Typography, Grid } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { getUser } from "../redux/user/actions";

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogIn = () => {
    dispatch(getUser("ben"));
  };

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={2}
      style={{ height: "30vh" }} // Adjust the height to fit your needs
    >
      <Grid item>
        <Typography>Welcome to this Release - hooooo</Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" disableElevation onClick={handleLogIn}>
          Log In
        </Button>
      </Grid>
    </Grid>
  );
}
