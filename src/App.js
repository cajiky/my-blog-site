import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { lightTheme, darkTheme } from "./styles/themes";
import React, { useState } from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  const appliedTheme = theme === "light" ? lightTheme : darkTheme;
  console.log("Applied theme:", appliedTheme);

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <Typography variant="p">Hello, this is paragraph Typography!</Typography>
      <Typography variant="h3">Hello, this is a h3 Typography!</Typography>
      <Typography variant="h2">Hello, this is h2 Typography!</Typography>
      <Typography variant="h1">Hello, this is h1 Typography!</Typography>
      {/* Your app content here */}
    </ThemeProvider>
  );
}

export default App;
