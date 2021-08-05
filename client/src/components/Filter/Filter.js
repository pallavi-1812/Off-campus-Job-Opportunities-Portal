import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Autocomplete } from "@material-ui/lab";
import { withStyles } from "@material-ui/core/styles";
import { data } from "../../resources/cityData";
import { jobTypeData } from "../../resources/jobTypeData";
import { jobs } from "../../resources/jobData";
import { Grid, TextField, Tooltip, Typography } from "@material-ui/core";
import { states } from "../../resources/stateData";
import { getJobs, getJobsBySearch } from "../../actions/jobs";
import useStyles from "./styles";

const Filter = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [filters, setFilters] = useState({
    jobType: [],
    jobTitle: "",
    location: {
      City: "",
      State: "",
    },
    month: "",
    startDate: null,
  });

  const LightTooltip = withStyles((theme) => ({
    tooltip: {
      backgroundColor: "#d1e1fb",
      color: '#0062ff',
      boxShadow: theme.shadows[1],
    },
  }))(Tooltip);
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

  useEffect(() => {
    // eslint-disable-next-line
    if (filters.location.City == "" && filters.location.State == "" && filters.jobTitle == "" && filters.jobType.length === 0) {
      dispatch(getJobs());
      window.history.pushState({}, "", "/jobs");
    } else if (filters.jobType.length || filters.jobTitle || filters.location.City || filters.location.State) handleFilter();
    // eslint-disable-next-line
  }, [filters.jobType.length, filters.jobTitle, filters.location.City, filters.location.State]);

  data.sort(function (a, b) {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });

  const handleFilter = () => {
    dispatch(
      getJobsBySearch({
        jobTitle: filters.jobTitle,
        jobType: filters.jobType.join(","),
        state: filters.location.State,
        city: filters.location.City,
      })
    );
    window.history.pushState({}, "", `/jobs/search?jobType=${filters.jobType.join(",")}&jobTitle=${filters.jobTitle || ""}&state=${filters.location.State || ""}&city=${filters.location.City || ""}`);
  };

  return (
    <Grid className={classes.filterDiv}>
      <LightTooltip placement="right-start" title={<p>Please use either filters <br />or search bar. Don't use<br /> them simultaneously.</p>}>
        <Typography variant="h5" style={{ fontWeight: "530" }}>
          Browse Category
        </Typography>
      </LightTooltip>
      <Grid className={classes.itemDiv}>
        <MyAutocomplete
          size="small"
          fullWidth
          multiple
          id="jobtype"
          value={filters.jobType}
          filterSelectedOptions
          options={jobTypeData}
          getOptionLabel={(option) => option}
          onChange={(e, v) => setFilters({ ...filters, jobType: v })}
          renderInput={(params) => <TextField {...params} variant="outlined" name="jobType" label="Job Type" />}
        />
      </Grid>
      <Grid className={classes.itemDiv}>
        <Autocomplete
          size="small"
          fullWidth
          id="jobtitle"
          filterSelectedOptions
          value={filters.jobTitle.name}
          options={jobs}
          onChange={(e, v) => {
            if (v == null) setFilters({ ...filters, jobTitle: "" });
            else setFilters({ ...filters, jobTitle: v.name });
          }}
          getOptionLabel={(option) => (option.name ? option.name : "")}
          renderInput={(params) => <TextField {...params} variant="outlined" name="jobTitle" label="Job Title" />}
        />
      </Grid>
      <Grid className={classes.itemDiv}>
        <Autocomplete
          size="small"
          fullWidth
          id="state"
          filterSelectedOptions
          value={filters.location.State.name}
          options={states}
          onChange={(e, v) => {
            if (v == null) setFilters({ ...filters, location: { ...filters.location, State: "" } });
            else setFilters({ ...filters, location: { ...filters.location, State: v.name } });
          }}
          getOptionLabel={(option) => (option.name ? option.name : "")}
          renderInput={(params) => <TextField {...params} variant="outlined" name="State" label="State" />}
        />
      </Grid>
      <Grid className={classes.itemDiv}>
        <Autocomplete
          size="small"
          fullWidth
          id="city"
          filterSelectedOptions
          value={filters.location.City.name}
          options={data}
          getOptionLabel={(option) => (option.name ? option.name : "")}
          onChange={(e, v) => {
            if (v == null) setFilters({ ...filters, location: { ...filters.location, City: "" } });
            else setFilters({ ...filters, location: { ...filters.location, City: v.name } });
          }}
          renderInput={(params) => <TextField {...params} variant="outlined" name="City" label="City" />}
        />
      </Grid>
    </Grid>
  );
};

export default Filter;
