import { useState } from "react";
import { data } from '../../resources/cityData';
import Select from "../Controls/Select";
import { months } from "../../resources/months";
import { jobs } from "../../resources/jobData";
import useStyles from './styles';
import { FormControlLabel, FormGroup, Checkbox, Typography } from "@material-ui/core";
import Slider from './Slider';
import { Grid } from "@material-ui/core";
import { states } from "../../resources/stateData";

const Filter = () => {
    const [internBool, setInternBool] = useState(true);
    const [location, setLocation] = useState({
        City: '',
        State: ''
    });
    const [month, setMonth] = useState('');
    const [job, setJob] = useState('');
    const classes = useStyles();
    return (
        <Grid className={classes.filterDiv}>
            <Grid>
                <Typography variant="h6">Job Types</Typography>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} />}
                        label="Full Time"
                    />
                    <FormControlLabel
                        control={<Checkbox color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} />}
                        label="Part Time"
                    />
                    <FormControlLabel
                        control={<Checkbox color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} />}
                        label="Internships"
                    />
                    <FormControlLabel
                        control={<Checkbox color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} />}
                        label="Remote"
                    />
                </FormGroup>
            </Grid>
            <Grid className={classes.locationDiv}>
                <Select
                    name="jobProfile"
                    label="Job Profile"
                    options={jobs}
                    value={job}
                    onChange={(e) => setJob(e.target.value)}
                />
            </Grid>
            <Grid className={classes.locationDiv}>
                <Select
                    name="State"
                    label="State"
                    options={states}
                    value={location.State}
                    onChange={(e) => setLocation({ ...location, State: e.target.value })}
                />
            </Grid>
            <Grid className={classes.locationDiv}>
                <Select
                    name="City"
                    label="City"
                    options={data}
                    value={location.City}
                    onChange={(e) => setLocation({ ...location, City: e.target.value })}
                />
            </Grid>
            <Grid className={classes.postedByGrid}>
                <Typography variant="h6">Posted by</Typography>
                <FormGroup>
                    <FormControlLabel
                        control={<Checkbox color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} />}
                        label="TPC"
                    />
                    <FormControlLabel
                        control={<Checkbox color="primary" inputProps={{ 'aria-label': 'secondary checkbox' }} />}
                        label="Other websites"
                    />
                </FormGroup>
            </Grid>
            <Grid className={classes.sliderGrid}>
                <Slider internBool={internBool} />
            </Grid>
            <Grid className={classes.locationDiv}>
                <Select
                    name="StartMonth"
                    label="Start Month"
                    options={months}
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                />
            </Grid>
        </Grid>
    )
}

export default Filter;
