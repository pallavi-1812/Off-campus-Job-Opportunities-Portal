import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { Link } from "react-router-dom";
import RightMenu from "./Sections/RightMenu";
import useStyles from "./styles";
const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar} position="static" color="inherit" elevation={5} width="100%">
      <Link to="/" className={classes.brandContainer}>
        <p className={classes.title}>JobFinder</p>
      </Link>
      <Toolbar className={classes.toolbar} variant="dense">
        <RightMenu />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
