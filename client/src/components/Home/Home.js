import React, { useState, useEffect } from "react";
import { Container, Grow, Grid, Paper, AppBar, TextField, Button, Toolbar, Tab, Tabs, Box, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import ChipInput from "material-ui-chip-input";
import Controls from "../Controls/Controls";

import { getJobs, getJobsBySearch } from "../../actions/jobs";
import useStyles from "./styles";
import Jobs from "../Jobs/jobs";
import Form from "../Form/form";
import Filter from "../Filter/Filter";

const Home = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("profile"));
  const dispatch = useDispatch();

  const [value, setValue] = useState(0);
  const [openPopup, setOpenPopup] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    dispatch(getJobs());
  }, [currentId, dispatch]);
  return (
    <Grow in>
      <Container maxWidth="xl">
        {user?.result?.role === "1" && (
          <Toolbar>
            <Button variant="outlined" color="primary" style={{ position: "absolute", right: "10px" }} onClick={() => setOpenPopup(true)}>
              Add New
            </Button>
          </Toolbar>
        )}
        <Form openPopup={openPopup} currentId={currentId} setOpenPopup={setOpenPopup} setCurrentId={setCurrentId} />
        <Container>
          <Grid className={classes.gridContainer} container justify="center" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={12} md={12} lg={4}>
              <Filter />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={7}>
              <Jobs setCurrentId={setCurrentId} setOpenPopup={setOpenPopup} />
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Grow>
  );
};

export default Home;
