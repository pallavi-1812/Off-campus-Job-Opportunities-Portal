import React, { useState, useEffect } from "react";
import { TextField, Grid, Button, Typography, IconButton } from "@material-ui/core";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import useStyles from "./styles";
import { getFavoriteJobs, getJobs } from "../../actions/jobs";
import Jobs from "./../Jobs/jobs";

const Favorites = ({ openFavoritePopup, setOpenFavoritePopup }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
  useEffect(() => {
    if (openFavoritePopup == true) dispatch(getFavoriteJobs());
    else dispatch(getJobs());
  }, [openFavoritePopup]);
  return (
    <Dialog open={openFavoritePopup} maxWidth="lg" classes={{ paper: classes.dialogWrapper }}>
      <Grid container>
        <Grid item xs={12} md={12}>
          <DialogTitle className={classes.dialogTitle} style={{ padding: "0" }}>
            <div style={{ display: "flex" }}>
              <Typography variant="h6" component="h6" style={{ flexGrow: 1, display: "flex", alignItems: "center", textAlign: "center" }}>
                Favorites
              </Typography>
              <IconButton
                className={classes.root1}
                color="secondary"
                onClick={() => {
                  setOpenFavoritePopup(false);
                }}
              >
                <CloseIcon />
              </IconButton>
            </div>
          </DialogTitle>
          <DialogContent dividers>
            <Jobs openFavoritePopup={openFavoritePopup} openPopup={false} />
          </DialogContent>
        </Grid>
      </Grid>
    </Dialog>
  );
};
export default Favorites;
