import { useState } from "react";
import { data } from "../../resources/cityData";
import { jobTypeData } from "../../resources/jobTypeData";
import { postedByData } from "../../resources/postedByData";
import { months } from "../../resources/months";
import { jobs } from "../../resources/jobData";
import useStyles from "./styles";
import Slider from "./Slider";
import DatePicker from "../Controls/DatePicker";
import { Grid, TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { withStyles } from "@material-ui/core/styles";
import { states } from "../../resources/stateData";

const Filter = () => {
  const classes = useStyles();
  const [filters, setFilters] = useState({
    jobType: [],
    jobTitle: "",
    postedBy: [],
    location: {
      City: "",
      State: "",
    },
    month: "",
    startDate: null,
  });
  const [internBool, setInternBool] = useState(true);
  data.sort(function (a, b) {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });
  const MyAutocomplete = withStyles({
    tag: {
      backgroundColor: "#3f50b5",
      height: 24,
      position: "relative",
      zIndex: 0,
      "& .MuiChip-label": {
        color: "#ffffff",
      },
      "& .MuiChip-deleteIcon": {
        color: "#757ce8",
      },
    },
  })(Autocomplete);
  console.log(filters);
  return (
    <Grid className={classes.filterDiv}>
      <Grid className={classes.itemDiv}>
        <MyAutocomplete
          size="small"
          fullWidth
          multiple
          id="jobtype"
          value={filters.jobType}
          filterSelectedOptions
          options={jobTypeData}
          getOptionLabel={(option) => (option.name ? option.name : "")}
          onChange={(e, v) => {
            if (v == null) setFilters({ ...filters, jobType: [] });
            else setFilters({ ...filters, jobType: v });
          }}
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
          renderInput={(params) => <TextField {...params} variant="outlined" name="jobProfile" label="Job Profile" />}
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
          groupBy={(option) => option.firstLetter}
          onChange={(e, v) => {
            if (v == null) setFilters({ ...filters, location: { ...filters.location, City: "" } });
            else setFilters({ ...filters, location: { ...filters.location, City: v.name } });
          }}
          renderInput={(params) => <TextField {...params} variant="outlined" name="City" label="City" />}
        />
      </Grid>
      <Grid className={classes.itemDiv}>
        <MyAutocomplete
          size="small"
          fullWidth
          multiple
          id="postedby"
          value={filters.postedBy}
          filterSelectedOptions
          options={postedByData}
          getOptionLabel={(option) => (option.name ? option.name : "")}
          onChange={(e, v) => {
            if (v == null) setFilters({ ...filters, postedBy: [] });
            else setFilters({ ...filters, postedBy: v });
          }}
          renderInput={(params) => <TextField {...params} variant="outlined" name="postedBy" label="Posted By" />}
        />
      </Grid>
      <Grid className={classes.sliderGrid}>
        <Slider internBool={internBool} />
      </Grid>
      <Grid className={classes.itemDiv}>
        <Autocomplete
          size="small"
          fullWidth
          id="startmonth"
          filterSelectedOptions
          value={filters.month.name}
          options={months}
          onChange={(e, v) => {
            if (v == null) setFilters({ ...filters, month: "" });
            else setFilters({ ...filters, month: v.name });
          }}
          getOptionLabel={(option) => (option.name ? option.name : "")}
          renderInput={(params) => <TextField {...params} variant="outlined" name="month" label="Month" />}
        />
      </Grid>
      <Grid className={classes.itemDiv}>
        <DatePicker name="Start Date" label="Start Date" value={filters.startDate} onChange={(e) => setFilters({ ...filters, startDate: e.target.value })} />
      </Grid>
    </Grid>
  );
};

export default Filter;
