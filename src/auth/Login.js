import React, { useState } from "react";
import { Button, TextField, Grid, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";
import axios from "axios";

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("/api/users/login", { username, password });
      localStorage.setItem("token", response.data.token);
      setMessage("Login successful");
    } catch (error) {
      setMessage(error.response.data.message || "Error logging in user");
    }
  };

  return (
    <StyledContainer maxWidth="xs">
      <Typography variant="h5">Login</Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* ... */}
        </Grid>
      </form>
      {message && <Typography variant="subtitle2">{message}</Typography>}
    </StyledContainer>
  );
};

export default Login;
