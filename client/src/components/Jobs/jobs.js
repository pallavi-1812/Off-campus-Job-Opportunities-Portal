import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress, Typography } from "@material-ui/core";

import Job from "./Job/job";
import useStyles from "./styles";

const Jobs = ({ setCurrentId, openPopup, setOpenPopup, openFavoritePopup }) => {
  const { jobs, isLoading } = useSelector((state) => {
    return state.jobs;
  });

  const classes = useStyles();

  if (!jobs.length && !isLoading) return (
    <Grid className={classes.noPosts}>
      <Typography variant="h5" style={{ fontWeight: "500", fontSize: "2rem" }}>No Posts</Typography>
    </Grid>
  );

  return isLoading ? (
    <Grid className={classes.loading}>
      <CircularProgress />
    </Grid>
  ) : (
    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      {jobs.map((job) => (
        <Grid key={job._id} item xs={12} sm={12} md={12} lg={12}>
          <Job job={job} setCurrentId={setCurrentId} openPopup={openPopup} setOpenPopup={setOpenPopup} openFavoritePopup={openFavoritePopup} />
        </Grid>
      ))}
    </Grid>
  );
};
export default Jobs;
