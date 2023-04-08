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
import NewPost from "./components/newPost";
import Register from "./auth/Register";
import Login from "./auth/Login";

function App() {
  const [theme, setTheme] = useState("dark");

const appliedTheme = theme === "light" ? lightTheme : darkTheme;

return (
  <ThemeProvider theme={appliedTheme}>
    <CssBaseline />
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/blog" element={<Blog />}/>
        <Route path="/blog/:postId" element={<BlogPostPage />} />
        <Route path="/newPost" element={<NewPost/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route />
      </Routes>
    </Router>
  </ThemeProvider>
);
}

export default App;
