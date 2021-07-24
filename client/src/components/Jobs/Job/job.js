import React from "react";
import clsx from "clsx";
import { Card, CardActions, CardContent, Button, Typography, Grid, IconButton, Collapse, Divider } from "@material-ui/core/";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EditIcon from "@material-ui/icons/Edit";
import { useDispatch } from "react-redux";
import moment from "moment";
import { likeJob, deleteJob } from "../../../actions/jobs";
import useStyles from "./styles";

const Job = ({ job, setCurrentId, openPopup, setOpenPopup }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClick = () => {
    setCurrentId(job._id);
    setOpenPopup(true);
  };

  return (
    <Card className={classes.card} raised elevation={6}>
      <CardContent className={classes.cardContent}>
        <Typography variant="subtitle2" align="right">{moment(job.createdAt).fromNow()}</Typography>
        <Grid container className={classes.gridContainer} justify="space-between" alignItems="stretch" spacing={0}>
          <Grid item xs={12}>
            <Typography variant="h4" display="inline" className={classes.title}>
              {job.company && `${job.company}`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {(job.Location.City || job.Location.State) && (
              <Typography variant="subtitle1" display="inline" className={classes.title}>
                {job.Location.City && job.Location.State ? Object.values(job.Location).join(", ") : (job.Location.City ? job.Location.City : "") || (job.Location.State ? job.Location.State : "")}
              </Typography>
            )}
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" display="inline" className={classes.title}>
              {job.jobTitle && `${job.jobTitle}`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="subtitle1" display="inline" className={classes.title}>
              {job.jobType && `${job.jobType}`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" display="inline" className={classes.title}>
              {job.salary && `${job.salary}`}
            </Typography>
          </Grid>
          <Grid container flexdirection="row">
            <Grid item xs={12} lg={6}>
              {job.startDate && (
                <Typography variant="h6" display="inline" className={classes.title}>
                  Start Date: {moment(job.startDate).format("DD-MM-YYYY")}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} lg={6}>
              {job.duration && (
                <Typography variant="h6" display="inline" className={classes.title}>
                  Duration: {job.duration}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      {openPopup === false ? (
        <CardActions className={classes.cardActions}>
          <IconButton className={classes.expand} color="secondary" disabled={!user?.result} onClick={() => dispatch(likeJob(job._id))}>
            <FavoriteBorderOutlinedIcon />
          </IconButton>
          {user?.result?.role === "1" && (
            <IconButton className={classes.expand} color="primary" onClick={handleClick}>
              <EditIcon fontSize="small" />
            </IconButton>
          )}
          {user?.result?.role === "1" && (
            <IconButton className={classes.expand} color="secondary" onClick={() => dispatch(deleteJob(job._id))}>
              <DeleteIcon fontSize="small" />
            </IconButton>
          )}
          <Button className={classes.expand} color="secondary" href={job.applyLink}>
            Apply
          </Button>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
          >
            <ExpandMoreIcon fontSize="small" />
          </IconButton>
        </CardActions>
      ) : (
        <CardActions className={classes.cardActions}>
          <IconButton className={classes.expand} color="secondary" disabled={!user?.result}>
            <FavoriteBorderOutlinedIcon />
          </IconButton>
          {user?.result?.role === "1" && (
            <IconButton className={classes.expand} color="primary">
              <EditIcon fontSize="small" />
            </IconButton>
          )}
          {user?.result?.role === "1" && (
            <IconButton className={classes.expand} color="secondary">
              <DeleteIcon fontSize="small" />
            </IconButton>
          )}
          <Button className={classes.expand} color="secondary">
            Apply
          </Button>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
          >
            <ExpandMoreIcon fontSize="small" />
          </IconButton>
        </CardActions>
      )}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Divider />
        <CardContent>
          <Typography variant="h6">Description</Typography>
          <Typography paragraph>{job.description.Info}</Typography>
          <Typography variant="h6">Required Skills</Typography>
          <Typography paragraph>{job.description.Rewards}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Job;
