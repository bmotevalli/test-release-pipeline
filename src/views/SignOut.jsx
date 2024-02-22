import React from 'react'
import { Button, Typography, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { getUser } from '../redux/user/actions';

export default function SignIn() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const user = useSelector(s => s.user.user)

  const handleSignOut = () => {
    dispatch(getUser(null)) 
  }

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={2}
      style={{ height: '30vh' }} // Adjust the height to fit your needs
    >
      <Grid item>
        <Typography>You are now logged in - Frontend 1</Typography>
      </Grid>
      <Grid item>
        <Button variant="contained" disableElevation onClick={handleSignOut}>Go To Projects</Button>
      </Grid>
      <Grid item>
      <Button variant="contained" disableElevation onClick={handleSignOut}>Sign Out</Button>
      </Grid>
    </Grid>
  )
}
