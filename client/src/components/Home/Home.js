import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Grid, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import BookmarkOutlinedIcon from "@material-ui/icons/BookmarkOutlined";

import { getJobs } from "../../actions/jobs";
import Jobs from "../Jobs/jobs";
import Form from "../Form/form";
import Favorites from "../Favorites/Favorites";
import Filter from "../Filter/Filter";
import SearchBar from "../SearchBar/SearchBar";
import useStyles from "./styles";

const Home = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [openFavoritePopup, setOpenFavoritePopup] = useState(false);
  const user = JSON.parse(localStorage.getItem("profile"));

  useEffect(() => {
    dispatch(getJobs()); // eslint-disable-next-line
  }, [currentId]);
  return (
    <>
      {user?.result?.role === "1" && (
        <>
          <Fab size="medium" style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: "100", backgroundColor: "#0062ff", color: "#fff" }} onClick={() => setOpenPopup(true)}>
            <AddIcon />
          </Fab>
          <Fab size="medium" color="secondary" style={{ position: "fixed", bottom: "80px", right: "20px", zIndex: "100" }} onClick={() => setOpenFavoritePopup(true)}>
            <BookmarkOutlinedIcon />
          </Fab>
        </>
      )}
      {user?.result && (user.result.role === "0" || user.result.googleId) && (
        <Fab size="medium" color="secondary" style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: "100" }} onClick={() => setOpenFavoritePopup(true)}>
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
