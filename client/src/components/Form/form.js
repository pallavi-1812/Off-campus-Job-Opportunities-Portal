import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { TextField, Grid, Button, Typography, IconButton } from "@material-ui/core";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";

import { data } from "../../resources/cityData";
import { jobs } from "../../resources/jobData";
import { states } from "../../resources/stateData";
import DatePicker from "../Controls/DatePicker";
import { jobTypeData } from "../../resources/jobTypeData";
import { createJob, updateJob } from "../../actions/jobs";
import Job from "./../Jobs/Job/job";
import useStyles from "./styles";

const Form = ({ openPopup, currentId, setOpenPopup, setCurrentId }) => {
  const [jobData, setJobData] = useState({
    jobTitle: "",
    jobType: [],
    postedBy: "TPC",
    duration: "",
    salary: "",
    company: "",
    startDate: null,
    Location: {
      City: "",
      State: "",
    },
    description: {
      Info: "",
      ReqSkills: "",
    },
    applyLink: "",
  });
  const job = useSelector((state) => (currentId ? state.jobs.jobs.find((message) => message._id === currentId) : null));
  const dispatch = useDispatch();
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    if (job) setJobData(job);
  }, [job, dispatch]);

  const clear = () => {
    setCurrentId(null);
    setJobData({
      jobTitle: "",
      jobType: [],
      postedBy: "TPC",
      duration: "",
      salary: "",
      company: "",
      startDate: null,
      Location: {
        City: "",
        State: "",
      },
      description: {
        Info: "",
        ReqSkills: "",
      },
      applyLink: "",
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateJob(currentId, jobData, history));
    } else {
      dispatch(createJob(jobData, history));
    }
    clear();
    setOpenPopup(false);
  };
  const MyAutocomplete = withStyles({
    tag: {
      backgroundColor: "#0062ff",
      height: 24,
      position: "relative",
      zIndex: 0,
      "& .MuiChip-label": {
        color: "#ffffff",
      },
      "& .MuiChip-deleteIcon": {
        color: "#fff",
      },
    },
  })(Autocomplete);
  return (
    <Dialog open={openPopup} maxWidth="lg" classes={{ paper: classes.dialogWrapper }}>
      <Grid container className={classes.Preview}>
        <Grid item xs={12} md={6}>
          <DialogTitle className={classes.dialogTitle} style={{ paddingTop: "0", paddingBottom: "0" }}>
            <div style={{ display: "flex" }}>
              <Typography variant="h5" component="h6" style={{ flexGrow: 1, display: "flex", alignItems: "center", textAlign: "center", padding: "8.75px", fontWeight: "530" }}>
                Preview
              </Typography>
            </div>
          </DialogTitle>
          <DialogContent className={classes.dialogContent} dividers>
            <Job job={jobData} />
          </DialogContent>
        </Grid>
        <Grid item xs={12} md={6}>
          <DialogTitle className={classes.dialogTitle} style={{ paddingTop: "0", paddingBottom: "0" }}>
            <div style={{ display: "flex" }}>
              <Typography variant="h5" component="h6" style={{ flexGrow: 1, display: "flex", alignItems: "center", textAlign: "center", fontWeight: "530" }}>
                {currentId ? `Editing ${jobData.jobTitle} Post` : "Creating Job Post"}
              </Typography>
              <IconButton
                className={classes.root1}
                color="secondary"
                onClick={() => {
                  setOpenPopup(false);
                  clear();
                }}
              >
                <CloseIcon />
              </IconButton>
            </div>
          </DialogTitle>
          <DialogContent className={classes.dialogContent} dividers>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
              <>
                <Grid container alignItems="stretch" spacing={1}>
                  <Grid item xs={12} sm={12} md={6}>
                    <Autocomplete
                      size="small"
                      fullWidth
                      id="jobtitle"
                      filterSelectedOptions
                      inputValue={jobData.jobTitle ? jobData.jobTitle : ""}
                      options={jobs}
                      getOptionSelected={(option, value) => option.name === value.name}
                      getOptionLabel={(option) => (option.name ? option.name : "")}
                      groupBy={(option) => option.firstLetter}
                      onChange={(e, v) => {
                        if (v == null) setJobData({ ...jobData, jobTitle: "" });
                        else setJobData({ ...jobData, jobTitle: v.name });
                      }}
                      renderInput={(params) => (
                        <TextField {...params} onChange={({ target }) => setJobData({ ...jobData, jobTitle: target.value })} variant="outlined" name="jobTitle" label="Job Title" />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <MyAutocomplete
                      fullWidth
                      size="small"
                      multiple
                      id="jobtypes"
                      value={jobData.jobType || []}
                      filterSelectedOptions
                      options={jobTypeData}
                      getOptionLabel={(option) => (option ? option : "")}
                      getOptionSelected={(option, value) => option === value}
                      onChange={(e, v) => {
                        if (v == null) setJobData({ ...jobData, jobType: [] });
                        else setJobData({ ...jobData, jobType: v });
                      }}
                      renderInput={(params) => (
                        <TextField {...params} onChange={({ target }) => setJobData({ ...jobData, jobType: target.value })} variant="outlined" name="jobType" label="Job Type" />
                      )}
                    />
                  </Grid>
                </Grid>
                <Grid container alignItems="stretch" spacing={1}>
                  <Grid item xs={12} sm={12} md={6}>
                    <TextField
                      size="small"
                      name="salary"
                      variant="outlined"
                      label="Salary"
                      fullWidth
                      rows={4}
                      value={jobData.salary}
                      onChange={(e) => setJobData({ ...jobData, salary: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <TextField
                      size="small"
                      name="duration"
                      variant="outlined"
                      label="Duration"
                      fullWidth
                      rows={4}
                      value={jobData.duration}
                      onChange={(e) => setJobData({ ...jobData, duration: e.target.value })}
                    />
                  </Grid>
                </Grid>
                <Grid container alignItems="stretch" spacing={1}>
                  <Grid item xs={12} sm={12} md={6}>
                    <TextField
                      size="small"
                      name="company"
                      variant="outlined"
                      label="Company"
                      fullWidth
                      rows={4}
                      value={jobData.company}
                      onChange={(e) => setJobData({ ...jobData, company: e.target.value })}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <DatePicker
                      name="Start Date"
                      label="Start Date"
                      value={jobData.startDate}
                      onChange={(e) => {
                        try {
                          if (e.target.value === null) setJobData({ ...jobData, startDate: null });
                          else if (e.target.value === "Invalid Date" || e.target.value === "Invalid time value") setJobData({ ...jobData, startDate: e.target.value });
                          else setJobData({ ...jobData, startDate: e.target.value.toString() });
                        } catch {
                          setJobData({ ...jobData, startDate: e.target.value });
                        }
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid container alignItems="stretch" spacing={1}>
                  <Grid item xs={12} sm={12} md={6}>
                    <Autocomplete
                      size="small"
                      fullWidth
                      id="city"
                      filterSelectedOptions
                      inputValue={jobData.Location.City ? jobData.Location.City : ""}
                      options={data}
                      getOptionLabel={(option) => (option.name ? option.name : "")}
                      getOptionSelected={(option, value) => option.name === value.name}
                      onChange={(e, v) => {
                        if (v == null) setJobData({ ...jobData, Location: { ...jobData.Location, City: "" } });
                        else setJobData({ ...jobData, Location: { ...jobData.Location, City: v.name } });
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          onChange={({ target }) => setJobData({ ...jobData, Location: { ...jobData.Location, City: target.value } })}
                          variant="outlined"
                          name="City"
                          label="City"
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6}>
                    <Autocomplete
                      size="small"
                      fullWidth
                      id="state"
                      filterSelectedOptions
                      inputValue={jobData.Location.State ? jobData.Location.State : ""}
                      options={states}
                      getOptionLabel={(option) => (option.name ? option.name : "")}
                      getOptionSelected={(option, value) => option.name === value.name}
                      onChange={(e, v) => {
                        if (v == null) setJobData({ ...jobData, Location: { ...jobData.Location, State: "" } });
                        else setJobData({ ...jobData, Location: { ...jobData.Location, State: v.name } });
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          onChange={({ target }) => setJobData({ ...jobData, Location: { ...jobData.Location, State: target.value } })}
                          variant="outlined"
                          name="State"
                          label="State"
                        />
                      )}
                    />
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12} className={classes.fullGrid}>
                  <TextField
                    size="small"
                    name="Info"
                    variant="outlined"
                    label="Description"
                    multiline
                    fullWidth
                    rows={10}
                    value={jobData.description.Info}
                    onChange={(e) => setJobData({ ...jobData, description: { ...jobData.description, Info: e.target.value } })}
                  />
                  <TextField
                    size="small"
                    name="ReqSkills"
                    variant="outlined"
                    label="Required Skills (Ex: C++,Java,Python)"
                    multiline
                    fullWidth
                    rows={2}
                    value={jobData.description.ReqSkills}
                    onChange={(e) => setJobData({ ...jobData, description: { ...jobData.description, ReqSkills: e.target.value } })}
                  />
                  <TextField
                    size="small"
                    name="applyLink"
                    variant="outlined"
                    label="Apply Link"
                    fullWidth
                    rows={2}
                    value={jobData.applyLink}
                    onChange={(e) => setJobData({ ...jobData, applyLink: e.target.value })}
                  />
                </Grid>
                <Grid container alignItems="stretch" spacing={1}>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Button className={classes.buttonSubmit} variant="contained" style={{ backgroundColor: "#0062ff", color: "#fff" }} size="small" type="submit" fullWidth>
                      Submit
                    </Button>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                    <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>
                      Clear
                    </Button>
                  </Grid>
                </Grid>
              </>
            </form>
          </DialogContent>
        </Grid>
      </Grid>
    </Dialog>
  );
};
export default Form;
