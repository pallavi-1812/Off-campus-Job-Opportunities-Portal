import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Grid, Typography, IconButton } from "@material-ui/core";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

import { getFavoriteJobs, getJobs } from "../../actions/jobs";
import Jobs from "./../Jobs/jobs";
import useStyles from "./styles";

const Favorites = ({ openFavoritePopup, setOpenFavoritePopup }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  useEffect(() => {
    // eslint-disable-next-line
    if (openFavoritePopup == true) dispatch(getFavoriteJobs());
    else dispatch(getJobs()); // eslint-disable-next-line
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
