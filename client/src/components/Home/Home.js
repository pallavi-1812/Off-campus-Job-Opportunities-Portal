import React, { useState, useEffect } from "react";
import { Container, Grid, Fab } from "@material-ui/core";
import { useDispatch } from "react-redux";
import AddIcon from "@material-ui/icons/Add";

import { getJobs } from "../../actions/jobs";
import useStyles from "./styles";
import Jobs from "../Jobs/jobs";
import Other from "../Jobs/Job/other";
import Form from "../Form/form";
import Filter from "../Filter/Filter";
import { Tabs, Tab } from "@material-ui/core";
import SearchBar from "../SearchBar/SearchBar";

const Home = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);

  const { match, history } = props;
  const { params } = match;
  const { page } = params;

  const tabNameToIndex = {
    0: "tpc",
    1: "others",
  };

  const indexToTabName = {
    tpc: 0,
    others: 1,
  };
  console.log(props);
  console.log(params);
  console.log(page);
  const [selectedTab, setSelectedTab] = useState(indexToTabName[page]);

  const handleChange = (event, newValue) => {
    history.push(`/jobs/${tabNameToIndex[newValue]}`);
    setSelectedTab(newValue);
  };

  const user = JSON.parse(localStorage.getItem("profile"));
  useEffect(() => {
    dispatch(getJobs());
  }, [currentId]);
  return (
    <>
      <Grid className={classes.gridContainer} container justify="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Filter />
        </Grid>
        <Container maxWidth="md">
          <SearchBar />
        <Grid item xs={12} sm={12} md={9} lg={9}>
          <Tabs value={selectedTab} onChange={handleChange}>
            <Tab label="tpc" />
            <Tab label="others" />
          </Tabs>
          {selectedTab === 0 && (
            <>
              {user?.result?.role === "1" && (
                <Fab size="medium" color="primary" style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: "100" }} onClick={() => setOpenPopup(true)}>
                  <AddIcon />
                </Fab>
              )}
              <Form openPopup={openPopup} currentId={currentId} setOpenPopup={setOpenPopup} setCurrentId={setCurrentId} />
              <Jobs setCurrentId={setCurrentId} openPopup={openPopup} setOpenPopup={setOpenPopup} />
            </>
          )}
          {selectedTab === 1 && <Other />}
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
