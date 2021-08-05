import React from "react";
import clsx from "clsx";
import { Card, CardActions, CardContent, Button, Typography, Grid, IconButton, Collapse, Divider, Tooltip, Chip } from "@material-ui/core/";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import BookmarkOutlinedIcon from "@material-ui/icons/BookmarkOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EditIcon from "@material-ui/icons/Edit";
import { useDispatch } from "react-redux";
import moment from "moment";

import { likeJob, deleteJob } from "../../../actions/jobs";
import useStyles from "./styles";

const Job = ({ job, setCurrentId, openPopup, setOpenPopup, openFavoritePopup }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("profile"));
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const Favorites = () => {
    if (job.favorites.length > 0) {
      return job.favorites.find((favorite) => favorite === (user?.result?.googleId || user?.result?._id)) ? (
        <>
          <BookmarkOutlinedIcon fontSize="small" />
        </>
      ) : (
        <>
          <BookmarkBorderOutlinedIcon fontSize="small" />
        </>
      );
    }
    return (
      <>
        <BookmarkBorderOutlinedIcon fontSize="small" />
      </>
    );
  };

  const handleClick = () => {
    setCurrentId(job._id);
    setOpenPopup(true);
  };

  return (
    <Card className={classes.card} raised elevation={6}>
      <CardContent className={classes.cardContent}>
        <Typography variant="subtitle2" align="right">
          {moment(job.createdAt).fromNow()}
        </Typography>
        <Grid container className={classes.gridContainer} justify="space-between" alignItems="stretch" spacing={0}>
          <Grid item xs={12}>
            <Typography style={{ color: "#0062ff" }} variant="h4" display="inline" className={classes.title}>
              {job.jobTitle && `${job.jobTitle}`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h5" style={{ fontWeight: "500" }} display="inline" className={classes.title}>
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
            <Typography variant="subtitle1" display="inline" className={classes.title}>
              {job.jobType && job.jobType.map((item, i) => <Chip key={i} size="small" label={item} style={{ marginRight: "3px", backgroundColor: "#d1e1fb", color: "#0062ff" }} />)}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" style={{ fontWeight: "500" }} display="inline" className={classes.title}>
              {job.salary && `${job.salary}`}
            </Typography>
          </Grid>
          <Grid container flexdirection="row">
            <Grid item xs={12} lg={6}>
              {job.startDate && (
                <Typography style={{ color: "#808080" }} variant="subtitle1" display="inline" className={classes.title}>
                  Start Date: {moment(new Date(job.startDate)).format("DD-MM-YYYY")}
                </Typography>
              )}
            </Grid>
            <Grid item xs={12} lg={6}>
              {job.duration && (
                <Typography style={{ color: "#808080" }} variant="subtitle1" display="inline" className={classes.title}>
                  Duration: {job.duration}
                </Typography>
              )}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
      {openPopup === false ? (
        <CardActions className={classes.cardActions}>
          <Grid className={classes.applyBtn}>
            <Button className={classes.apply} style={{ backgroundColor: "#0062ff", color: "#fff" }} variant="contained" href={job.applyLink}>
              Apply
            </Button>
          </Grid>
          <Grid className={classes.icons}>
            <Tooltip title="Save">
              <span>
                <IconButton className={classes.expand} color="secondary" disabled={!user?.result} onClick={() => dispatch(likeJob(job._id))}>
                  <Favorites />
                </IconButton>
              </span>
            </Tooltip>
            {openFavoritePopup === false && user?.result?.role === "1" && (
              <Tooltip title="Edit">
                <IconButton className={classes.expand} style={{ color: "#0062ff" }} onClick={handleClick}>
                  <EditIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            )}
            {user?.result?.role === "1" && (
              <Tooltip title="Delete">
                <IconButton className={classes.expand} color="secondary" onClick={() => dispatch(deleteJob(job._id))}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            )}
            <Tooltip title="More Information">
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
              >
                <ExpandMoreIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Grid>
        </CardActions>
      ) : (
        <CardActions className={classes.cardActions}>
          <Grid className={classes.applyBtn}>
            <Button className={classes.expand} style={{ backgroundColor: "#0062ff", color: "#fff" }} variant="contained">
              Apply
            </Button>
          </Grid>
          <Grid className={classes.icons}>
            <span>
              <IconButton className={classes.expand} color="secondary" disabled={!user?.result}>
                <BookmarkBorderOutlinedIcon />
              </IconButton>
            </span>
            {user?.result?.role === "1" && (
              <IconButton className={classes.expand} style={{ color: "#0062ff" }}>
                <EditIcon fontSize="small" />
              </IconButton>
            )}
            {user?.result?.role === "1" && (
              <IconButton className={classes.expand} color="secondary">
                <DeleteIcon fontSize="small" />
              </IconButton>
            )}
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
            >
              <ExpandMoreIcon fontSize="small" />
            </IconButton>
          </Grid>
        </CardActions>
      )}
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <Divider />
        <CardContent className={classes.cardContent}>
          {job.description.ReqSkills && (
            <>
              <Typography variant="h6" style={{ fontWeight: "500" }}>
                Required Skills
              </Typography>
              {job.description.ReqSkills.split(",").map((item, i) => (
                <Chip key={i} size="small" label={item} style={{ marginRight: "3px", backgroundColor: "#d1e1fb", color: "#0062ff" }} />
              ))}
              <br />
            </>
          )}
          {job.description.Info && (
            <>
              <Typography variant="h6" style={{ fontWeight: "500", marginTop: "0.7rem" }}>
                Description
              </Typography>
              <Typography paragraph style={{ color: "#808080" }}>
                {job.description.Info}
              </Typography>
            </>
          )}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Job;
