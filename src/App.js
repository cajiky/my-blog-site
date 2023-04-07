import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { lightTheme, darkTheme } from "./styles/themes";


//Importing components
import NavigationBar from "./components/navbar";
import Blog from "./components/blog";
import BlogPostPage from "./components/blogPostPage";

function App() {
  const [theme, setTheme] = useState("dark");

const appliedTheme = theme === "light" ? lightTheme : darkTheme;
console.log("Applied theme:", appliedTheme);

return (
  <ThemeProvider theme={appliedTheme}>
    <CssBaseline />
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/blog" element={<Blog />}/>
        <Route path="/blog/:postId" element={<BlogPostPage />} />
        <Route />
      </Routes>
    </Router>
  </ThemeProvider>
);
}

export default App;
