import React, { useState } from "react";
import { Button, TextField, Grid, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";
import api from "../api";

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("/users/register", { username, password });
      console.log(response.data, "this is the data we get returned from our handleSubmit")
      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response.data.message || "Error registering user");
    }
  };

  return (
    <StyledContainer maxWidth="xs">
      <Typography variant="h5">Register</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              type="password"
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <Button fullWidth variant="contained" color="primary" type="submit">
              Register
            </Button>
          </Grid>
        </Grid>
      </form>
      {message && (
        <Typography variant="body1" color="error">
          {message}
        </Typography>
      )}
    </StyledContainer>
  );
};

export default Register;
