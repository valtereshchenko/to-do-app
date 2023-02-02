import React from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Link,
} from "@mui/material";

export default function LoginMUI() {
  function handleSubmit(event: any) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get("email");
    const password = data.get("password");
  }
  return (
    <Container component="main">
      <Box>
        <Typography component="h1" variant="h5">
          Sign In
        </Typography>
        <Box component="form">
          <TextField
            margin="normal"
            required
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
          ></TextField>
          <TextField
            margin="normal"
            required
            id="password"
            label="Password"
            name="password"
            autoComplete="password"
          ></TextField>
          <Button
            type="submit"
            variant="contained"
            onClick={(e) => {
              handleSubmit(e);
            }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs={8}>
              <Link href="/home">Forgot password?</Link>
            </Grid>
            <Grid item xs={8}>
              <Link href="/register">{"Don't have an account? Sign Up"}</Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}
