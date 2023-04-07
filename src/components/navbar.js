import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";


const NavigationBar = () => {
    return(
        //The JSX which makes up the Navigation Bar will go here
        <AppBar position="static">
            <Toolbar>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ mr: 2 }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variatnt="h6" component="div" sx={{ flexGrow: 1 }}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Button color="inherit">Home</Button>
                    </Link>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <Button color="inherit">Blog</Button>
                    </Link>
                    <Button color="inherit">Resume</Button>
                    <Link to="/newPost" style ={{ textDecoration: 'none' }}>
                        <Button color="inherit">New Post</Button>
                    </Link>
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default NavigationBar;