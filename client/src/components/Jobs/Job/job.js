import React from "react";
import clsx from "clsx";
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ButtonBase, IconButton, Collapse, Divider } from "@material-ui/core/";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import FavoriteOutlinedIcon from "@material-ui/icons/FavoriteOutlined";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import EditIcon from "@material-ui/icons/Edit";
import { useDispatch } from "react-redux";
import moment from "moment";
import { useHistory } from "react-router-dom";

import { getJob, likeJob, deleteJob } from "../../../actions/jobs";
import useStyles from "./styles";

const Job = ({ job, setCurrentId, setOpenPopup }) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();
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
        <CardContent>
          <Typography component="p">{moment(job.createdAt).fromNow()}</Typography>
          <Typography variant="h6" className={classes.title}>
            {job.jobTitle}
          </Typography>
          <Typography variant="h6" className={classes.title}>
            {job.jobType}
          </Typography>
          <Typography variant="h6" className={classes.title}>
            {job.salary}
          </Typography>
          <Typography variant="h6" className={classes.title}>
            {job.Location.City}
          </Typography>
          <Typography variant="h6" className={classes.title}>
            {job.Location.State}
          </Typography>
          <Typography variant="h6" className={classes.title}>
            {job.duration}
          </Typography>
          <Typography variant="h6" className={classes.title}>
            {job.applyLink}
          </Typography>
          <Typography variant="h6" className={classes.title}>
            {job.company}
          </Typography>
        </CardContent>
      </div>
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
