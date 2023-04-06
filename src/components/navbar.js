import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";


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
                    <Button color="inherit">Home</Button>
                    <Button color="inherit">Blog</Button>
                    <Button color="inherit">Resume</Button>
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default NavigationBar;