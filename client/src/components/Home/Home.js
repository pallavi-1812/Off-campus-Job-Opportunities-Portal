import React, { useState, useEffect } from "react";
import { Container, Grow, Grid, Paper, AppBar, TextField, Button, Toolbar, Box, Typography, Fab } from "@material-ui/core";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import ChipInput from "material-ui-chip-input";
import AddIcon from "@material-ui/icons/Add";
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
    <>
      {user?.result?.role === "1" && (
        <Fab size="medium" color="primary" style={{ position: "absolute", right: "10px", zIndex: "100" }} onClick={() => setOpenPopup(true)}>
          <AddIcon />
        </Fab>
      )}
      <Form openPopup={openPopup} currentId={currentId} setOpenPopup={setOpenPopup} setCurrentId={setCurrentId} />
      <Grid className={classes.gridContainer} container justify="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={3}>
          <Filter />
        </Grid>
        <Container maxWidth="md">
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Jobs setCurrentId={setCurrentId} setOpenPopup={setOpenPopup} />
          </Grid>
        </Container>
      </Grid>
    </>
  );
};

export default Home;
