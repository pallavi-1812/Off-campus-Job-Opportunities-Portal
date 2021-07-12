import { useState } from "react";
import { data } from "../../resources/cityData";
import { jobTypeData } from "../../resources/jobTypeData";
import { postedByData } from "../../resources/postedByData";
import Select from "../Controls/Select";
import { months } from "../../resources/months";
import { jobs } from "../../resources/jobData";
import useStyles from "./styles";
import Slider from "./Slider";
import DatePicker from "../Controls/DatePicker";
import MultipleSelect from "../Controls/MultipeSelect";
import { Grid } from "@material-ui/core";
import { states } from "../../resources/stateData";

const Filter = () => {
  const classes = useStyles();

  const [internBool, setInternBool] = useState(true);
  const [jobType, setJobType] = useState([]);
  const [postedBy, setPostedBy] = useState([]);
  const [location, setLocation] = useState({
    City: "",
    State: "",
  });
  const [month, setMonth] = useState("");
  const [job, setJob] = useState("");
  const [startDate, setStartDate] = useState(new Date());

  data.sort(function (a, b) {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
  });

  const handleJobTypeDelete = (chipToDelete) => {
    setJobType((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  const handlePostedByDelete = (chipToDelete) => {
    setPostedBy((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };

  return (
    <Grid className={classes.filterDiv}>
      <Grid className={classes.itemDiv}>
        <MultipleSelect inputLabel='Job Type' names={jobTypeData} value={jobType} onChange={(e) => setJobType(e.target.value)} handleDelete={handleJobTypeDelete} />
      </Grid>
      <Grid className={classes.itemDiv}>
        <Select name="jobProfile" label="Job Profile" options={jobs} value={job} onChange={(e) => setJob(e.target.value)} />
      </Grid>
      <Grid className={classes.itemDiv}>
        <Select name="State" label="State" options={states} value={location.State} onChange={(e) => setLocation({ ...location, State: e.target.value })} />
      </Grid>
      <Grid className={classes.itemDiv}>
        <Select name="City" label="City" options={data} value={location.City} onChange={(e) => setLocation({ ...location, City: e.target.value })} />
      </Grid>
      <Grid className={classes.itemDiv}>
        <MultipleSelect inputLabel='Posted By' names={postedByData} value={postedBy} onChange={(e) => setPostedBy(e.target.value)} handleDelete={handlePostedByDelete} />
      </Grid>
      <Grid className={classes.sliderGrid}>
        <Slider internBool={internBool} />
      </Grid>
      <Grid className={classes.itemDiv}>
        <Select name="StartMonth" label="Start Month" options={months} value={month} onChange={(e) => setMonth(e.target.value)} />
      </Grid>
      <Grid className={classes.itemDiv}>
        <DatePicker name="Start Date" label="Start Date" value={startDate} onChange={(e) => setStartDate(e.target.value)} />
      </Grid>
    </Grid>
  );
};

export default Filter;
