import React, { useState, useEffect } from "react";
import { Grid, Fab, IconButton, Tooltip } from "@material-ui/core";
import { useDispatch } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import BookmarkOutlinedIcon from "@material-ui/icons/BookmarkOutlined";

import { getJobs, getFavoriteJobs } from "../../actions/jobs";
import useStyles from "./styles";
import Jobs from "../Jobs/jobs";
import Form from "../Form/form";
import Favorites from "../Favorites/Favorites";
import Filter from "../Filter/Filter";
import SearchBar from "../SearchBar/SearchBar";

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [openFavoritePopup, setOpenFavoritePopup] = useState(false);
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(getJobs());
  }, [currentId]);
  return (
    <>
      {user?.result?.role === "1" && (
        <>
          <Fab size="medium" color="primary" style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: "100" }} onClick={() => setOpenPopup(true)}>
            <AddIcon />
          </Fab>
          <Fab size="medium" color="secondary" style={{ position: "fixed", bottom: "80px", right: "20px", zIndex: "100" }} onClick={() => setOpenFavoritePopup(true)}>
            <BookmarkOutlinedIcon />
          </Fab>
        </>
      )}
      {user?.result && user.result.role === "0" && (
        <Fab size="medium" color="secondary" style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: "100" }}>
          <BookmarkOutlinedIcon />
        </Fab>
      )}
      <Form openPopup={openPopup} currentId={currentId} setOpenPopup={setOpenPopup} setCurrentId={setCurrentId} />
      <Favorites openFavoritePopup={openFavoritePopup} setOpenFavoritePopup={setOpenFavoritePopup} />
      <Grid className={classes.gridContainer} container justify="space-between" alignItems="stretch" spacing={3}>
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <Filter />
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={9}>
          <Grid item>
            <Grid className={classes.searchBar}>
              <SearchBar />
            </Grid>
          </Grid>
          <Grid item>
            <Jobs setCurrentId={setCurrentId} openPopup={openPopup} setOpenPopup={setOpenPopup} openFavoritePopup={openFavoritePopup} />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
