import React from "react";
import clsx from "clsx";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase, Container, Grid, IconButton, Collapse, Divider } from "@material-ui/core/";
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

  const Likes = () => {
    // if (job.likes.length > 0) {
    //   return job.likes.find((like) => like === (user?.result?.googleId || user?.result?._id)) ? (
    //     <>
    //       <FavoriteOutlinedIcon fontSize="small" />
    //     </>
    //   ) : (
    //     <>
    //       <FavoriteBorderOutlinedIcon fontSize="small" />
    //     </>
    //   );
    // }
    return (
      <>
        <FavoriteBorderOutlinedIcon fontSize="small" />
      </>
    );
  };
  const handleClick = () => {
    setCurrentId(job._id);
    setOpenPopup(true);
  };
  return (
    <Card className={classes.card} raised elevation={6}>
      <div className={classes.details}>
        <CardContent className={classes.cardContent}>
          <Typography component="p">{moment(job.createdAt).fromNow()}</Typography>
          <Grid container className={classes.gridContainer} justify="space-between" alignItems="stretch" spacing={0}>
            <Grid item md={6} sm={12} xs={12}>
              {job.jobTitle && (
                <div>
                  <Typography variant="h6" display="inline" className={classes.title}>
                    Job Title
                  </Typography>
                  <Typography variant="h6" display="inline" className={classes.title}>
                    {job.jobTitle}
                  </Typography>
                </div>
              )}
              {job.jobType.length > 0 && (
                <div>
                  <Typography variant="h6" display="inline" className={classes.title}>
                    Job Type
                  </Typography>
                  <Typography variant="h6" display="inline" className={classes.title}>
                    {job.jobType && job.jobType.join(", ")}
                  </Typography>
                </div>
              )}
              {job.duration && (
                <div>
                  <Typography variant="h6" display="inline" className={classes.title}>
                    Duration
                  </Typography>
                  <Typography variant="h6" display="inline" className={classes.title}>
                    {job.duration}
                  </Typography>
                </div>
              )}
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              {job.company && (
                <div>
                  <Typography variant="h6" display="inline" className={classes.title}>
                    Company
                  </Typography>
                  <Typography variant="h6" display="inline" className={classes.title}>
                    {job.company}
                  </Typography>
                </div>
              )}
              {job.salary && (
                <div>
                  <Typography variant="h6" display="inline" className={classes.title}>
                    Salary
                  </Typography>
                  <Typography variant="h6" display="inline" className={classes.title}>
                    {job.salary}
                  </Typography>
                </div>
              )}
              {job.startDate && (
                <div>
                  <Typography variant="h6" display="inline" className={classes.title}>
                    Start Date
                  </Typography>
                  <Typography variant="h6" display="inline" className={classes.title}>
                    {job.startDate && job.startDate.substring(0, 15)}
                  </Typography>
                </div>
              )}
            </Grid>
            <Grid item sm={12} xs={12}>
              {(job.Location.City || job.Location.State) && (
                <div>
                  <Typography variant="h6" display="inline" className={classes.title}>
                    Location
                  </Typography>
                  <Typography variant="h6" display="inline" className={classes.title}>
                    {job.Location.City && job.Location.State ? Object.values(job.Location).join(", ") : (job.Location.City ? job.Location.City : "") || (job.Location.State ? job.Location.State : "")}
                  </Typography>
                </div>
              )}
            </Grid>
          </Grid>
        </CardContent>
      </div>
      {openPopup === false ? (
        <CardActions className={classes.cardActions}>
          <IconButton className={classes.expand} color="secondary" disabled={!user?.result} onClick={() => dispatch(likeJob(job._id))}>
            <Likes />
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
            <Likes />
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
          <Typography variant="h6">Info</Typography>
          <Typography paragraph>{job.description.Info}</Typography>
          <Typography variant="h6">Required Skills</Typography>
          <Typography paragraph>{job.description.ReqSkills}</Typography>
          <Typography variant="h6">Eligibility</Typography>
          <Typography paragraph>{job.description.Eligibility}</Typography>
          <Typography variant="h6">Rewards</Typography>
          <Typography paragraph>{job.description.Rewards}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Job;
