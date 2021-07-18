import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

import Job from "./Job/job";
import useStyles from "./styles";

const Jobs = ({ setCurrentId, openPopup, setOpenPopup }) => {
  const { jobs, isLoading } = useSelector((state) => state.jobs);
  const classes = useStyles();
  console.log(jobs);
  if (!jobs.length && !isLoading) return "No Posts";
  return isLoading ? (
    <CircularProgress />
  ) : (
    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
      {jobs.map((job) => (
        <Grid key={job._id} item xs={12} sm={12} md={12} lg={12}>
          <Job job={job} setCurrentId={setCurrentId} openPopup={openPopup} setOpenPopup={setOpenPopup} />
        </Grid>
      ))}
    </Grid>
  );
};
export default Jobs;
